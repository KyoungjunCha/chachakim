package com.chachakim.chakimcha;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ChakimchaApplication {

	public static void main(String[] args) {
		System.out.println("ChakimchaApplication.main()");
		SpringApplication.run(ChakimchaApplication.class, args);
		System.out.println("스프링 실행실행");
	} 

}
