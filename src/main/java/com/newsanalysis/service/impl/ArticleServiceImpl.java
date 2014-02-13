package com.newsanalysis.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.newsanalysis.dao.ArticleSearchDAO;
import com.newsanalysis.model.Article;
import com.newsanalysis.model.ArticleSearchCriteria;
import com.newsanalysis.repository.ArticleRepository;
import com.newsanalysis.repository.ArticleSearchCriteriaRepository;
import com.newsanalysis.service.ArticleService;

@Service
public class ArticleServiceImpl extends AbstractRESTRepositoryServiceImpl<Article, Long> implements ArticleService {
	@Autowired
	private ArticleRepository articleRepository;
	@Autowired
	private ArticleSearchCriteriaRepository articleSearchCriteriaRepository;
	@Autowired
	private ArticleSearchDAO articleSearchDAO;

	@Override
	protected JpaRepository<Article, Long> getRepository() {
		return articleRepository;
	}

	@Override
	public List<Article> searchArticles(Long articleSearchCriteriaId) {
		if(articleSearchCriteriaId != null) {
			ArticleSearchCriteria asc = articleSearchCriteriaRepository.findOne(articleSearchCriteriaId);
			
			return articleSearchDAO.searchArticles(asc);
		}
		else {
			return articleRepository.findAll();
		}
	}
}
