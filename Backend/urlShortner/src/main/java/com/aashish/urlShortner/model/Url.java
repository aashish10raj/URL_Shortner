package com.aashish.urlShortner.model;

import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import java.time.Instant;

@Table("urls")
public class Url {

    @PrimaryKey
    String long_hash;

    @Column("long_url")
    String longUrl;
    @Column("short_code")
    String shortCode;
    @Column("created_at")
    Instant createdAt;
    @Column("expires_at")
    Instant expiresAt;

    public String getLong_hash() {
        return long_hash;
    }

    public void setLong_hash(String long_hash) {
        this.long_hash = long_hash;
    }

    public String getLongUrl() {
        return longUrl;
    }

    public void setLongUrl(String longUrl) {
        this.longUrl = longUrl;
    }

    public String getShortCode() {
        return shortCode;
    }

    public void setShortCode(String shortCode) {
        this.shortCode = shortCode;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public Instant getExpiresAt() {
        return expiresAt;
    }

    public void setExpiresAt(Instant expiresAt) {
        this.expiresAt = expiresAt;
    }
}
