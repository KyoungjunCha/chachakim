package com.chachakim.chakimcha.jwt;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.filter.OncePerRequestFilter;

import com.chachakim.chakimcha.user.vo.CustomUserDetails;
import com.chachakim.chakimcha.user.vo.UserVO;

import io.jsonwebtoken.ExpiredJwtException;
import io.micrometer.common.lang.NonNull;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException; // 하나의 import만 사용
import java.io.PrintWriter;

//검증 필터 요청에 따라 한번만 진행됨 1요청 1응답
public class JWTFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;

    public JWTFilter(JwtUtil jwtUtil) {

        this.jwtUtil = jwtUtil;
    }


    //검증을 위한 함수 Override
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    // 0831
		// 		//request에서 Authorization 헤더를 찾음
    //     String authorization= request.getHeader("Authorization");
				
		// //Authorization 헤더 검증 null 이거나 Bears 로 시작 안하면 return
    //     if (authorization == null || !authorization.startsWith("Bearer ")) {

    //         System.out.println("token null");
    //         //만약에 null 이거나 Bears 가 아니면 다음 필터로 넘김 request response 를
    //         filterChain.doFilter(request, response);
						
		// 	//조건이 해당되면 메소드 종료 (필수)
    //         return;
    //     }
			
    //     System.out.println("authorization now");
		// 		//Bearer 부분 제거 후 순수 토큰만 획득
    //     String token = authorization.split(" ")[1];
    //     System.out.println(token);
			
		// 		//토큰 소멸 시간 검증
    //     if (jwtUtil.isExpired(token)) {
    //       System.out.println("token expired");

    //       // 리프레시 토큰도 만료된 경우 로그인 페이지로 리다이렉트
    //       String refreshToken = request.getHeader("Refresh-Token");
    //       if (refreshToken == null || jwtUtil.isExpired(refreshToken)) {
    //           response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
    //           // response.getWriter().write("Refresh token expired");
    //           response.sendRedirect("/login");
    //           return;
    //       }


    //       //0831
    //       // 리프레시 토큰을 사용하여 새로운 엑세스 토큰 생성
    //       // String id = jwtUtil.getId(refreshToken);
    //       // String permission = jwtUtil.getPermission(refreshToken);
    //       // String newAccessToken = jwtUtil.createJwt(id, permission, 60*60*1000L); // 새로운 액세스 토큰 발급 (1시간 유효)

    //       // response.addHeader("Authorization", "Bearer " + newAccessToken);
          
    //       filterChain.doFilter(request, response);
    //       return;
    //     }

		// 		//토큰에서 username과 role 획득
    //     String id = jwtUtil.getId(token);
    //     String permission = jwtUtil.getPermission(token);
				
		// 		//userEntity를 생성하여 값 set
    //     UserVO userVo = new UserVO();
    //     userVo.setId(id);
    //     //매번 비밀번호를 확인할 수 없기 때문에 임시 비밀번호 부여
    //     userVo.setPassword("temppassword");
    //     userVo.setPermission(permission);
				
		// 		//UserDetails에 회원 정보 객체 담기
    //     CustomUserDetails customUserDetails = new CustomUserDetails(userVo);

		// 		//스프링 시큐리티 인증 토큰 생성
    //     Authentication authToken = new UsernamePasswordAuthenticationToken(customUserDetails, null, customUserDetails.getAuthorities());
		// 		//세션에 사용자 등록
    //     SecurityContextHolder.getContext().setAuthentication(authToken);

    //     filterChain.doFilter(request, response);

      //0901
      // 헤더에서 access키에 담긴 토큰을 꺼냄
      String accessToken = request.getHeader("access");

      // 토큰이 없다면 다음 필터로 넘김
      if (accessToken == null) {

          filterChain.doFilter(request, response);

          return;
      }

      // 토큰 만료 여부 확인, 만료시 다음 필터로 넘기지 않음
      try {
          jwtUtil.isExpired(accessToken);
      } catch (ExpiredJwtException e) {

          //response body
          PrintWriter writer = response.getWriter();
          writer.print("access token expired");

          //response status code
          response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
          return;
      }

      // 토큰이 access인지 확인 (발급시 페이로드에 명시)
      String category = jwtUtil.getCategory(accessToken);

      if (!category.equals("accessToken")) {

          //response body
          PrintWriter writer = response.getWriter();
          writer.print("invalid access token");

          //response status code
          response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
          return;
      }

      // username, role 값을 획득
      String id = jwtUtil.getId(accessToken);
      String permission = jwtUtil.getPermission(accessToken);

      UserVO userVo = new UserVO();
      userVo.setId(id);
      userVo.setPermission(permission);
      CustomUserDetails customUserDetails = new CustomUserDetails(userVo);

      //로그인 처리를 위한 진짜 토큰? access & refresh token 둘다 들어가 있다보면됨 
      Authentication authToken = new UsernamePasswordAuthenticationToken(customUserDetails, null, customUserDetails.getAuthorities());
      //임시 토큰 세션 생성
      SecurityContextHolder.getContext().setAuthentication(authToken);

      filterChain.doFilter(request, response);
    }
}