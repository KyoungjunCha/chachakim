package com.chachakim.chakimcha.vs.vo;

import org.springframework.core.io.Resource;
import java.util.List;
import lombok.Data;

@Data // @Data : 모든 필드에 대한 getter, setter, equals(), hashCode(), toString() 메서드를 생성함
public class VsVO {

    // vs 테이블
    private int vs_Id; // vs 아이디
    private String title; // vs 제목
    private String write_datetime; // vs 작성 날짜
    private int comment_count; // vs 댓글 수
    private int take_count; // vs 조회수
    private String endDate; // vs 종료 날짜

    // takevs 테이블
    private String id; // 현재 로그인 되어 있는 사용자의 아이디
    private int select_option; // 선택한 vs의 순서 번호
 
    // imagevs의 테이블
    private String[] image; // 이미지 url 경로
    private int option_number; // 선택한 vs의 순서 번호

    // 이미지 URL 경로 리스트랑 각 이름
    private List<String> imageUrls;
    private List<String> imageName;
}
