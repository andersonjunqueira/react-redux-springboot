package br.com.neotech.timebox.infraestructure.persistence.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.neotech.timebox.domain.model.Estado;

public interface EstadosRepository extends JpaRepository<Estado, Long> {

}
