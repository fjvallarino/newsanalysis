package com.newsanalysis.controller;

import java.io.Serializable;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.newsanalysis.service.RESTService;

public abstract class AbstractRESTController<T, ID extends Serializable> {
	protected abstract RESTService<T, ID> getRESTService();
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public @ResponseBody Iterable<T> query() {
		return getRESTService().findAll();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody T query(@PathVariable ID id) {
		return getRESTService().find(id);
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST)
	public @ResponseBody T create(@RequestBody T entity) {
		return getRESTService().create(entity);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.POST)
	public @ResponseBody T update(@PathVariable ID id, @RequestBody T entity) {
		return getRESTService().update(entity);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public @ResponseBody void delete(@PathVariable ID id) {
		getRESTService().delete(id);
	}
}
