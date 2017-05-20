package br.com.neotech.fgaworkshop.infraestructure.persistence.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.neotech.fgaworkshop.domain.model.Email;

public interface EmailRepository extends JpaRepository<Email, Long> {

}
