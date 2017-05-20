package br.com.neotech.fgaworkshop.interfaces.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.neotech.fgaworkshop.domain.model.Usuario;
import br.com.neotech.fgaworkshop.domain.service.UsuariosService;
import br.com.neotech.fgaworkshop.infraestructure.dto.UsuarioDTO;
import br.com.neotech.util.infraestructure.web.RestFullEndpoint;

@RestController
@RequestMapping("/usuarios")
public class UsuariosRest extends RestFullEndpoint<Usuario, Long, UsuarioDTO> {

    @Autowired
    public UsuariosRest(UsuariosService service) {
        super(service);
    }

    @RequestMapping(method = RequestMethod.GET, path="/login")
    public ResponseEntity<UsuarioDTO> getByLogin(@RequestParam("login") String login) {
        UsuarioDTO u = ((UsuariosService)service).findByLogin(login);
        if(u != null) {
            return new ResponseEntity<>(u, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
