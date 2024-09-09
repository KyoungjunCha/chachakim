package com.chachakim.chakimcha.vs.controller;

import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.chachakim.chakimcha.vs.service.VsService;
import com.chachakim.chakimcha.vs.vo.VsVO;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


//@Controller // @Controller: 모델과 뷰를 조작하는 데 사용되는 컨트롤러임을 나타냄
@RestController
@RequestMapping("/vs")
public class VsController {

    @Autowired // 해당 타입의 빈(bean)을 자동으로 주입하라고 지시함
    @Qualifier("vsServiceImpl") // VsService 중에서도 VsServiceImpl라는 이름을 가진 놈으로 주입하셈
    private VsService service;

    @GetMapping // VS 리스트 보여주기
    public List<VsVO> getVsList() {
        System.out.println("VsController의 getVsList 메서드 입니다.");
        System.out.println(service.getVsList());
        return service.getVsList();
    } // end of Method getVsList

    @GetMapping("/{vs_Id}") // VS 클릭 시 각 항목별 상세 보기
    public ResponseEntity<VsVO> getVsById(@PathVariable int vs_Id) {
        System.out.println("VsController의 getVsById 메서드 입니다.");

        VsVO vo = service.getVsById(vs_Id); // 이미지 경로를 제외한 정보들을 받아 저장

       String[] images = service.getImageById(vs_Id).toArray(new String[0]); // 이미지 경로를 String 배열로 저장(2개니까)

       List<String> imageUrls = new ArrayList<>(); // 프론트에 넘겨줄 이미지 경로가 담겨 있는 리스트
       List<String> imageName = new ArrayList<>(); // 프론트에 넘겨줄 이미지 이름이 담겨 있는 리스트

       for(String img : images){
            imageUrls.add(img); // 이미지 경로를 리스트에 추가
            imageName.add(img.replace("uploads/", "").replace(".jpg", "")); // 이미지 이름을 리스트에 추가
       }
       
       vo.setImageUrls(imageUrls); // 프론트에 넘겨줄 vo에 이미지 리스트도 세팅
       vo.setImageName(imageName);
       return ResponseEntity.ok(vo);
    } // end of Method getVsById

    @PostMapping // VS 글 등록하기
    public ResponseEntity<String> insertVs(
        @RequestParam("title") String title,
        @RequestParam("endDate") String endDate,
        @RequestParam("option1Image") MultipartFile option1Image,
        @RequestParam("option2Image") MultipartFile option2Image) {

    System.out.println("VsController의 insertVs 메서드 입니다.");

    // 파일 저장 로직 (파일 경로 설정)
    String uploadDir = "C:\\chachakim\\chachakim-backend\\uploads\\"; // 파일이 저장될 절대 디렉토리 경로
    
    String option1ImagePath = uploadDir + option1Image.getOriginalFilename();
    String option2ImagePath = uploadDir + option2Image.getOriginalFilename();
    System.out.println("option1ImagePath : " + option1ImagePath);

    // 파일 저장
    try {
        Path path1 = Paths.get(option1ImagePath);
        Path path2 = Paths.get(option2ImagePath);
        System.out.println("path1 : " + path1);

        option1Image.transferTo(path1.toFile()); // 첫 번째 파일 저장
        option2Image.transferTo(path2.toFile()); // 두 번째 파일 저장

        // VsVO 객체 생성 및 설정
        VsVO vo = new VsVO();
        String[] images = new String[2];
        images[0] = option1ImagePath.replace("C:\\chachakim\\chachakim-backend\\uploads\\", "uploads/");
        images[1] = option2ImagePath.replace("C:\\chachakim\\chachakim-backend\\uploads\\", "uploads/");

        vo.setTitle(title);
        vo.setEndDate(endDate);
        vo.setImage(images);

        System.out.println(vo);


        int result = service.insertVsWithImages(vo);

        if(result != 1) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("VS 글 등록 실패");
        } else {
            return ResponseEntity.status(HttpStatus.OK).body("VS 글 등록 성공");
        }

    } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("파일 업로드 실패");
    }

} // end of Method insertVs

    @PutMapping("/{vs_Id}")  // VS 글 수정하기
    public void updateVs(@PathVariable int vs_Id, @RequestBody VsVO vo) {
        System.out.println("VsController의 updateVs 메서드 입니다.");
        vo.setVs_Id(vs_Id);
        int result = service.updateVs(vo);

        if(result != 1) System.out.println("VS 글 수정 실패");
        else System.out.println("VS 글 수정 성공");
    } // end of Method updateVs


    @DeleteMapping("/{vs_Id}") // VS 글 삭제하기
    public void deleteVs(@PathVariable int vs_Id) {
        System.out.println("VsController의 deleteVs 메서드 입니다.");
        System.out.println("vs_id : " + vs_Id);
        int result = service.deleteVs(vs_Id);
        
        if(result != 1) System.out.println("VS 글 삭제 실패");
        else System.out.println("VS 글 삭제 성공");
    } // end of Method deleteVs

    
    
} // End of Class VsController
