package com.chachakim.chakimcha.vs.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.chachakim.chakimcha.vs.vo.VsVO;

@Mapper
@Repository
public interface VsMapper {
    
    // VS 리스트 보여주기
    public List<VsVO> getVsList();

    // VS 클릭 시 각 항목별 상세 보기
    public VsVO getVsById(int vs_Id);
    
    // VS 클릭 시 각 항목별 상세보기 위해 사진 가져오기
    public List<String> getImageById(int vs_Id);
    
    // VS 등록하기
    public int insertVs(VsVO vo);

    // VS 이미지 업로드 하기
    void insertImageVs(@Param("vs_id") int vsId, @Param("image") String imagePath, @Param("option_number") int optionNumber);

    // VS 수정하기
    public int updateVs(VsVO vo);

    // VS 삭제하기
    public int deleteVs(int vs_Id);
    
    // VS 참여하기
    public int increaseTakeVs(VsVO vo);

}
