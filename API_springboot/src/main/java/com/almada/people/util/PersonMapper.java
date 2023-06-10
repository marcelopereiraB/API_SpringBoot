package com.almada.people.util;

import com.almada.people.dto.request.PersonRequestDTO;
import com.almada.people.dto.response.PersonResponseDTO;
import com.almada.people.entity.Person;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class PersonMapper {

    public Person toPerson(PersonRequestDTO personDTO) {

        return Person.builder()
                .titulo(personDTO.getTitulo())
                .imagen(personDTO.getImagen())
                .descricao(personDTO.getDescricao())
                .visualizacao(personDTO.getVisualizacao())
                .build();

    }

    public PersonResponseDTO toPersonDTO(Person person) {
        return new PersonResponseDTO(person);
    }

    public List<PersonResponseDTO> toPeopleDTO(List<Person> peopleList) {
        return peopleList.stream().map(PersonResponseDTO::new).collect(Collectors.toList());
    }

    public void updatePersonData(Person person, PersonRequestDTO personDTO) {

        person.setTitulo(personDTO.getTitulo());
        person.setDescricao(personDTO.getDescricao());
        person.setImagen(personDTO.getImagen());
        person.setVisualizacao(personDTO.getVisualizacao());

    }

}