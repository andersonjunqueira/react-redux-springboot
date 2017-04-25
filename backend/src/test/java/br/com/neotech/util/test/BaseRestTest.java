package br.com.neotech.util.test;

import java.io.IOException;

import org.keycloak.representations.AccessTokenResponse;
import org.keycloak.util.JsonSerialization;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

public abstract class BaseRestTest extends AbstractTestNGSpringContextTests {

    protected static String getToken() {

        final String tokenEndpoint = "http://localhost:8080/auth/realms/timebox-realm/protocol/openid-connect/token";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> map= new LinkedMultiValueMap<String, String>();
        map.add("client_id", "timebox-frontend");
        map.add("client_secret", "e7f523e9-7f4f-4902-98d2-fcbf912284e7");
        map.add("grant_type", "password");
        map.add("username", "anderson.junqueira@gmail.com");
        map.add("password", "123456");

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity(tokenEndpoint, request, String.class);

        AccessTokenResponse tokenInfo = null;
        try {
            String json = response.getBody();
            tokenInfo = JsonSerialization.readValue(json, AccessTokenResponse.class);
            return tokenInfo.getToken();
        } catch(IOException ex) {
        }

        return null;

    }

}
