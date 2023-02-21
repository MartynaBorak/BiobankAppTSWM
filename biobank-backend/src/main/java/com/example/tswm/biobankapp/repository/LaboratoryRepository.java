package com.example.tswm.biobankapp.repository;

import com.example.tswm.biobankapp.entity.Laboratory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LaboratoryRepository extends JpaRepository<Laboratory,Integer> {
    public List<Laboratory> getAllByNameLikeIgnoreCase(String name);
}
