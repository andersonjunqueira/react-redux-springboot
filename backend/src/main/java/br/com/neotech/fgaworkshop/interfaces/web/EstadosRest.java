package br.com.neotech.fgaworkshop.interfaces.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.neotech.fgaworkshop.domain.model.Estado;
import br.com.neotech.fgaworkshop.domain.service.EstadosService;
import br.com.neotech.fgaworkshop.infraestructure.dto.EstadoDTO;
import br.com.neotech.util.infraestructure.web.RestFullEndpoint;

@RestController
@RequestMapping("/estados")
public class EstadosRest extends RestFullEndpoint<Estado, Long, EstadoDTO> {

    @Autowired
    public EstadosRest(EstadosService service) {
        super(service);
    }

}

