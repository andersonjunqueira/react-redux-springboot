package br.com.neotech.fgaworkshop.infraestructure.persistence.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.neotech.fgaworkshop.domain.model.Estado;

public interface EstadosRepository extends JpaRepository<Estado, Long> {

}
