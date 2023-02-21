package com.example.tswm.biobankapp.rest;

import com.example.tswm.biobankapp.entity.Laboratory;
import com.example.tswm.biobankapp.service.LaboratoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/laboratories")
@CrossOrigin
public class LaboratoryController {
    private final LaboratoryService laboratoryService;

    public LaboratoryController(LaboratoryService laboratoryService) {
        this.laboratoryService = laboratoryService;
    }

    @GetMapping
    public List<Laboratory> findAll(){
        return laboratoryService.findAll();
    }

    @GetMapping("/name/{name}")
    public List<Laboratory> findByName(@PathVariable String name){ return laboratoryService.findByName(name);}

    @GetMapping("/{id}")
    public Laboratory findById(@PathVariable int id){
        return laboratoryService.findById(id);
    }

    @PostMapping
    public Laboratory save(@RequestBody Laboratory lab){
        return laboratoryService.save(lab);
    }

    @PutMapping
    public Laboratory update(@RequestBody Laboratory lab){
        return laboratoryService.save(lab);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id){
        laboratoryService.deleteById(id);
    }
}
