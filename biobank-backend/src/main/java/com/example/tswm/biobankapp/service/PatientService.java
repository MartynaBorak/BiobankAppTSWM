package com.example.tswm.biobankapp.service;

import com.example.tswm.biobankapp.dto.PatientDTO;
import com.example.tswm.biobankapp.entity.Patient;
import com.example.tswm.biobankapp.repository.LaboratoryRepository;
import com.example.tswm.biobankapp.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PatientService {

    private final PatientRepository patientRepository;
    private final LaboratoryRepository laboratoryRepository;
    private final SampleService sampleService;

    public PatientService(PatientRepository patientRepository, LaboratoryRepository laboratoryRepository, SampleService sampleService) {
        this.patientRepository = patientRepository;
        this.laboratoryRepository = laboratoryRepository;
        this.sampleService = sampleService;
    }

    public List<PatientDTO> findAll(){
        List<Patient> patients = patientRepository.findAll();
        List<PatientDTO> patientsDTO = new ArrayList<PatientDTO>();
        for (Patient p1:patients) {
            patientsDTO.add(convertToDTO(p1));
        }
        return patientsDTO;
    }

    public PatientDTO findById(int id){
        return convertToDTO(patientRepository.findById(id).orElse(null));
    }

    public PatientDTO save(PatientDTO patient){
        return convertToDTO(patientRepository.save(convertToPatient(patient)));
    }

    public void deleteById(int id){
        patientRepository.deleteById(id);
    }

    private PatientDTO convertToDTO(Patient patient){
        if(patient == null)
            return null;
        PatientDTO p = new PatientDTO();
        p.setPatientID(patient.getPatientID());
        p.setName(patient.getName());
        p.setAddress(patient.getAddress());
        p.setBirthDate(patient.getBirthDate());
        p.setSex(patient.getSex());
        p.setLabID(patient.getLab() != null ? patient.getLab().getLabID() : null);
        p.setSamples(sampleService.convertSamplesToDTO(patient.getSamples()));
        return p;
    }

    private Patient convertToPatient(PatientDTO patientDTO){
        if(patientDTO == null)
            return null;
        Patient p = new Patient();
        p.setPatientID(patientDTO.getPatientID());
        p.setName(patientDTO.getName());
        p.setAddress(patientDTO.getAddress());
        p.setBirthDate(patientDTO.getBirthDate());
        p.setSex(patientDTO.getSex());
        p.setLab(laboratoryRepository.findById(patientDTO.getLabID()).orElse(null));
        p.setSamples(sampleService.convertDTOsToSamples(patientDTO.getSamples()));
        return p;
    }
}
