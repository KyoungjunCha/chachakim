// package com.chachakim.chakimcha.user.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Qualifier;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;

// import com.chachakim.chakimcha.user.vo.UserVO;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RequestParam;


// @RestController
// @RequestMapping("/auth")
// public class AuthController {
    
//     @Autowired
//     @Qualifier("authServiceImpl")
//     private AuthService service;

//     @PostMapping("/login")
//     public UserVO login(@RequestBody UserVO vo) {
//         System.out.println("UserController: 로그인 요청 데이터: " + vo.getId());
//         UserVO user = service.login(vo.getId(), vo.getPassword());
//         if (user != null) {
//             System.out.println("UserController: 로그인 성공: " + user.getId());
//         } else {
//             System.out.println("UserController: 로그인 실패");
//         }
//         return user;
//     }
// }
