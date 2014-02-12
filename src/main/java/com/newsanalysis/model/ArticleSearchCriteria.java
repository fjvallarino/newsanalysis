package com.newsanalysis.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class ArticleSearchCriteria implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;

	@Column(columnDefinition = "text")
	private String keywords;

	@Temporal(TemporalType.DATE)
	private Date articleDateFrom;
	@Temporal(TemporalType.DATE)
	private Date articleDateTo;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getKeywords() {
		return keywords;
	}

	public void setKeywords(String keywords) {
		this.keywords = keywords;
	}

	public Date getArticleDateFrom() {
		return articleDateFrom;
	}

	public void setArticleDateFrom(Date articleDateFrom) {
		this.articleDateFrom = articleDateFrom;
	}

	public Date getArticleDateTo() {
		return articleDateTo;
	}

	public void setArticleDateTo(Date articleDateTo) {
		this.articleDateTo = articleDateTo;
	}
}
