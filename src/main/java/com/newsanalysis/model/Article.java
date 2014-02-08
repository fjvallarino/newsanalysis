package com.newsanalysis.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Article implements Serializable {
	@Id
	@GeneratedValue
	private Long id;
	
	private String source;
	private String author;
	private String headline;
	private String lead;
	private String story;
	private String referenceToSource;
	@Temporal(TemporalType.DATE)
	private Date articleDate;
	@Temporal(TemporalType.DATE)
	private Date detectedDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getHeadline() {
		return headline;
	}

	public void setHeadline(String headline) {
		this.headline = headline;
	}

	public String getLead() {
		return lead;
	}

	public void setLead(String lead) {
		this.lead = lead;
	}

	public String getStory() {
		return story;
	}

	public void setStory(String story) {
		this.story = story;
	}

	public String getReferenceToSource() {
		return referenceToSource;
	}

	public void setReferenceToSource(String referenceToSource) {
		this.referenceToSource = referenceToSource;
	}

	public Date getArticleDate() {
		return articleDate;
	}

	public void setArticleDate(Date articleDate) {
		this.articleDate = articleDate;
	}

	public Date getDetectedDate() {
		return detectedDate;
	}

	public void setDetectedDate(Date detectedDate) {
		this.detectedDate = detectedDate;
	}
}
