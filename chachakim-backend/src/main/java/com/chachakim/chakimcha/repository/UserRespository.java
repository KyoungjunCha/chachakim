package com.chachakim.chakimcha.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chachakim.chakimcha.entity.UserEntity;

@Repository
public interface UserRespository extends JpaRepository<UserEntity, String>{ // 그 Entity의 pk 타입을 지정하는 거임


    
} 
