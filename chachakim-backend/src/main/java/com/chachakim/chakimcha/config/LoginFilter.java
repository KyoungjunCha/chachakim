package com.chachakim.chakimcha.config;

import java.util.Iterator;
import java.util.List;
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

import io.jsonwebtoken.ExpiredJwtException;
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
      System.out.println("LoginFilter 생성자"); // 관호
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.refreshMapper = refreshMapper;
        System.out.println("LoginFilter 생성자 끝"); // 관호
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
      System.out.println("LoginFilter.attemptAuthentication() 시작"); // 관호
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
      System.out.println("LoginFilter.successfulAuthentication() 시작");// 관호
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

        response.setHeader("Authorization", "Bearer " + accessToken);

        //0905
        addRefreshVO(id, refreshToken, 86400000L);

        List<String> oldRefreshTokens = refreshMapper.findByUsername(id);  // 여러 개의 토큰 가져오기
            if (oldRefreshTokens != null && !oldRefreshTokens.isEmpty()) {
            for (String oldRefreshToken : oldRefreshTokens) {
                try {
                    if (jwtUtil.isExpired(oldRefreshToken)) {
                        refreshMapper.deleteByRefresh(oldRefreshToken);  // 만료된 토큰 삭제
                    }//jwtUtil.isExpired 가 유통기한 지난거 에러 리턴해서 try catch 로 잡아서 직접 삭제 해야함..
                } catch (ExpiredJwtException e) {
                    // 만료된 토큰 예외를 처리하고 삭제
                    refreshMapper.deleteByRefresh(oldRefreshToken);  // 만료된 토큰 삭제
                }
            }
        }


        System.out.println("LoginFilter.successfulAuthentication() 끝나기 직전");// 관호
        //0901 새로운 응답 방식
        response.setHeader("accessToken", accessToken);
        response.addCookie(createCookie("refreshToken",refreshToken));
        //응답 상태 코드 보내기
        response.setStatus(HttpStatus.OK.value());

    }

		//로그인 실패시 실행하는 메소드
    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) {
      System.out.println("LoginFilter.unsuccessfulAuthentication() 시작"); // 관호
      response.setStatus(401);
      System.out.println("여기가 문제라는 건가");
    }

    private Cookie createCookie(String key, String value) {
      System.out.println("LoginFilter.createCookie() 시작"); // 관호
      Cookie cookie = new Cookie(key, value);
      //쿠키 생존시간
      cookie.setMaxAge(24*60*60);
      //쿠키 https 버전 사용시에
      //cookie.setSecure(true);
      //쿠키 적용 범위
      //cookie.setPath("/");
      //클라이언트 단에서 js 로 쿠키에 접근하지 못하게 제한하기 위함
      cookie.setHttpOnly(true);
      System.out.println("LoginFilter.createCookie() 끝"); // 관호
      return cookie;
  }

  private void addRefreshVO(String username, String refreshToken, Long expiredMs) {
    System.out.println("LoginFilter.addRefreshVO() 시작"); // 관호

    Date date = new Date(System.currentTimeMillis() + expiredMs);

    RefreshVO refreshVO = new RefreshVO();
    refreshVO.setUsername(username);
    refreshVO.setRefreshToken(refreshToken);
    refreshVO.setExpiration(date.toString());

    refreshMapper.save(refreshVO);
    // reissueMapper.save(reissueVO);
    // refreshRepository.save(refreshEntity);
    System.out.println("LoginFilter.addRefreshVO() 끝"); // 관호
  }
}