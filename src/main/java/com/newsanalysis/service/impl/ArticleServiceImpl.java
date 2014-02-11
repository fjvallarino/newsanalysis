package com.newsanalysis.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.newsanalysis.model.Article;
import com.newsanalysis.repository.ArticleRepository;
import com.newsanalysis.service.ArticleService;

@Service
public class ArticleServiceImpl extends AbstractRESTRepositoryServiceImpl<Article, Long> implements ArticleService {
	@Autowired
	private ArticleRepository articleRepository;

	@Override
	protected JpaRepository<Article, Long> getRepository() {
		return articleRepository;
	}
}
