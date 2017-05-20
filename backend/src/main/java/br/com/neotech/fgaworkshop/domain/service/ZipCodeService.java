package br.com.neotech.fgaworkshop.domain.service;

import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import br.com.neotech.fgaworkshop.infraestructure.dto.ZipCodeDTO;

@Service
public class ZipCodeService {

    public ZipCodeDTO find(String zipcode) {

        RestTemplate rest = new RestTemplate();
        MultiValueMap<String, String> map = new LinkedMultiValueMap<String, String>();
        map.add("cepEntrada", zipcode);
        map.add("metodo", "buscarCep");
        String result = rest.postForObject("http://m.correios.com.br/movel/buscaCepConfirma.do?metodo=buscarCep&cepEntrada=" + zipcode, map, String.class);

        ZipCodeDTO saida = parseHtml(result);

        if(saida == null) {
            return null;
        }

        saida.setCep(zipcode);
        return saida;
    }

    private ZipCodeDTO parseHtml(String html) {

        ZipCodeDTO dto = new ZipCodeDTO();

        boolean encontrou = false;

        String logradouro = null;
        if(html.indexOf("Logradouro: ") > -1) {
            html = html.substring(html.indexOf("Logradouro: "));
            encontrou = true;

        } else if(html.indexOf("Endereço: ") > -1) {
            html = html.substring(html.indexOf("Endereço: "));
            encontrou = true;
        }

        if(encontrou) {
            html = html.substring(html.indexOf("respostadestaque")+18);
            logradouro = html.substring(0, html.indexOf("</span><br/>"));
            dto.setLogradouro(logradouro.replaceAll("[\\r\\t]", "").trim());
        }

        String bairro = null;
        if(html.indexOf("Bairro: ") > -1) {
            html = html.substring(html.indexOf("Bairro: "));
            html = html.substring(html.indexOf("respostadestaque")+18);
            bairro = html.substring(0, html.indexOf("</span><br/>"));

            dto.setBairro(bairro.replaceAll("[\\r\\t]", "").trim());
        }

        encontrou = false;

        String localidade = null;
        if(html.indexOf("Localidade / UF: ") > -1) {
            html = html.substring(html.indexOf("Localidade / UF: "));
            encontrou = true;

        } else if(html.indexOf("Localidade/UF: ") > -1) {
            html = html.substring(html.indexOf("Localidade/UF: "));
            encontrou = true;
        }

        if(encontrou) {
            html = html.substring(html.indexOf("respostadestaque")+18);
            localidade = html.substring(0, html.indexOf("</span><br/>"));

            localidade = localidade.replaceAll("[\\r\\t]", "").trim();
            dto.setUf(localidade.substring(localidade.indexOf("/")+1).trim());
            dto.setCidade(localidade.substring(0, localidade.indexOf("/")).trim());
        }

        String cliente = null;
        if(html.indexOf("Cliente: ") > -1) {
            html = html.substring(html.indexOf("Cliente: "));
            html = html.substring(html.indexOf("respostadestaque")+18);
            cliente = html.substring(0, html.indexOf("</span><br/>"));

            dto.setCliente(cliente.replaceAll("[\\r\\t]", "").trim());
        }

        return encontrou ? dto : null;

    }

}
