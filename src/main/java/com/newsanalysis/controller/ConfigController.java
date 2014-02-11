package com.newsanalysis.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.View;

import com.newsanalysis.service.ConfigService;

@Controller
public class ConfigController {
	@Autowired
	private ConfigService configService;
	@Autowired
	private View jsonView;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView getMain() {
		return new ModelAndView("index");
	}
}
