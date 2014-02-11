package com.newsanalysis.service;

import java.io.Serializable;

public interface RESTService<T, ID extends Serializable> {
	<S extends T> S create(S entity);
	
	<S extends T> S update(S entity);
	
	T find(ID id);
	Iterable<T> findAll();
	
	void delete(ID id);
	void delete(T entity);
}
