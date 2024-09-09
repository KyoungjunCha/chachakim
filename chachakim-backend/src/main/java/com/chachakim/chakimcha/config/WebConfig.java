package com.chachakim.chakimcha.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry; // addResourceHandlers 메서드를 Override 하기 위해서 추가(차관호 09_01)
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration

// cors 정책
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) { // vs 이미지 업로드를 위해 메서드 추가(차관호 09_01)
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:C:/chachakim/chachakim-backend/uploads/");
    }
}
