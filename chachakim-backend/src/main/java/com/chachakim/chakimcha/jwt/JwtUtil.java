package com.chachakim.chakimcha.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.function.Function;

//0816 jjwt ver for 12.3
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;

@Component
public class JwtUtil {

    // @Value("${jwt.secret}") // application.properties 파일에서 jwt.secret 값을 가져옴
    // private String secret;

    // @Value("${jwt.expiration}") // application.properties 파일에서 jwt.expiration 값을 가져옴
    // private Long expiration;

    // private Key getSigningKey() {
    //     return Keys.hmacShaKeyFor(secret.getBytes());
    // }

    // public String extractUsername(String token) {
    //     return extractClaim(token, Claims::getSubject);
    // }

    // public Date extractExpiration(String token) {
    //     return extractClaim(token, Claims::getExpiration);
    // }

    // public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
    //     final Claims claims = extractAllClaims(token);
    //     return claimsResolver.apply(claims);
    // }

    // private Claims extractAllClaims(String token) {
    //     return Jwts.parserBuilder()
    //             .setSigningKey(getSigningKey())
    //             .build()
    //             .parseClaimsJws(token)
    //             .getBody();
    // }

    // private Boolean isTokenExpired(String token) {
    //     return extractExpiration(token).before(new Date());
    // }

    // public String generateToken(String username) {
    //     System.out.println("JWT 토큰 생성 시작: " + username);
    //     String token = createToken(username);
    //     System.out.println("JwtUtil - JWT 토큰 생성 완료: " + token);
    //     return token;
    // }

    // private String createToken(String username) {
    //     return Jwts.builder()
    //             .setSubject(username)
    //             .setIssuedAt(new Date(System.currentTimeMillis()))
    //             .setExpiration(new Date(System.currentTimeMillis() + expiration))
    //             .signWith(getSigningKey(), SignatureAlgorithm.HS256)
    //             .compact();
    // }

    // public Boolean validateToken(String token, String username) {
    //     final String extractedUsername = extractUsername(token);
    //     return (extractedUsername.equals(username) && !isTokenExpired(token));
    // }


    //0816
     private Key key;

    public JwtUtil(@Value("${jwt.secret}")String secret) {
        byte[] byteSecretKey = Decoders.BASE64.decode(secret);
        key = Keys.hmacShaKeyFor(byteSecretKey);
    }

    //검증
    public String getId(String token) {

        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody().get("id", String.class);
    }

    public String getPermission(String token) {

        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody().get("permisson", String.class);
    }

    public Boolean isExpired(String token) {

        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody().getExpiration().before(new Date());
    }

    //생성
    public String createJwt(String id, String role, Long expiredMs) {

		Claims claims = Jwts.claims();
        claims.put("id", id);
        claims.put("permisson", role);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expiredMs))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

      // 리프레시 토큰 생성 메서드 추가
      public String createRefreshToken(String id, Long expiredMs) {
        Claims claims = Jwts.claims();
        claims.put("id", id);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expiredMs))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

}
