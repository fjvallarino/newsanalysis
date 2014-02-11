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
		return getRESTService().findOne(id);
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST)
	public @ResponseBody T save(@RequestBody T entity) {
		return getRESTService().save(entity);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable ID id) {
		getRESTService().delete(id);
	}
}
