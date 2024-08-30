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

import com.chachakim.chakimcha.jwt.JWTFilter;
// import com.chachakim.chakimcha.jwt.JwtRequestFilter;
import com.chachakim.chakimcha.jwt.JwtUtil;
import com.chachakim.chakimcha.user.service.UserServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    //0814
    // @Autowired
    // private JwtRequestFilter jwtRequestFilter;

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


    // 0810 jwt stateless 방식
    // @Bean
    // public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    //     http
    //         .csrf(csrf -> csrf.disable())
    //         // .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()).and()
    //         // 경로별 인가 작업
    //         .authorizeHttpRequests((requests) -> requests
    //             .requestMatchers("/signup", "/user/**", "/notices/**").permitAll()
    //             // .requestMatchers("/notices/**").hasRole("USER")
    //             .anyRequest().authenticated()
    //         )
    //         //세션 설정
    //         .sessionManagement(session -> session
    //         .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    //     )// 두 방식을 disable 하는 이유는 우리는 jwt 로 인증할 것이기 때문.
    //     .httpBasic(httpBasic -> httpBasic.disable()) // HTTP Basic 인증 비활성화
    //     .formLogin(formLogin -> formLogin.disable()) // 기본 폼 로그인 비활성화
    //     .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

    // return http.build();
    
    // }

    // @Bean //항상 해쉬값 처리된 데이터로 인증 하기 때문에 선언
    // public BCryptPasswordEncoder passwordEncoder() {
    //     return new BCryptPasswordEncoder();
    // }

    // @Bean
    // public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
    //     return authenticationConfiguration.getAuthenticationManager();
    // }



    //0814 - 0817 new version SecurityConfig for easy read.
	//AuthenticationManager가 인자로 받을 AuthenticationConfiguraion 객체 생성자 주입
	private final AuthenticationConfiguration authenticationConfiguration;
        private final JwtUtil jwtUtil;


    public SecurityConfig(AuthenticationConfiguration authenticationConfiguration, JwtUtil jwtUtil) {
    
        this.authenticationConfiguration = authenticationConfiguration;
        this.jwtUtil = jwtUtil;
        }
    
            //AuthenticationManager Bean 등록
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
    
        return configuration.getAuthenticationManager();
    }
    
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
    
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                .csrf((auth) -> auth.disable());

        http
                .formLogin((auth) -> auth.disable());

        http
                .httpBasic((auth) -> auth.disable());

        http
                .authorizeHttpRequests((auth) -> auth
                        .requestMatchers("/user/join","/login","/","/notices/**","/events/**").permitAll()
                        .requestMatchers("/admin").hasRole("ADMIN")
                        .anyRequest().authenticated());

			//JWTFilter 등록
        http
                .addFilterBefore(new JWTFilter(jwtUtil), LoginFilter.class);


        	//필터 추가 LoginFilter()는 인자를 받음 (AuthenticationManager() 메소드에 authenticationConfiguration 객체를 넣어야 함) 따라서 등록 필요
        http    //대체를 위해서 At 필터 사용
                .addFilterAt(new LoginFilter(authenticationManager(authenticationConfiguration),jwtUtil),UsernamePasswordAuthenticationFilter.class);
    
        http
                .sessionManagement((session) -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS));
    
    
        return http.build(); // build() 메소드를 호출해야 합니다.
    }

}





