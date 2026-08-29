package com.aashish.urlShortner.repositories;

import com.aashish.urlShortner.model.Url;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UrlRepository extends JpaRepository<Url, String> {
}
