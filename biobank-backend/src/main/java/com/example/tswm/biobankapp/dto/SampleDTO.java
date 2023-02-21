package com.example.tswm.biobankapp.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
public class SampleDTO {

    private int sampleID;
    private String type;
    private Date sampleTaken;
    private double volume;
    private Integer patientID;
}
