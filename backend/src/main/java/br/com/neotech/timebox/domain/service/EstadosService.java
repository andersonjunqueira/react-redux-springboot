package br.com.neotech.timebox.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import br.com.neotech.timebox.domain.model.Estado;
import br.com.neotech.timebox.infraestructure.dto.EstadoDTO;
import br.com.neotech.timebox.infraestructure.persistence.jpa.EstadosRepository;
import br.com.neotech.util.infraestructure.service.RestFullService;

@Service
public class EstadosService extends RestFullService<Estado, Long, EstadoDTO> {

    @Autowired
    EstadosService(EstadosRepository repository) {
        super(repository);
    }

    @Override
    public List<EstadoDTO> findAll() {
        List<Estado> found = repository.findAll(new Sort(Sort.Direction.ASC, "nome"));
        return convertToDTOs(found);
    }

}
