package com.aashish.urlShortner.repositories;

import com.aashish.urlShortner.model.Url;
import org.springframework.data.cassandra.repository.CassandraRepository;

public interface UrlRepository extends CassandraRepository<Url, String> {
}
