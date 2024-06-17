package com.chachakim.chakimcha.vs.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.chachakim.chakimcha.vs.vo.VsVO;

@Mapper
@Repository
public interface VsMapper {
     // VS 리스트 보여주기
    public List<VsVO> list();

    // VS 클릭 시 각 항목별 상세 보기
     public VsVO view(int vs_Id);

}
