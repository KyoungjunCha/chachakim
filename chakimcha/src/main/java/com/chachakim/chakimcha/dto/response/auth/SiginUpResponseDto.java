package com.chachakim.chakimcha.dto.response.auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.chachakim.chakimcha.common.ResponseCode;
import com.chachakim.chakimcha.common.ResponseMessage;
import com.chachakim.chakimcha.dto.response.ResponseDto;

import lombok.Getter;

@Getter
public class SiginUpResponseDto extends ResponseDto{
    
    private SiginUpResponseDto(){
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
    }

    public static ResponseEntity<SiginUpResponseDto> success(){
        SiginUpResponseDto result = new SiginUpResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    public static ResponseEntity<ResponseDto> duplicateEmail(){
        ResponseDto result = new ResponseDto(ResponseCode.DUPLICATE_EMAIL, ResponseMessage.DUPLICATE_EMAIL);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

    public static ResponseEntity<ResponseDto> duplicateNickname(){
        ResponseDto result = new ResponseDto(ResponseCode.DUPLICATE_NICKNAME, ResponseMessage.DUPLICATE_NICKNAME);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

    public static ResponseEntity<ResponseDto> duplicateTelNumber(){
        ResponseDto result = new ResponseDto(ResponseCode.DUPLICATE_TEL_NUMBER, ResponseMessage.DUPLICATE_TEL_NUMBER);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }


}
