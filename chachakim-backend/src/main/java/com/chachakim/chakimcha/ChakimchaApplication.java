package com.chachakim.chakimcha;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.chachakim.chakimcha.notice.mapper")
public class ChakimchaApplication {

    public static void main(String[] args) {
        SpringApplication.run(ChakimchaApplication.class, args);
        System.out.println("test");
    }
}
