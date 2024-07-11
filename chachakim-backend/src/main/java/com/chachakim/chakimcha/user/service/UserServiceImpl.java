package com.chachakim.chakimcha.user.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.chachakim.chakimcha.user.mapper.UserMapper;
import com.chachakim.chakimcha.user.vo.UserVO;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper mapper;

    // @Autowired
    // private PasswordEncoder passwordEncoder;

    @Override
    public List<UserVO> list(){
        return mapper.list();
    }

    @Override
    public UserVO view(int user_Id){
        return mapper.view(user_Id);
    }

    @Override
    public UserVO login(String id, String password){
        System.out.println("UserServiceImpl: 로그인 요청 데이터: " + id);
        UserVO user = mapper.login(Map.of("id", id, "password", password)); // 기존 login 메서드 사용
        if (user != null && password.equals(user.getPassword())) { // 평문 비밀번호 비교
            System.out.println("UserServiceImpl: 로그인 성공: " + user.getId());
            return user;
        } else {
            System.out.println("UserServiceImpl: 로그인 실패");
            return null;
        }
    }


    
    // 24.07.10 13:27 임시 로그인 과정
    //    @Override
    // public UserVO login(String id, String password) {
    //     System.out.println("UserServiceImpl: 로그인 요청 데이터: " + id);
    //     Map<String, String> params = new HashMap<>();
    //     params.put("id", id);
    //     params.put("password", password);
    //     UserVO user = mapper.login(params);
    //     if (user != null && password.equals(user.getPassword())) { // 평문 비밀번호 비교
    //         System.out.println("UserServiceImpl: 로그인 성공: " + user.getId());
    //         return user;
    //     } else {
    //         System.out.println("UserServiceImpl: 로그인 실패");
    //         return null;
    //     }
    // }
    // @Override
    // public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
    //     System.out.println("impl 인데 돌아감?");
    //     UserVO user = mapper.login(Map.of("id", id, "password", "")); // 기존 login 메서드 사용
    //     if (user == null) {
    //         System.out.println("왜 이리로?: ");
    //         System.out.println(id);
    //         throw new UsernameNotFoundException("User not found");
    //     }
    //     return org.springframework.security.core.userdetails.User.withUsername(user.getId())
    //         .password(user.getPassword())
    //         .roles("USER")
    //         .build();
    // }



    @Override
    public int write(UserVO vo) {
        // vo.setPassword(passwordEncoder.encode(vo.getPassword())); // 비밀번호 암호화
        return mapper.write(vo); // 유저 등록
    }
}
