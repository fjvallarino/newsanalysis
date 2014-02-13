package com.newsanalysis.service;

import java.util.List;

import com.newsanalysis.model.Article;

public interface ArticleService extends RESTService<Article, Long> {
	List<Article> searchArticles(Long articleSearchCriteriaId);
}
