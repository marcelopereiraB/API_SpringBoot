package com.almada.people.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tb_mama")
@NoArgsConstructor
@Getter
@Setter
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    @Setter(AccessLevel.NONE)
    private Long id;

    @Column(name = "titulo", nullable = false)
    private String titulo;

    @Column(name = "imagen", nullable = false)
    private String imagen;

    @Column(name = "descricao", nullable = false)
    private String descricao;

    @Column(name = "visualizacao", nullable = false)
    private String visualizacao;

    @Builder
    public Person(String titulo, String imagen, String descricao, String visualizacao) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.descricao = descricao;
        this.visualizacao = visualizacao;
    }

}