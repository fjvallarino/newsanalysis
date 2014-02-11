package com.newsanalysis.service;

import java.io.Serializable;

public interface RESTService<T, ID extends Serializable> {
	<S extends T> S save(S entity);
	<S extends T> Iterable<S> save(Iterable<S> entities);
	
	T findOne(ID id);
	Iterable<T> findAll();
	Iterable<T> findAll(Iterable<ID> ids);
	
	void delete(ID id);
	void delete(T entity);
}
