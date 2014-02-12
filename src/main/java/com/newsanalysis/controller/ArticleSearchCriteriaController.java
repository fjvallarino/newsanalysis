package com.newsanalysis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.newsanalysis.model.ArticleSearchCriteria;
import com.newsanalysis.service.ArticleSearchCriteriaService;
import com.newsanalysis.service.RESTService;

@Controller
@RequestMapping(value = "articles-search-criteria")
public class ArticleSearchCriteriaController extends AbstractRESTController<ArticleSearchCriteria, Long> {
	@Autowired
	private ArticleSearchCriteriaService articleSearchCriteriaService;
	
	@Override
	protected RESTService<ArticleSearchCriteria, Long> getRESTService() {
		return articleSearchCriteriaService;
	}
}
