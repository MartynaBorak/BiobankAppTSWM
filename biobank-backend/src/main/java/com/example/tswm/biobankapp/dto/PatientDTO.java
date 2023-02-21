package com.example.tswm.biobankapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class PatientDTO {

    private int patientID;
    private String name;
    private String address;
    private Date birthDate;
    private String sex;
    private Integer labID;
    private List<SampleDTO> samples;
}
