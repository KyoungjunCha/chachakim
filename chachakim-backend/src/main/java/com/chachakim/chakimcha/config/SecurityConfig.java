// // package com.chachakim.chakimcha.config;

// // import org.springframework.context.annotation.Bean;
// // import org.springframework.context.annotation.Configuration;
// // import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
// // import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// // import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// // import org.springframework.security.core.userdetails.UserDetailsService;
// // import org.springframework.security.web.SecurityFilterChain;

// // @Configuration
// // @EnableWebSecurity
// // public class SecurityConfig {

// //     @Bean
// //     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
// //         System.out.println("Configuring SecurityFilterChain");

// //         http.csrf(csrf -> {
// //             System.out.println("Disabling CSRF protection");
// //             csrf.disable();
// //         })
// //         .authorizeHttpRequests(authorize -> {
// //             System.out.println("Configuring authorization requests");
// //             authorize.requestMatchers("/user/login", "/user/register","/**").permitAll(); // 로그인과 회원가입 경로 허용
// //         })
// //         .formLogin(formLogin -> {
// //             System.out.println("Configuring form login");
// //             formLogin.loginPage("/login")
// //                      .loginProcessingUrl("/user/login")
// //                      .defaultSuccessUrl("/home", true)
// //                      .failureUrl("/user/login?error=true")
// //                      .permitAll();
// //         })
// //         .logout(logout -> {
// //             System.out.println("Configuring logout");
// //             logout.logoutUrl("/user/logout")
// //                    .logoutSuccessUrl("/user/login")
// //                    .permitAll();
// //         });

// //         System.out.println("SecurityFilterChain configured");
// //         return http.build();
// //     }

// //     @Bean
// //     public DaoAuthenticationProvider authenticationProvider(UserDetailsService userService) { 
// //         System.out.println("Configuring DaoAuthenticationProvider");
// //         DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
// //         authProvider.setUserDetailsService(userService);
// //         System.out.println("DaoAuthenticationProvider configured");
// //         return authProvider;
// //     }
// // }




// 구 버전

package com.chachakim.chakimcha.config;

import org.springframework.beans.factory.annotation.Autowired;
import com.chachakim.chakimcha.jwt.JwtRequestFilter;
import com.chachakim.chakimcha.user.service.UserServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
public class SecurityConfig {

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    // @Autowired
    // private final UserServiceImpl userService;


    // public SecurityConfig(UserServiceImpl userService) {
    //     this.userService = userService;
    //     if(this.userService == null){
    //         System.out.println("userService 없는데?");
    //    }
    //    else System.out.println(this.userService);
    // }


    // 0718
    // 내정보, 댓글, 이벤트 참여 (설문조사, vs 투표) - 일정부분 권한 수정 댓글입력마다 jwt 권한 확인 혹은 미로그인 사용자는 입력버튼 submit 시에 권한 확인
    // 리프레시 토큰 구조 만들기
    // jwt 권한정보 확인

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            // .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()).and()
            .authorizeHttpRequests((requests) -> requests
                .requestMatchers("/signup", "/user/**", "/notices/**").permitAll()
                // .requestMatchers("/notices/**").hasRole("USER")
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        )
        .httpBasic(httpBasic -> httpBasic.disable()) // HTTP Basic 인증 비활성화
        .formLogin(formLogin -> formLogin.disable()) // 기본 폼 로그인 비활성화
        .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

    return http.build();
    
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}





