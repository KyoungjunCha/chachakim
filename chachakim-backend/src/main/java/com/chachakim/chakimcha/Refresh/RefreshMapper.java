package com.chachakim.chakimcha.Refresh;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;

@Mapper
@Repository
public interface RefreshMapper {
    

    void save(RefreshVO refreshVO);

    /*
     * bool 타입으로 해당 유효일자 확인해서 true 혹은 false 판별? 아니면 그냥 존재여부 확인해서 
     */
    public Boolean existsByRefresh(String refreshToken);

    @Transactional
    void deleteByRefresh(String refreshToken);


    public List<String> findByUsername(String username);
}
