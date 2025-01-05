package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class pageController {
    @GetMapping("/getMainContent")
    public String getMainContent(@RequestParam("menuId") int menuId, Model model) {
        String pageContent = "";

        // 메뉴 아이디에 따라 다른 페이지 내용을 설정
        switch (menuId) {
            case 0:
                pageContent = "main.html";
                break;
            case 1:
                pageContent = "intro.html";
                break;
            case 2:
                pageContent = "profile.html";
                break;
            case 3:
                pageContent = "career.html";
                break;
            case 11:
                pageContent = "html5.html";
                break;
            case 12:
                pageContent = "CSS.html";
                break;
            case 13:
                pageContent = "JAVASCRIPT.html";
                break;
            default:
                pageContent = "default.html";
                break;
        }
        // 원하는 템플릿을 반환
        return pageContent;
    }
}
