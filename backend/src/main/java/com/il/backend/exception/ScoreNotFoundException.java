package com.il.backend.exception;

public class ScoreNotFoundException extends RuntimeException {
    public ScoreNotFoundException(String message) {
        super(message);
    }
}
