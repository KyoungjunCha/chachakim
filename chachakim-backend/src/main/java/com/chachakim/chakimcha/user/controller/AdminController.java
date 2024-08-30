package com.chachakim.chakimcha.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@ResponseBody
public class AdminController {
    
    @GetMapping("/admin")
    public String adminP() {
        return "admin Controller";
    }
    
}
