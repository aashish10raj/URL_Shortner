package com.aashish.urlShortner.services;

import com.aashish.urlShortner.model.UrlMapping;
import com.aashish.urlShortner.repositories.UrlRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class UrlServices {


    public UrlRepository repository;

    public UrlServices(UrlRepository repository) {
        this.repository = repository;
    }


    public String generateShortHash() {
        String chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder sb = new StringBuilder();
        Random random = new Random();

        for (int i = 0; i < 6; i++) {
            sb.append(chars.charAt(random.nextInt(chars.length())));
        }

        return sb.toString();
    }

    public UrlMapping createShortUrl(String longUrl) {

        String hash = generateShortHash();

        while (repository.findByShortHash(hash).isPresent()) {
            hash = generateShortHash(); // avoid collision
        }

        UrlMapping mapping = new UrlMapping();
        mapping.setLongUrl(longUrl);
        mapping.setShortHash(hash);

        return repository.save(mapping);
    }

    public String getLongUrlAndIncrement(String shortHash) {
        UrlMapping mapping = repository.findByShortHash(shortHash)
                .orElseThrow(() -> new RuntimeException("Short URL not found"));

        mapping.setClickCount(mapping.getClickCount() + 1);
        repository.save(mapping);

        return mapping.getLongUrl();
    }


    public List<UrlMapping> getRecentUrls() {
        return repository.findTop5ByOrderByCreatedAtDesc();
    }
}
