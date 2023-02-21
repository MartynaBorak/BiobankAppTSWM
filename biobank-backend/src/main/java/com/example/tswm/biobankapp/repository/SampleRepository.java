package com.example.tswm.biobankapp.repository;

import com.example.tswm.biobankapp.entity.Sample;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SampleRepository extends JpaRepository<Sample,Integer> {
}
