package com.chachakim.chakimcha.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chachakim.chakimcha.user.service.UserService;
import com.chachakim.chakimcha.user.vo.UserVO;

import jakarta.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

//0716
import org.springframework.security.core.Authentication;

//0717
import com.chachakim.chakimcha.jwt.JwtUtil;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    @Qualifier("userServiceImpl")
    private UserService service;

    //0716
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;


    @GetMapping("/list")
    public String list(){
        System.out.println("UserController: 유저 리스트입니다.");
        return "home";
    }

    @GetMapping("/view")
    public UserVO view(){
        System.out.println("UserController: 유저 각 항목별 상세보기입니다.");
        UserVO vo = service.view(1);
        System.out.println("UserController: 여긴 실행되냐?");
        if(vo != null){
            System.out.println(vo);
        }
        return vo;
    }

    @PostMapping("/write")
    public String write(@RequestBody UserVO vo){
        System.out.println("UserController: 유저 등록하기 입니다.");
        System.out.println(vo);
        return null;
    }

    @PostMapping("/register")
    public String register(@RequestBody UserVO vo){
        System.out.println("UserController: 유저 등록하기 입니다.");
        System.out.println(vo);
        service.write(vo);
        return "등록 완료";
    }

    // @PostMapping("/login")
    // public UserVO login(@RequestBody UserVO vo) {
    //     System.out.println("UserController: 로그인 요청 데이터: " + vo.getId());
    //     UserVO user = service.login(vo.getId(), vo.getPassword());
    //     if (user != null) {
    //         System.out.println("UserController: 로그인 성공: " + user.getId());
    //     } else {
    //         System.out.println("UserController: 로그인 실패");
    //     }
    //     return user;
    // }

    // //0716
    // @PostMapping("/login")
    // public String login(@RequestBody UserVO user, HttpSession session) {
    //     UsernamePasswordAuthenticationToken authenticationToken =
    //             new UsernamePasswordAuthenticationToken(user.getId(), user.getPassword());
    //     System.out.println("여기");
    //     Authentication authentication = authenticationManager.authenticate(authenticationToken);
    //     SecurityContextHolder.getContext().setAuthentication(authentication);
    //     System.out.println("여기2");        
    //     session.setAttribute("SPRING_SECURITY_CONTEXT", SecurityContextHolder.getContext());
    //     return "Login successful";
    // }

    //0717
    // 로그인 요청을 처리하는 엔드포인트
    @PostMapping("/login")
    public String createAuthenticationToken(@RequestBody UserVO userVO) throws Exception {
        System.out.println("컨트롤러는 들어와 지냐?");
        try {
            System.out.println("로그인 요청 컨트롤러" + userVO);
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(userVO.getId(), userVO.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            System.out.println("UserController - 유저 인증 성공 : " + userVO.getId());
        } catch (Exception e) {
            System.out.println("유저 인증 실패: " + e.getMessage());
            throw new Exception("잘못된 아이디 혹은 비밀번호", e);
        }

        final UserDetails userDetails = service.loadUserByUsername(userVO.getId());
        System.out.println("로딩된 유저 디테일 : " + userDetails);
        final String jwt = jwtUtil.generateToken(userDetails.getUsername());
        System.out.println("UserController - 생성된 jwt : " + jwt);

        return jwt; // JWT 토큰 반환
    }

    @GetMapping("/update")
    public String update(){
        System.out.println("UserController: 유저 수정하기 입니다.");
        return null;
    }

    @GetMapping("/delete")
    public String delete(){
        System.out.println("UserController: 유저 글 삭제하기 입니다.");
        return null;
    }
}
