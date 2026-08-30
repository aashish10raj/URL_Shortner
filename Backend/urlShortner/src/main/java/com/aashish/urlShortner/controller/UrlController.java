package com.aashish.urlShortner.controller;

import com.aashish.urlShortner.dto.CreateUrlRequest;
import com.aashish.urlShortner.model.UrlMapping;
import com.aashish.urlShortner.services.UrlServices;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.net.URI;

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
                .build();return ResponseEntity.status(302)
                .location(URI.create(longUrl))
                .build();
    }
    }


}
