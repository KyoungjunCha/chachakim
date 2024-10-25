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

    //회원가입 0813
    @PostMapping("/join")
    public String join(@RequestBody UserVO vo){
        System.out.println("UserController: 유저 등록하기 입니다.");
        System.out.println(vo);
    
     UserVO registeredUser = service.join(vo);
        
        if (registeredUser != null) {
          return "등록 완료";
        } else {
            return "등록 실패";
        }   
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
