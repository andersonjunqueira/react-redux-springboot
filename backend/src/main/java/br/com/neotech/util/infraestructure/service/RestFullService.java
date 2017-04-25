package br.com.neotech.util.infraestructure.service;

import static java.util.stream.Collectors.toList;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public class RestFullService<E, PK extends Serializable, DTO extends DefaultDTO<PK>> {

    private Class<E> modelClass;
    private Class<DTO> dtoClass;
    protected final JpaRepository<E, PK> repository;

    @SuppressWarnings("unchecked")
    private void loadTypes() {
        if(modelClass == null) {
            final ParameterizedType type = (ParameterizedType)getClass().getGenericSuperclass();
            modelClass = (Class<E>)type.getActualTypeArguments()[0];
        }
        if(dtoClass == null) {
            final ParameterizedType type = (ParameterizedType)getClass().getGenericSuperclass();
            dtoClass = (Class<DTO>)type.getActualTypeArguments()[2];
        }
    }

    protected RestFullService(JpaRepository<E, PK> repository) {
        this.repository = repository;
        loadTypes();
    }

    public List<DTO> findAll() {
        List<E> found = repository.findAll();
        return convertToDTOs(found);
    }

    public DTO findById(PK id) {
        E found = repository.findOne(id);
        return convertToDTO(found);
    }

    @Transactional
    public void delete(PK id) {
        repository.delete(id);
    }

    @Transactional
    public DTO create(DTO dto) {
        E persisted = convertToModel(dto);
        persisted = repository.save(persisted);
        return convertToDTO(persisted);
    }

    @Transactional
    public DTO update(DTO dto) {
        E updated = repository.findOne(dto.getId());
        updateModel(updated, dto);
        updated = repository.save(updated);
        return convertToDTO(updated);
    }

    public List<DTO> convertToDTOs(List<E> models) {
        return models.stream()
            .map(this::convertToDTO)
            .collect(toList());
    }

    public DTO convertToDTO(E model) {
        try {
            DTO dto = dtoClass.newInstance();
            BeanUtils.copyProperties(model, dto);
            return dto;
        } catch(Exception ex) {
            return null;
        }
    }

    public E convertToModel(DTO dto) {
        try {
            E m = modelClass.newInstance();
            BeanUtils.copyProperties(dto, m);
            return m;
        } catch(Exception ex) {
            return null;
        }
    }

    public List<E> convertToModels(List<DTO> dtos) {
        return dtos.stream()
            .map(this::convertToModel)
            .collect(toList());
    }

    public void updateModel(E model, DTO dto) {
        BeanUtils.copyProperties(dto, model, "id");
    }

}
