package com.chachakim.chakimcha.vs.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chachakim.chakimcha.vs.mapper.VsMapper;
import com.chachakim.chakimcha.vs.vo.VsVO;

// 이미지 관련 라이브러리인듯
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@Service
public class VsServiceImpl implements VsService  {
    
    @Autowired
    private VsMapper mapper;

    @Override
    public List<VsVO> getVsList() {
        System.out.println("VsServiceImpl.getVsList() 실행중입니다.");
        return mapper.getVsList();
    }

    @Override
    public VsVO getVsById(int vs_Id) {
        System.out.println("VsServiceImpl.getVsById() 실행중입니다.");
        return mapper.getVsById(vs_Id);
    }
    
    @Override
    public List<String> getImageById(int vs_Id) {
        System.out.println("VsServiceImpl.getImageById() 실행중입니다.");
        return mapper.getImageById(vs_Id);
    }
    

    @Override
    public int insertVsWithImages(VsVO vo) {

        // 1. VS 테이블에 데이터 삽입
        int result = mapper.insertVs(vo); // vs_id가 생성되어 vo 객체에 저장됨
        
        if (result != 1) { // 나중에 지우거나 바꿀 거임
            System.out.println("VS 테이블에 데이터 삽입 실패");
            return 0;
        }
        System.out.println("VS 이미지 이전 삽입까지는 완료");

         // 2. 생성된 vs_id 가져오기
         int vsId = vo.getVs_Id();

        // 3. 이미지 배열 삽입 (imagevs 테이블)
        String[] image = vo.getImage();
        for (int i = 0; i < image.length; i++) {
            String imagePath = image[i]; // 이미지 경로
            int optionNumber = i + 1; // option_number는 1부터 시작

            // 이미지 삽입 쿼리 실행
            mapper.insertImageVs(vsId, imagePath, optionNumber);
            System.out.println("이미지 삽입 진행중");
        }

        System.out.println("VS와 이미지 데이터가 성공적으로 삽입되었습니다.");
        return 1;
    }


    @Override
    public int updateVs(VsVO vo) {
        System.out.println("VsServiceImpl.updateVs() 실행중입니다.");
        return mapper.updateVs(vo);
    }

    @Override
    public int deleteVs(int vs_Id) {
        System.out.println("VsServiceImpl.deleteVs() 실행중입니다.");
        return mapper.deleteVs(vs_Id);
    }

    @Override
    public int increaseTakeVs(VsVO vo) {
        System.out.println("VsServiceImpl.increaseTakeVs() 실행중입니다.");
        return mapper.increaseTakeVs(vo);
    }



    
    
} 
