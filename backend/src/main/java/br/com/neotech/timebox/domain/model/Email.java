package br.com.neotech.timebox.domain.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "EMAIL")
public class Email {

    public static final int MAX_LENGTH_EMAIL = 100;

    @Id
    @Column(name="id")
    @GeneratedValue
    private Long id;

    @Column(name="id_usuario")
    private Long idUsuario;

    @Column(name="email", unique=true, length=MAX_LENGTH_EMAIL)
    private String email;

    @Column(name="principal")
    private Boolean principal;

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
