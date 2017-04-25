package br.com.neotech.timebox.infraestructure.persistence.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.neotech.timebox.domain.model.Telefone;

public interface TelefoneRepository extends JpaRepository<Telefone, Long> {

}
