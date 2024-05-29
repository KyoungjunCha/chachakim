package com.chachakim.chakimcha.user.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.chachakim.chakimcha.user.vo.UserVO;

@Mapper
@Repository
public interface UserMapper {
     // 공지사항 리스트 보여주기
    public List<UserVO> list();

    // 공지사항 클릭 시 각 항목별 상세 보기
     public UserVO view(int user_Id);

}
