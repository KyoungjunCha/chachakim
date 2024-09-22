package com.chachakim.chakimcha.Refresh;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RefreshServiceImpl implements RefreshService{
 
    @Autowired
    private RefreshMapper mapper;
    
     /**
     * refreshToken이 존재하는지 확인합니다.
     * param refreshToken 확인할 refreshToken
     * return 존재하면 true, 그렇지 않으면 false
     */
    @Override
    public Boolean isRefreshTokenExists(String refreshToken) {
        return mapper.existsByRefresh(refreshToken);
    }

     /**
     * refreshToken을 삭제합니다.
     * param refreshToken 삭제할 refreshToken
     */
    @Override
    public void removeRefreshToken(String refreshToken) {
        mapper.deleteByRefresh(refreshToken);
    }

}
