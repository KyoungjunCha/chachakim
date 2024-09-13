package com.chachakim.chakimcha.Refresh;

import java.sql.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chachakim.chakimcha.jwt.JwtUtil;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


//0902 리프레시 토큰 발급을 위한 코드 reissue 엔드포인트 접근시에 새로운 refreshToken 을 발급함 + Rotate blacklist 를 활용한 
/*
 * 1. 리프레시 토큰 재발급을 위한 엔드포인트
 * 2. Rotate 구조 즉 로그인시에 주기적인 refresh 토큰 재교환으로 로그인 지속시간 늘리기
 * 3. blacklist 를 활용한 즉 서버측에 refresh blacklist 저장소를 활용하여 rotate 되고 폐기되는 토큰들 보안 처리
 */
@Controller
@ResponseBody
public class RefreshController {

    private final JwtUtil jwtUtil;
    private final RefreshMapper refreshMapper;

    public RefreshController(JwtUtil jwtUtil, RefreshMapper refreshMapper) {

        this.jwtUtil = jwtUtil;
        this.refreshMapper = refreshMapper;
    }

    @PostMapping("/reissue")
    public ResponseEntity<?> reissue(HttpServletRequest request, HttpServletResponse response) {

        //get refresh token
        String refreshToken = null;
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {

            if (cookie.getName().equals("refreshToken")) {

                refreshToken = cookie.getValue();
            }
        }

        if (refreshToken == null) {

            //response status code
            return new ResponseEntity<>("refresh token null", HttpStatus.BAD_REQUEST);
        }

        //expired check
        try {
            jwtUtil.isExpired(refreshToken);
        } catch (ExpiredJwtException e) {

            //response status code
            return new ResponseEntity<>("refresh token expired", HttpStatus.BAD_REQUEST);
        }

        // 토큰이 refresh인지 확인 (발급시 페이로드에 명시)
        String category = jwtUtil.getCategory(refreshToken);

        if (!category.equals("refreshToken")) {

            //response status code
            return new ResponseEntity<>("invalid refresh token", HttpStatus.BAD_REQUEST);
        }

         //DB에 저장되어 있는지 확인
		// Boolean isExist = refreshMapper.existsByRefresh(refreshToken);
		// if (!isExist) {
		
		//     //response body
		//     return new ResponseEntity<>("invalid refresh token", HttpStatus.BAD_REQUEST);
		// }

        //0911
        Boolean isExist = refreshMapper.existsByRefresh(refreshToken);
        if (!isExist || jwtUtil.isExpired(refreshToken)) {
            refreshMapper.deleteByRefresh(refreshToken);
            return new ResponseEntity<>("invalid or expired refresh token", HttpStatus.BAD_REQUEST);
        }


        String username = jwtUtil.getId(refreshToken);
        String role = jwtUtil.getPermission(refreshToken);

        //make new JWT
        String newAccess = jwtUtil.createJwt("accessToken", username, role, 600000L);
        String newRefresh = jwtUtil.createJwt("refreshToken", username, role, 86400000L);

        //Refresh 토큰 저장 DB에 기존의 Refresh 토큰 삭제 후 새 Refresh 토큰 저장
		refreshMapper.deleteByRefresh(refreshToken);
		addRefreshVO(username, newRefresh, 86400000L);

        //response
        response.setHeader("accessToken", newAccess);
        response.addCookie(createCookie("refreshToken",newRefresh));

        return new ResponseEntity<>(HttpStatus.OK);
    }


    //0906
    private void addRefreshVO(String username, String refresh, Long expiredMs) {

        Date date = new Date(System.currentTimeMillis() + expiredMs);
    
        RefreshVO refreshVO = new RefreshVO();
        refreshVO.setUsername(username);
        refreshVO.setRefreshToken(refresh);
        refreshVO.setExpiration(date.toString());
    
        refreshMapper.save(refreshVO);
    }

    //0902
    // loginFilter 에도 있는 메서드임
    private Cookie createCookie(String key, String value) {

        Cookie cookie = new Cookie(key, value);
        cookie.setMaxAge(24*60*60);
        //cookie.setSecure(true);
        //cookie.setPath("/");
        cookie.setHttpOnly(true);
    
        return cookie;
    }
}