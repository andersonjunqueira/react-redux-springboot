package br.com.neotech.fgaworkshop.infraestructure.dto;

import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

import br.com.neotech.fgaworkshop.domain.model.Telefone;
import br.com.neotech.util.infraestructure.service.DefaultDTO;

public final class TelefoneDTO implements DefaultDTO<Long> {

    private Long id;

    @NotEmpty
    private Long idUsuario;

    @NotEmpty
    @Size(max = Telefone.MAX_LENGTH_NUMERO)
    private String numero;

    @NotEmpty
    @Size(max = Telefone.MAX_LENGTH_TIPO)
    private String tipo;

    @Override
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

}