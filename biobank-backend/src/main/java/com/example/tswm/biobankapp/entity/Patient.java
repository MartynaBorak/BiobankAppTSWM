package com.example.tswm.biobankapp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="Patients")
@Getter
@Setter
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int patientID;
    private String name;
    private String address;
    private Date birthDate;
    private String sex;

    @ManyToOne
    @JoinColumn(name="labID")
    @JsonIgnore
    private Laboratory lab;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    private List<Sample> samples;

}
