package com.aashish.urlShortner.controller;

import com.aashish.urlShortner.dto.CreateUrlRequest;
import com.aashish.urlShortner.model.UrlMapping;
import com.aashish.urlShortner.services.UrlServices;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class UrlController {

    public UrlServices service;

    public UrlController(UrlServices service) {
        this.service = service;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createShortUrl(@RequestBody CreateUrlRequest request) {
        UrlMapping mapping = service.createShortUrl(request.getLongUrl());
        return ResponseEntity.ok(mapping);
    }

    @GetMapping("/{shortHash}")
    public ResponseEntity<Void> redirect(@PathVariable String shortHash) {
        String longUrl = service.getLongUrlAndIncrement(shortHash);

        return ResponseEntity.status(302)
                .location(URI.create(longUrl))
                .build();
    }

    @GetMapping("/urls")
    public ResponseEntity<List<UrlMapping>> getRecentUrls() {
        return ResponseEntity.ok(service.getRecentUrls());
    }

}
