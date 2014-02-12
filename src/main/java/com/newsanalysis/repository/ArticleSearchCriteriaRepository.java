package com.newsanalysis.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.newsanalysis.model.ArticleSearchCriteria;

public interface ArticleSearchCriteriaRepository extends JpaRepository<ArticleSearchCriteria, Long> {
	
}
