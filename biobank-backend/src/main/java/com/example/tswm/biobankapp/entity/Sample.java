package com.example.tswm.biobankapp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="Samples")
@Getter
@Setter
@ToString
public class Sample {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sampleID;
    private String type;
    private Date sampleTaken;
    private double volume;

    @ManyToOne
    @JoinColumn(name = "patientID")
    @JsonIgnore
    private Patient patient;
}
