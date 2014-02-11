package com.newsanalysis.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.newsanalysis.controller.dto.ArticleSearchDTO;
import com.newsanalysis.model.Article;
import com.newsanalysis.service.ArticleService;
import com.newsanalysis.service.RESTService;

@Controller
@RequestMapping(value = "articles")
public class ArticleController extends AbstractRESTController<Article, Long> {
	@Autowired
	private ArticleService articleService;
	
	@RequestMapping(value = "/search", method = RequestMethod.PUT)
	public @ResponseBody List<Article> searchArticles(@RequestBody ArticleSearchDTO articleSearchDTO) {
		return new ArrayList<Article>();
	}

	@Override
	protected RESTService<Article, Long> getRESTService() {
		return articleService;
	}
}
