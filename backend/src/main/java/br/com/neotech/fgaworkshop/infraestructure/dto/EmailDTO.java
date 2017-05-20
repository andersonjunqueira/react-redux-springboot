package br.com.neotech.fgaworkshop.infraestructure.dto;

import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

import br.com.neotech.fgaworkshop.domain.model.Email;
import br.com.neotech.util.infraestructure.service.DefaultDTO;

public final class EmailDTO implements DefaultDTO<Long> {

    private Long id;
    private Long idUsuario;

    @NotEmpty
    @Size(max = Email.MAX_LENGTH_EMAIL)
    private String email;

    @NotEmpty
    private Boolean principal = false;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getPrincipal() {
        return principal;
    }

    public void setPrincipal(Boolean principal) {
        this.principal = principal;
    }
}