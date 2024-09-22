package com.chachakim.chakimcha.Refresh;


public interface RefreshService {

    // public RefreshVO view(int reissue_Id);
    
    public Boolean isRefreshTokenExists(String refreshToken);

     /**
     * refreshToken을 삭제합니다.
     * param refreshToken 삭제할 refreshToken
     */
    public void removeRefreshToken(String refreshToken);
}
