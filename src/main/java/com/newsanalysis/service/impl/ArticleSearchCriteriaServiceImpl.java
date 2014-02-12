package com.newsanalysis.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.newsanalysis.model.ArticleSearchCriteria;
import com.newsanalysis.repository.ArticleSearchCriteriaRepository;
import com.newsanalysis.service.ArticleSearchCriteriaService;

@Service
public class ArticleSearchCriteriaServiceImpl extends AbstractRESTRepositoryServiceImpl<ArticleSearchCriteria, Long> implements ArticleSearchCriteriaService {
	@Autowired
	private ArticleSearchCriteriaRepository articleSearchCriteriaRepository;

	@Override
	protected JpaRepository<ArticleSearchCriteria, Long> getRepository() {
		return articleSearchCriteriaRepository;
	}
}
