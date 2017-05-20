package br.com.neotech.fgaworkshop.infraestructure.persistence.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.neotech.fgaworkshop.domain.model.Telefone;

public interface TelefoneRepository extends JpaRepository<Telefone, Long> {

}
