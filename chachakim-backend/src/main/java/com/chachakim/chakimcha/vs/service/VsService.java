package com.chachakim.chakimcha.vs.service;

import java.util.List;

import com.chachakim.chakimcha.vs.vo.VsVO;

public interface VsService {

    // VS 리스트 보여주기
    public List<VsVO> list();

    // VS 클릭 시 각 항목별 상세 보기
    public VsVO view(int vs_Id);

    /* 
    // VS 글 등록하기
    public int write(VsVO vo);

    // VS 글 수정하기
    public int update(VsVO vo);

    // VS 글 삭제하기
    public int delete(int vs_Id);
    */
} 
