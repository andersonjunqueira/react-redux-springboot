package br.com.neotech.timebox.domain.service;

import java.util.ArrayList;
import java.util.Collections;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.neotech.timebox.domain.model.Email;
import br.com.neotech.timebox.domain.model.Telefone;
import br.com.neotech.timebox.domain.model.Usuario;
import br.com.neotech.timebox.infraestructure.dto.EmailDTO;
import br.com.neotech.timebox.infraestructure.dto.TelefoneDTO;
import br.com.neotech.timebox.infraestructure.dto.UsuarioDTO;
import br.com.neotech.timebox.infraestructure.persistence.jpa.EmailRepository;
import br.com.neotech.timebox.infraestructure.persistence.jpa.TelefoneRepository;
import br.com.neotech.timebox.infraestructure.persistence.jpa.UsuarioRepository;
import br.com.neotech.util.infraestructure.service.RestFullService;

@Service
public class UsuariosService extends RestFullService<Usuario, Long, UsuarioDTO> {

    @Autowired
    private EmailRepository emailRepository;

    @Autowired
    private TelefoneRepository telefoneRepository;

    @Autowired
    UsuariosService(UsuarioRepository repository) {
        super(repository);
    }

    public UsuarioDTO findByLogin(String login) {
        Usuario u = ((UsuarioRepository)repository).findByLogin(login);
        return convertToDTO(u);
    }

    @Override
    @Transactional
    public UsuarioDTO create(UsuarioDTO dto) {

        Usuario persisted = convertToModel(dto);
        if(persisted.getEmails() != null && persisted.getEmails().size() == 1) {
            persisted.getEmails().get(0).setPrincipal(true);
        }
        persisted = repository.save(persisted);

        for(Email e : persisted.getEmails()) {
            e.setIdUsuario(persisted.getId());
            emailRepository.save(e);
        }

        for(Telefone e : persisted.getTelefones()) {
            e.setIdUsuario(persisted.getId());
            telefoneRepository.save(e);
        }

        return convertToDTO(persisted);
    }

    @Override
    public UsuarioDTO convertToDTO(Usuario model) {
        try {
            UsuarioDTO dto = super.convertToDTO(model);

            if(model.getTelefones() != null && model.getTelefones().size() > 0) {
                RestFullService<Telefone, Long, TelefoneDTO> inner = new RestFullService<Telefone, Long, TelefoneDTO>(null) {};
                dto.setTelefones(inner.convertToDTOs(model.getTelefones()));
            } else {
                dto.setTelefones(Collections.<TelefoneDTO>emptyList());
            }

            if(model.getEmails() != null && model.getEmails().size() > 0) {
                RestFullService<Email, Long, EmailDTO> inner = new RestFullService<Email, Long, EmailDTO>(null) {};
                dto.setEmails(inner.convertToDTOs(model.getEmails()));
            } else {
                dto.setEmails(Collections.<EmailDTO>emptyList());
            }

            return dto;
        } catch(Exception ex) {
            return null;
        }
    }

    @Override
    public Usuario convertToModel(UsuarioDTO dto) {
        try {
            Usuario model = new Usuario();

            BeanUtils.copyProperties(dto, model, "emails", "telefones");

            model.setEmails(new ArrayList<Email>());
            if(dto.getEmails() != null && dto.getEmails().size() > 0) {
                RestFullService<Email, Long, EmailDTO> inner = new RestFullService<Email, Long, EmailDTO>(null) {};
                model.setEmails(inner.convertToModels(dto.getEmails()));
            } else {
                model.setEmails(Collections.<Email>emptyList());
            }

            model.setTelefones(new ArrayList<Telefone>());
            if(dto.getTelefones() != null && dto.getTelefones().size() > 0) {
                RestFullService<Telefone, Long, TelefoneDTO> inner = new RestFullService<Telefone, Long, TelefoneDTO>(null) {};
                model.setTelefones(inner.convertToModels(dto.getTelefones()));
            } else {
                model.setTelefones(Collections.<Telefone>emptyList());
            }

            return model;

        } catch(Exception ex) {
            return null;
        }
    }
}
