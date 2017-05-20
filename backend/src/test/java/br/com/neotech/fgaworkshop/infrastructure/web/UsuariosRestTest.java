package br.com.neotech.fgaworkshop.infrastructure.web;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.keycloak.util.JsonSerialization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.testng.annotations.Test;

import br.com.neotech.fgaworkshop.infraestructure.dto.EmailDTO;
import br.com.neotech.fgaworkshop.infraestructure.dto.TelefoneDTO;
import br.com.neotech.fgaworkshop.infraestructure.dto.UsuarioDTO;
import br.com.neotech.util.test.BaseRestTest;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class UsuariosRestTest extends BaseRestTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void getUsuarios() throws Exception {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<?> e = new HttpEntity<Object>(headers);

        ResponseEntity<String> entity = restTemplate.exchange("/usuarios", HttpMethod.GET, e, String.class);
        assertThat(entity.getStatusCode()).isEqualTo(HttpStatus.OK);

        List<?> usuarios = JsonSerialization.readValue(entity.getBody(), List.class);
        assertThat(usuarios.size()).isGreaterThan(0);

    }

    @Test
    public void getByLogin() throws Exception {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<?> e = new HttpEntity<Object>(headers);

        Map<String, Object> queryParams = new HashMap<>();
        queryParams.put("login", "anderson.junqueira@gmail.com");

        ResponseEntity<String> entity = restTemplate.exchange("/usuarios/login?login=anderson.junqueira@gmail.com", HttpMethod.GET, e, String.class);
        assertThat(entity.getStatusCode()).isEqualTo(HttpStatus.OK);

        UsuarioDTO usuario = JsonSerialization.readValue(entity.getBody(), UsuarioDTO.class);
        assertThat(usuario.getLogin()).isEqualTo("anderson.junqueira@gmail.com");

    }

    @Test
    public void getByInvalidLogin() throws Exception {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<?> e = new HttpEntity<Object>(headers);

        Map<String, Object> queryParams = new HashMap<>();
        queryParams.put("login", "anderson.junqueira@gmail.com");

        ResponseEntity<String> entity = restTemplate.exchange("/usuarios/login?login=nao.teconto@gmail.com", HttpMethod.GET, e, String.class);
        assertThat(entity.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);

    }

    @Test
    public void createAfterLogin() throws Exception {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        UsuarioDTO u = new UsuarioDTO();
        u.setNome("Teste Integrado");
        u.setLogin("teste@teste.com");

        EmailDTO e = new EmailDTO();
        e.setEmail(u.getLogin());
        e.setPrincipal(true);

        u.setEmails(new ArrayList<EmailDTO>());
        u.getEmails().add(e);

        TelefoneDTO t = new TelefoneDTO();
        t.setNumero("6133270379");
        t.setTipo("res");

        u.setTelefones(new ArrayList<TelefoneDTO>());
        u.getTelefones().add(t);

        HttpEntity<?> payload = new HttpEntity<Object>(u, headers);

        ResponseEntity<String> entity = restTemplate.exchange("/usuarios", HttpMethod.POST, payload, String.class);
        assertThat(entity.getStatusCode()).isEqualTo(HttpStatus.CREATED);

    }
}
