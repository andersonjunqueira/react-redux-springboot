package br.com.neotech.timebox.domain.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TELEFONE")
public class Telefone {

    public static final int MAX_LENGTH_NUMERO = 15;
    public static final int MAX_LENGTH_TIPO = 3;

    @Id
    @Column(name="id")
    @GeneratedValue
    private Long id;

    @Column(name="id_usuario")
    private Long idUsuario;

    @Column(name="numero", length=MAX_LENGTH_NUMERO)
    private String numero;

    @Column(name="tipo", length=MAX_LENGTH_TIPO)
    private String tipo;

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
