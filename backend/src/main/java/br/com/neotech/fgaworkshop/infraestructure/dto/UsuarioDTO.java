package br.com.neotech.fgaworkshop.infraestructure.dto;

import java.util.List;

import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

import br.com.neotech.fgaworkshop.domain.model.Usuario;
import br.com.neotech.util.infraestructure.service.DefaultDTO;

public final class UsuarioDTO implements DefaultDTO<Long> {

    private Long id;

    @NotEmpty
    @Size(max = Usuario.MAX_LENGTH_NOME)
    private String nome;

    @Size(max = Usuario.MAX_LENGTH_CPF)
    private String cpf;

    @Size(max = Usuario.MAX_LENGTH_RG)
    private String rg;

    @Size(max = Usuario.MAX_LENGTH_ORGAO_EXPEDIDOR)
    private String orgaoExpedidor;

    @Size(max = Usuario.MAX_LENGTH_UF)
    private String ufDocumento;

    @Size(max = Usuario.MAX_LENGTH_LOGRADOURO)
    private String logradouro;

    @Size(max = Usuario.MAX_LENGTH_COMPLEMENTO)
    private String complemento;

    @Size(max = Usuario.MAX_LENGTH_NUMERO)
    private String numero;

    @Size(max = Usuario.MAX_LENGTH_CEP)
    private String cep;

    @Size(max = Usuario.MAX_LENGTH_BAIRRO)
    private String bairro;

    @Size(max = Usuario.MAX_LENGTH_CIDADE)
    private String cidade;

    @Size(max = Usuario.MAX_LENGTH_UF)
    private String uf;

    @Size(max = Usuario.MAX_LENGTH_PAIS)
    private String pais;

    @Size(max = Usuario.MAX_LENGTH_LOGIN)
    private String login;

    @Size(max = Usuario.MAX_LENGTH_LANGUAGE)
    private String language;

    private List<TelefoneDTO> telefones;

    @NotEmpty
    private List<EmailDTO> emails;

    @Override
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public List<TelefoneDTO> getTelefones() {
        return telefones;
    }

    public void setTelefones(List<TelefoneDTO> telefones) {
        this.telefones = telefones;
    }

    public List<EmailDTO> getEmails() {
        return emails;
    }

    public void setEmails(List<EmailDTO> emails) {
        this.emails = emails;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

}