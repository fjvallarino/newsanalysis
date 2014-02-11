package com.newsanalysis.service.impl;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.newsanalysis.service.RESTService;

public abstract class AbstractRESTRepositoryServiceImpl<T, ID extends Serializable> implements RESTService<T, ID> {
	/**
	 * Retorna un @JpaRepository apropiado para el servicio
	 */
	protected abstract JpaRepository<T, ID> getRepository();
	
	public <S extends T> S save(S entity) {
		return getRepository().save(entity);
	}
	
	public <S extends T> Iterable<S> save(Iterable<S> entities) {
		return getRepository().save(entities);
	}
	
	public T findOne(ID id) {
		return getRepository().findOne(id);
	}
	
	public Iterable<T> findAll() {
		return getRepository().findAll();
	}
	
	public Iterable<T> findAll(Iterable<ID> ids) {
		return getRepository().findAll();
	}
	
	public void delete(ID id) {
		getRepository().delete(id);
	}
	
	public void delete(T entity) {
		getRepository().delete(entity);
	}
}
