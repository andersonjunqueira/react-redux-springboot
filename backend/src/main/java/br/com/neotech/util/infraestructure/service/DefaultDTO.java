package br.com.neotech.util.infraestructure.service;

import java.io.Serializable;

public interface DefaultDTO<PK extends Serializable> {

    PK getId();

}
