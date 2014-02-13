package com.newsanalysis.controller.dto;

import java.io.Serializable;

public class ArticleSearchDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long articleSearchCriteriaId;

	public Long getArticleSearchCriteriaId() {
		return articleSearchCriteriaId;
	}

	public void setArticleSearchCriteria(Long articleSearchCriteriaId) {
		this.articleSearchCriteriaId = articleSearchCriteriaId;
	}
}
