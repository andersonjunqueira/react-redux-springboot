package br.com.neotech.timebox.infraestructure.dto;

import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

import br.com.neotech.timebox.domain.model.Estado;
import br.com.neotech.util.infraestructure.service.DefaultDTO;

public final class EstadoDTO implements DefaultDTO<Long> {

    private Long id;

    @NotEmpty
    @Size(max = Estado.MAX_LENGTH_SIGLA)
    private String sigla;

    @NotEmpty
    @Size(max = Estado.MAX_LENGTH_NOME)
    private String nome;

    @Override
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSigla() {
        return sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

}