package com.chachakim.chakimcha.config;

import java.util.Iterator;
import java.io.BufferedReader;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.chachakim.chakimcha.Refresh.RefreshMapper;
import com.chachakim.chakimcha.Refresh.RefreshVO;
import com.chachakim.chakimcha.jwt.JwtUtil;
import com.chachakim.chakimcha.user.vo.CustomUserDetails;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.FilterChain;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


// import java.io.BufferedReader;
import java.io.IOException;
import java.sql.Date;
import java.util.Map;
// import com.fasterxml.jackson.databind.ObjectMapper;



//UsernamePasswordAuthenticationFilter SecurityConfig 에서 disable 처리한 것을 커스텀함. 여기에서 로그인 인증 처리 
public class LoginFilter extends UsernamePasswordAuthenticationFilter {

    private final JwtUtil jwtUtil;

    //UsernamePasswordAuthenticationFilter 여기서 받은 값을 Manager 로 던져서 여기서 검증을 진행함
    private final AuthenticationManager authenticationManager;

    private RefreshMapper refreshMapper;

    public LoginFilter(AuthenticationManager authenticationManager, JwtUtil jwtUtil, RefreshMapper refreshMapper) {

        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.refreshMapper = refreshMapper;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

		// 		//클라이언트 요청에서 username, password 추출
    //     // String id = obtainUsername(request);
    //     // String password = obtainPassword(request);
    //     // obtainUsername 으로 하면 무조건 username 으로 해야함 .. field 값이
    //     // 잘하면 json 형식 즉 raw 데이터 형으로도 보낼 수 있도록 수정해야 할 듯
    //     String id = request.getParameter("id");
    //     String password = request.getParameter("password");

    //     System.out.println("유저 id 확보 되었는지 확인 " + id);
    //     System.out.println("유저 password 확보 되었는지 확인 " + password);


    //     if (id == null || password == null) {
    //     // 로그를 추가하고 null 체크 후 예외를 던질 수 있습니다.
    //     throw new AuthenticationServiceException("ID 또는 비밀번호가 null입니다.");
    // }

		// 		//스프링 시큐리티에서 username과 password를 검증하기 위해서는 token에 담아야 함
    //     UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(id, password, null);

		// 		//token에 담은 검증을 위한 AuthenticationManager로 전달
    //     return authenticationManager.authenticate(authToken);
    
  //0831 json 형태로 파싱
  try {
        BufferedReader reader = request.getReader();
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            sb.append(line);
        }

        // JSON 파싱 0831
        ObjectMapper objectMapper = new ObjectMapper();
        Map<String, String> jsonRequest = objectMapper.readValue(sb.toString(), Map.class);
        
        String id = jsonRequest.get("id");
        String password = jsonRequest.get("password");

        if (id == null || password == null) {
            throw new AuthenticationServiceException("ID 또는 비밀번호가 null입니다.");
        }

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(id, password, null);
        return authenticationManager.authenticate(authToken);

    } catch (IOException e) {
        throw new AuthenticationServiceException("Request InputStream 오류", e);
    }
  }

		//로그인 성공시 실행하는 메소드 (여기서 JWT를 발급하면 됨)
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) {
      CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();

        String id = customUserDetails.getUsername();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iterator = authorities.iterator();
        GrantedAuthority auth = authorities.isEmpty() ? null : iterator.next();
        if (auth == null) {
            throw new AuthenticationServiceException("No authorities found for user.");
        }
        
        String role = auth.getAuthority();

        //토큰 생성
        String accessToken = jwtUtil.createJwt("accessToken", id, role, 600000L);
        String refreshToken = jwtUtil.createJwt("refreshToken", id, role, 86400000L);

        //0905
        addRefreshVO(id, refreshToken, 86400000L);

        // response.addHeader("Authorization", "Bearer " + accessToken);
        // response.addHeader("Refresh-Token", refreshToken);

        //0901 새로운 응답 방식
        response.setHeader("accessToken", accessToken);
        response.addCookie(createCookie("refreshToken",refreshToken));
        //응답 상태 코드 보내기
        response.setStatus(HttpStatus.OK.value());


        // CORS 설정을 위한 헤더 추가 (클라이언트가 헤더를 읽을 수 있도록 설정)
        // response.addHeader("Access-Control-Expose-Headers", "Authorization, Refresh-Token");



        // String token = jwtUtil.createJwt(id, role, 60*60*10L);
        // 해당 인증방식에 Bearer 를 붙이는 이유는 RFC 7235 인증 방식의 룰이다.
        // response.addHeader("Authorization", "Bearer " + token);
    }

		//로그인 실패시 실행하는 메소드
    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) {
      response.setStatus(401);
      System.out.println("여기가 문제라는 건가");
    }

    private Cookie createCookie(String key, String value) {

      Cookie cookie = new Cookie(key, value);
      //쿠키 생존시간
      cookie.setMaxAge(24*60*60);
      //쿠키 https 버전 사용시에
      //cookie.setSecure(true);
      //쿠키 적용 범위
      //cookie.setPath("/");
      //클라이언트 단에서 js 로 쿠키에 접근하지 못하게 제한하기 위함
      cookie.setHttpOnly(true);
  
      return cookie;
  }

  private void addRefreshVO(String username, String refreshToken, Long expiredMs) {

    Date date = new Date(System.currentTimeMillis() + expiredMs);

    RefreshVO refreshVO = new RefreshVO();
    refreshVO.setUsername(username);
    refreshVO.setRefreshToken(refreshToken);
    refreshVO.setExpiration(date.toString());

    refreshMapper.save(refreshVO);
    // reissueMapper.save(reissueVO);
    // refreshRepository.save(refreshEntity);
  }
}
