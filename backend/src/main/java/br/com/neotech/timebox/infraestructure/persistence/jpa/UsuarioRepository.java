package br.com.neotech.timebox.infraestructure.persistence.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import br.com.neotech.timebox.domain.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

//    @Query("select distinct u from Usuario u where u.login = :login")
    Usuario findByLogin(@Param("login") String login);

}
