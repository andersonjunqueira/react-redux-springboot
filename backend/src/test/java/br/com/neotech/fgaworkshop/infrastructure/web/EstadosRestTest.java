package br.com.neotech.fgaworkshop.infrastructure.web;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

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

import br.com.neotech.util.test.BaseRestTest;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class EstadosRestTest extends BaseRestTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void getEstados() throws Exception {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<?> e = new HttpEntity<Object>(headers);

        ResponseEntity<String> entity = restTemplate.exchange("/estados", HttpMethod.GET, e, String.class);
        assertThat(entity.getStatusCode()).isEqualTo(HttpStatus.OK);

        List<?> l = JsonSerialization.readValue(entity.getBody(), List.class);
        assertThat(l.size()).isEqualTo(27);
    }

}
