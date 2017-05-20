package br.com.neotech.fgaworkshop.interfaces.web;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.neotech.fgaworkshop.domain.service.ZipCodeService;
import br.com.neotech.fgaworkshop.infraestructure.dto.ZipCodeDTO;

@RestController
@RequestMapping("/zipcodes")
public class ZipCodeRest {

    private final ZipCodeService service;

    @Autowired
    ZipCodeRest(ZipCodeService service) {
        this.service = service;
    }

    @RequestMapping(value="/{zipcode}", method = RequestMethod.GET)
    public ZipCodeDTO getDocument(@PathVariable String zipcode, HttpServletResponse response) {
        ZipCodeDTO saida = service.find(zipcode);
        if(null == saida){
           response.setStatus(404);
        }
        return saida;
     }
}
