package com.example.tswm.biobankapp.service;

import com.example.tswm.biobankapp.entity.Laboratory;
import com.example.tswm.biobankapp.repository.LaboratoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaboratoryService {

    private final LaboratoryRepository laboratoryRepository;

    public LaboratoryService(LaboratoryRepository laboratoryRepository) {
        this.laboratoryRepository = laboratoryRepository;
    }

    public List<Laboratory> findAll(){
        return laboratoryRepository.findAll();
    }

    public List<Laboratory> findByName(String name){
        return laboratoryRepository.getAllByNameLikeIgnoreCase(name);
    }
    public Laboratory findById(int id){
        return laboratoryRepository.findById(id).orElse(null);
    }

    public Laboratory save(Laboratory lab){
        return laboratoryRepository.save(lab);
    }

    public void deleteById(int id){
        laboratoryRepository.deleteById(id);
    }
}
