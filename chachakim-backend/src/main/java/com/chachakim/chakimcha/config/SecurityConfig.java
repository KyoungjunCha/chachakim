package com.chachakim.chakimcha.config;

import com.chachakim.chakimcha.user.service.UserServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    private final UserServiceImpl userService;

    public SecurityConfig(UserServiceImpl userService) {
        this.userService = userService;
        if(this.userService == null){
            System.out.println("userService 없는데?");
       }
       else System.out.println(this.userService);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests((requests) -> requests
                .requestMatchers("/signup", "/user/**").permitAll()
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        )
        .httpBasic(httpBasic -> httpBasic.disable()) // HTTP Basic 인증 비활성화
        .formLogin(formLogin -> formLogin.disable()); // 기본 폼 로그인 비활성화

    return http.build();
    
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        System.out.println("SecurityConfig.passwordEncoder() 실행");
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        System.out.println("SecurityConfig.authenticationManager() 실행");
        return authenticationConfiguration.getAuthenticationManager();
    }
}
