package com.almada.people.dto.response;


import com.almada.people.entity.Person;
import lombok.Getter;

@Getter
public class PersonResponseDTO {

    private Long id;

    private String titulo;

    private String imagen;

    private String descricao;


    private String visualizacao;

    public PersonResponseDTO(Person person) {
        this.id = person.getId();
        this.titulo = person.getTitulo();
        this.imagen = person.getImagen();
        this.descricao = person.getDescricao();
        this.visualizacao = person.getVisualizacao();
    }


}