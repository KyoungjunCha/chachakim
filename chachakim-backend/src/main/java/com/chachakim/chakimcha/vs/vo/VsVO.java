package com.chachakim.chakimcha.vs.vo;

import lombok.Data;

@Data // @Data : 모든 필드에 대한 getter, setter, equals(), hashCode(), toString() 메서드를 생성함
public class VsVO {

    private String id; // 유저 아이디
    private String email; // 유저 이메일
    private String nickname; // 유저 닉네임
    private String tel_number; // 유저 전화번호
    private String address; // 유저 주소
    private String address_detail; // 유저 상세주소
    private String profile_image; // 유저 이미지
    private String gender; // 유저 성별
    private String birth; // 유저 생년월일
    private int permission; // 유저 권한 레벨
}
