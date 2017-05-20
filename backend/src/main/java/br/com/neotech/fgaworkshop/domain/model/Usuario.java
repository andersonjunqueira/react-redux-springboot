package br.com.neotech.fgaworkshop.domain.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "USUARIO")
public class Usuario {

    public static final int MAX_LENGTH_NOME = 100;
    public static final int MAX_LENGTH_LOGIN = 100;
    public static final int MAX_LENGTH_CPF = 11;
    public static final int MAX_LENGTH_RG = 30;
    public static final int MAX_LENGTH_ORGAO_EXPEDIDOR = 10;
    public static final int MAX_LENGTH_LOGRADOURO = 100;
    public static final int MAX_LENGTH_COMPLEMENTO = 20;
    public static final int MAX_LENGTH_NUMERO = 10;
    public static final int MAX_LENGTH_BAIRRO = 50;
    public static final int MAX_LENGTH_CIDADE = 50;
    public static final int MAX_LENGTH_CEP = 10;
    public static final int MAX_LENGTH_UF = 2;
    public static final int MAX_LENGTH_PAIS = 30;
    public static final int MAX_LENGTH_LANGUAGE = 10;

    @Id
    @Column(name="id")
    @GeneratedValue
    private Long id;

    @Column(name="nome", length=MAX_LENGTH_NOME)
    private String nome;

    @Column(name="cpf", length=MAX_LENGTH_CPF)
    private String cpf;

    @Column(name="rg", length=MAX_LENGTH_RG)
    private String rg;

    @Column(name="orgaoExpedidor", length=MAX_LENGTH_ORGAO_EXPEDIDOR)
    private String orgaoExpedidor;

    @Column(name="ufDocumento", length=MAX_LENGTH_UF)
    private String ufDocumento;

    @Column(name="logradouro", length=MAX_LENGTH_LOGRADOURO)
    private String logradouro;

    @Column(name="complemento", length=MAX_LENGTH_COMPLEMENTO)
    private String complemento;

    @Column(name="numero", length=MAX_LENGTH_NUMERO)
    private String numero;

    @Column(name="cep", length=MAX_LENGTH_CEP)
    private String cep;

    @Column(name="bairro", length=MAX_LENGTH_BAIRRO)
    private String bairro;

    @Column(name="cidade", length=MAX_LENGTH_CIDADE)
    private String cidade;

    @Column(name="uf", length=MAX_LENGTH_UF)
    private String uf;

    @Column(name="pais", length=MAX_LENGTH_PAIS)
    private String pais;

    @Column(name="login", length=MAX_LENGTH_LOGIN)
    private String login;

    @Column(name="language", length=MAX_LENGTH_LANGUAGE)
    private String language;

    @OneToMany
    @JoinColumn(name="id_usuario", referencedColumnName="id")
    private List<Telefone> telefones;

    @OneToMany
    @JoinColumn(name="id_usuario", referencedColumnName="id")
    private List<Email> emails;

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

    public List<Telefone> getTelefones() {
        return telefones;
    }

    public void setTelefones(List<Telefone> telefones) {
        this.telefones = telefones;
    }

    public List<Email> getEmails() {
        return emails;
    }

    public void setEmails(List<Email> emails) {
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

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getOrgaoExpedidor() {
        return orgaoExpedidor;
    }

    public void setOrgaoExpedidor(String orgaoExpedidor) {
        this.orgaoExpedidor = orgaoExpedidor;
    }

    public String getUfDocumento() {
        return ufDocumento;
    }

    public void setUfDocumento(String ufDocumento) {
        this.ufDocumento = ufDocumento;
    }

}
