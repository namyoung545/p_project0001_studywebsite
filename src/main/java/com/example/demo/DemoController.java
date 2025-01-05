package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class DemoRestController {
    @GetMapping("/test")
    public String test() {
        return "test demo";
    }
}

@Controller
public class DemoController {
    @GetMapping("/")
    public String home(){
        return "index";
    }
}