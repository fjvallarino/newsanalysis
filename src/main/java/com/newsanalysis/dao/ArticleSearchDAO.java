package com.newsanalysis.dao;

import java.util.List;

import com.newsanalysis.model.Article;
import com.newsanalysis.model.ArticleSearchCriteria;

public interface ArticleSearchDAO {
	List<Article> searchArticles(ArticleSearchCriteria asc);
}
