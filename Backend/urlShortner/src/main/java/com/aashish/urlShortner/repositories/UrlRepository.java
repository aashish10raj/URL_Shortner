package com.aashish.urlShortner.repositories;

import com.aashish.urlShortner.model.UrlMapping;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UrlRepository extends JpaRepository<UrlMapping, Long> {

    java.util.Optional<UrlMapping> findByShortHash(String shortHash);
}
