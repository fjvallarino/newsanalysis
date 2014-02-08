package com.newsanalysis.service.impl;

import com.newsanalysis.model.Article;
import com.newsanalysis.repository.ArticleRepository;
import com.newsanalysis.service.ArticleService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleServiceImpl implements ArticleService {
	@Autowired
	private ArticleRepository articleRepository;
	
	@Override
	public List<Article> getArticles() {
		return articleRepository.findAll();
	}
}
