package com.chachakim.chakimcha.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chachakim.chakimcha.user.service.UserService;
import com.chachakim.chakimcha.user.vo.UserVO;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    @Qualifier("userServiceImpl")
    private UserService service;

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

    @PostMapping("/login")
    public UserVO login(@RequestBody UserVO vo) {
        System.out.println("UserController: 로그인 요청 데이터: " + vo.getId());
        UserVO user = service.login(vo.getId(), vo.getPassword());
        if (user != null) {
            System.out.println("UserController: 로그인 성공: " + user.getId());
        } else {
            System.out.println("UserController: 로그인 실패");
        }
        return user;
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
