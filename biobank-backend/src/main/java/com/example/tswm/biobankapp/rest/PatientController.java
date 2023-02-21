package com.example.tswm.biobankapp.rest;

import com.example.tswm.biobankapp.dto.PatientDTO;
import com.example.tswm.biobankapp.entity.Patient;
import com.example.tswm.biobankapp.service.PatientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
@CrossOrigin
public class PatientController {

    private final PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping
    public List<PatientDTO> findAll(){
        return patientService.findAll();
    }

    @GetMapping("/{id}")
    public PatientDTO findById(@PathVariable int id){
        return patientService.findById(id);
    }

    @PostMapping
    public PatientDTO save(@RequestBody PatientDTO patient){
        return patientService.save(patient);
    }

    @PutMapping
    public PatientDTO update(@RequestBody PatientDTO patient){
        return patientService.save(patient);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id){
        patientService.deleteById(id);
    }
}
