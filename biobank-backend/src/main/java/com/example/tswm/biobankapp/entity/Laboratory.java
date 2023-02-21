package com.example.tswm.biobankapp.entity;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Laboratories")
@Getter
@Setter
public class Laboratory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int labID;

    @Column(name="LabName")
    private String name;
    private String address;

    @OneToMany(mappedBy = "lab", cascade = CascadeType.ALL)
    private List<Patient> patients;

}
