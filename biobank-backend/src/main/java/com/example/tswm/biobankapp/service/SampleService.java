package com.example.tswm.biobankapp.service;

import com.example.tswm.biobankapp.dto.SampleDTO;
import com.example.tswm.biobankapp.entity.Sample;
import com.example.tswm.biobankapp.repository.PatientRepository;
import com.example.tswm.biobankapp.repository.SampleRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SampleService {

    private final SampleRepository sampleRepository;
    private final PatientRepository patientRepository;

    public SampleService(SampleRepository sampleRepository, PatientRepository patientRepository) {
        this.sampleRepository = sampleRepository;
        this.patientRepository = patientRepository;
    }

    public List<SampleDTO> findAll(){
        List<Sample> samples = sampleRepository.findAll();
        List<SampleDTO> sampleDTOs = new ArrayList<SampleDTO>();
        samples.forEach(sample -> sampleDTOs.add(convertToDTO(sample)));
        return sampleDTOs;
    }

    public SampleDTO findById(int id){
        return convertToDTO(sampleRepository.findById(id).orElse(null));
    }

    public SampleDTO save(SampleDTO sample){
        return convertToDTO(sampleRepository.save(convertToSample(sample)));
    }

    public void deleteById(int id){
        sampleRepository.deleteById(id);
    }

    private SampleDTO convertToDTO(Sample sample){
        if(sample == null)
            return null;
        SampleDTO s = new SampleDTO();
        s.setSampleID(sample.getSampleID());
        s.setType(sample.getType());
        s.setSampleTaken(sample.getSampleTaken());
        s.setVolume(sample.getVolume());
        s.setPatientID(sample.getPatient()!=null ? sample.getPatient().getPatientID() : null);
        return s;
    }

    private Sample convertToSample(SampleDTO sampleDTO){
        if(sampleDTO == null)
            return null;
        Sample s = new Sample();
        s.setSampleID(sampleDTO.getSampleID());
        s.setType(sampleDTO.getType());
        s.setSampleTaken(sampleDTO.getSampleTaken());
        s.setVolume(sampleDTO.getVolume());
        s.setPatient(patientRepository.findById(sampleDTO.getPatientID()).orElse(null));
        return s;
    }

    public List<SampleDTO> convertSamplesToDTO(List<Sample> samples){
        if(samples == null)
            return new ArrayList<>();
        List<SampleDTO> dtos = new ArrayList<>();
        for(Sample sample : samples){
            dtos.add(convertToDTO(sample));
        }
        return dtos;
    }

    public List<Sample> convertDTOsToSamples(List<SampleDTO> dtos){
        if(dtos == null)
            return new ArrayList<>();
        List<Sample> samples = new ArrayList<>();
        for(SampleDTO dto : dtos){
            samples.add(convertToSample(dto));
        }
        return samples;
    }
}
