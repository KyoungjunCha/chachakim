package com.chachakim.chakimcha.vs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chachakim.chakimcha.vs.mapper.VsMapper;
import com.chachakim.chakimcha.vs.vo.VsVO;

@Service
public class VsServiceImpl implements VsService  {
    
    @Autowired
    private VsMapper mapper;

    @Override  // VS 리스트 보여주기
    public List<VsVO> list(){
        return null;
    }

    @Override // VS 클릭 시 각 항목별 상세 보기
    public VsVO view(int vs_Id){
        System.out.println("VsServiceImpl.view() 실행중입니다. 즉 서비스까진 넘어온거임");
        return mapper.view(vs_Id);
    }

/*


    @Override // VS 글 등록하기
    public int write(VsVO vo){
        return 0;
    }

    @Override  // VS 글 수정하기
    public int update(VsVO vo){
        return 0;
    }

    @Override // VS 글 삭제하기
    public int delete(int vs_Id){
        return 0;
    }
     */
    
} 
