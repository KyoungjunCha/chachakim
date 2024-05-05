package com.chachakim.chakimcha.filter;

import java.io.IOException;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.SecurityContextDsl;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.chachakim.chakimcha.provider.JwtProvider;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    
    private final JwtProvider jwtProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
            
            try {
                    String token = parseBearerToken(request);

                    if(token == null){
                        filterChain.doFilter(request, response);
                        return;
                    }
        
                    String email = jwtProvider.validate(token);
        
                    if(email == null){
                        filterChain.doFilter(request, response);
                        return;
                    }
                    AbstractAuthenticationToken authenticationToken = 
                        new UsernamePasswordAuthenticationToken(email, null, AuthorityUtils.NO_AUTHORITIES);
                        authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request)); // 웹인증 세부정보 소스
        
                        SecurityContext securityContext = SecurityContextHolder.createEmptyContext(); // 비어있는 context를 하나 만들어줌
                        securityContext.setAuthentication(authenticationToken); // authentication을 추가
        
                        SecurityContextHolder.setContext(securityContext);
                
            } catch (Exception exception) {
                exception.printStackTrace();
            }
            
            filterChain.doFilter(request, response); // 다음 필터로 넘기자

    } // end of doFilterInternal method

    private String parseBearerToken(HttpServletRequest request){

        String authorization = request.getHeader("Authorization");
        
        boolean hasAuthorization = StringUtils.hasText(authorization); // hasText 는 null 이거나 길이가 0 이거나 화이트스페이스(공백으로만 이루어져있음) 이면 false을 반환함
        if(!hasAuthorization) return null;

        boolean isBearer = authorization.startsWith("Bearer ");
        if(!isBearer) return null;

        String  token = authorization.substring(7);
        return token;
    }// end of parseBearerToken method
}
