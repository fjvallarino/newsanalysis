package com.newsanalysis.repository;

import com.newsanalysis.model.Article;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> {
	public List<Article> findByAuthor(String author);
}
