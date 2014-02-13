package com.newsanalysis.dao;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.newsanalysis.model.Article;
import com.newsanalysis.model.ArticleSearchCriteria;

@Repository
public class ArticleSearchDAOImpl implements ArticleSearchDAO {
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	@Transactional
	@SuppressWarnings("unchecked")
	public List<Article> searchArticles(ArticleSearchCriteria asc) {
		String queryString = "SELECT a FROM Article a WHERE 1 = 1 ";
		Map<String, Object> params = new LinkedHashMap<String, Object>();
		
		if(asc.getArticleDateFrom() != null) {
			queryString += "AND a.articleDate >= :articleDateFrom ";
			params.put("articleDateFrom", asc.getArticleDateFrom());
		}
		
		if(asc.getArticleDateTo() != null) {
			queryString += "AND a.articleDate <= :articleDateTo ";
			params.put("articleDateTo", asc.getArticleDateTo());
		}
		
		// Metodo de busqueda ineficiente, usado para una demo
		if(!StringUtils.isEmpty(asc.getKeywords())) {
			queryString += "AND (1 = 2";
			
			for(String keyword : StringUtils.split(asc.getKeywords())) {
				queryString += " OR upper(a.story) LIKE :keyword" + params.size();
				params.put("keyword" + params.size(), "%" + keyword.toUpperCase() + "%");
			}
			
			queryString += ") ";
		}
		
		Query query = entityManager.createQuery(queryString);
		
		for(Entry<String, Object> entry : params.entrySet()) {
			query.setParameter(entry.getKey(), entry.getValue());
		}
		
		return query.getResultList();
	}
}
