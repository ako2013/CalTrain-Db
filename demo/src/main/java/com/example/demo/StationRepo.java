package com.example.demo;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Station;

public interface StationRepo extends CrudRepository<Station, Long> {
}
