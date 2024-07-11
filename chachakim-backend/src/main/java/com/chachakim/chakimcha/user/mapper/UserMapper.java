package com.chachakim.chakimcha.user.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
// import org.hibernate.mapping.Map;
import org.springframework.stereotype.Repository;

import com.chachakim.chakimcha.user.vo.UserVO;

@Mapper
@Repository
public interface UserMapper {
    // 유저 리스트 보여주기
    public List<UserVO> list();

    // 유저 상세보기
    public UserVO view(int user_Id);

    // 로그인
    public UserVO login(Map<String, String> params);

    // 유저 등록
    public int write(UserVO vo);
}
