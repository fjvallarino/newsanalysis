package com.newsanalysis.controller;

import com.newsanalysis.controller.dto.ArticleSearchDTO;
import com.newsanalysis.model.Article;
import com.newsanalysis.service.ArticleService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "articles")
public class ArticleController {
	@Autowired
	private ArticleService articleService;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public @ResponseBody List<Article> getArticles() {
		return articleService.getArticles();
	}
	
	@RequestMapping(value = "/search", method = RequestMethod.PUT)
	public @ResponseBody List<Article> searchArticles(@RequestBody ArticleSearchDTO articleSearchDTO) {
		return new ArrayList<Article>();
	}
}
