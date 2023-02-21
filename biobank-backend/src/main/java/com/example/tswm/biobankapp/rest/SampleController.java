package com.example.tswm.biobankapp.rest;

import com.example.tswm.biobankapp.dto.SampleDTO;
import com.example.tswm.biobankapp.entity.Sample;
import com.example.tswm.biobankapp.service.SampleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/samples")
@CrossOrigin
public class SampleController {

    private final SampleService sampleService;

    public SampleController(SampleService sampleService) {
        this.sampleService = sampleService;
    }

    @GetMapping
    public List<SampleDTO> findAll(){
        return sampleService.findAll();
    }

    @GetMapping("/{id}")
    public SampleDTO findById(@PathVariable int id){
        return sampleService.findById(id);
    }

    @PostMapping
    public SampleDTO save(@RequestBody SampleDTO sample){
        return sampleService.save(sample);
    }

    @PutMapping
    public SampleDTO update(@RequestBody SampleDTO sample){
        return sampleService.save(sample);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id){
        sampleService.deleteById(id);
    }
}
