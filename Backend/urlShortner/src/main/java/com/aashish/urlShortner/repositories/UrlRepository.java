package com.aashish.urlShortner.repositories;

import com.aashish.urlShortner.model.UrlMapping;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UrlRepository extends JpaRepository<UrlMapping, Long> {

    java.util.Optional<UrlMapping> findByShortHash(String shortHash);

    List<UrlMapping> findTop5ByOrderByCreatedAtDesc();
}
