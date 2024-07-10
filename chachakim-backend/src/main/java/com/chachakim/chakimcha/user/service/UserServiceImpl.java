package com.chachakim.chakimcha.user.service;

import java.util.Collections;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.chachakim.chakimcha.user.mapper.UserMapper;
import com.chachakim.chakimcha.user.vo.UserVO;

@Service
public class UserServiceImpl implements UserService  {
    
    @Autowired
    private UserMapper mapper;

    @Override  // 유저 리스트 보여주기
    public List<UserVO> list(){
        return null;
    } // end of list

    @Override // 유저 클릭 시 각 항목별 상세 보기
    public UserVO view(int user_Id){
        System.out.println("UserServiceImpl.view() 실행중입니다. 즉 서비스까진 넘어온거임");
        return mapper.view(user_Id);
    } // end of view

    @Override
    public UserDetails loadUserByUsername(@Param("id") String id) throws UsernameNotFoundException { // 메서드 이름 바꾸고 싶은데 오버라이딩이라 그냥 둠
        
        System.out.println("UserServiceImpl.loadUserByUsername()");

        System.out.println("UserServiceImpl.loadUserByUsername()의 id = " + id);
        UserVO userVO = mapper.findUserById(id);
        
        if (userVO == null) {
            System.out.println("UserServiceImpl.loadUserByUsername()에서 userVO가 없대");
            throw new UsernameNotFoundException("User not found");
        }

        System.out.println("UserServiceImpl.loadUserByUsername()의 userVO.id= " + userVO.getId());
        System.out.println("UserServiceImpl.loadUserByUsername()의 userVO.pw= " + userVO.getPassword());
        String role = mapper.findRolesById(userVO.getId());

        if(role == null){
            System.out.println("UserServiceImpl.loadUserByUsername()에서 role == null이면 얘가 나옴");
        }else{
            System.out.println("");
        }

        List<GrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority(role)); // 해당 id 권한 가져오기

        if(authorities == null){
            System.out.println("UserServiceImpl.loadUserByUsername()에서 userVO가 없대");
        }else System.out.println(authorities);

        System.out.println("UserServiceImpl.loadUserByUsername()에서 마지막 return 전이야");
        return new User(userVO.getId(), userVO.getPassword(),true,
                true, true,true, authorities);

    } // end of loadUserByUsername

/*


    @Override // 유저 글 등록하기
    public int write(UserVO vo){
        return 0;
    }

    @Override  // 유저 글 수정하기
    public int update(UserVO vo){
        return 0;
    }

    @Override // 유저 글 삭제하기
    public int delete(int user_Id){
        return 0;
    }
     */
    
} 
