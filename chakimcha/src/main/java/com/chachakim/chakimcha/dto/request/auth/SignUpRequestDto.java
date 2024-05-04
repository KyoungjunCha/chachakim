package com.chachakim.chakimcha.dto.request.auth;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SignUpRequestDto {
    // 문자열에서 null이 아니어야하고 빈 문자열로 이루어진게 아니어야 하고, 공백을로만 이루어진게 아니어야 한다.
    @NotBlank @Email
    private String email;

    @NotBlank @Size(min=8, max=20)
    private String password;

    @NotBlank
    private String nickname;

    @NotBlank @Pattern(regexp = "^[0-9]{11,13}$")
    private String telNumber;

    @NotBlank
    private String address;


    private String addressDetail;

    // NotBlank는 문자열만 가능 NotNull은 참조형 변수면 다 사용가능 / AssertTrue는 True가 아니면 받지 않는다. 반드시 True만 온당
    @NotNull @AssertTrue
    private Boolean agreedPersonal;
}
