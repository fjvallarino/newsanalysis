package com.newsanalysis.util;

import org.apache.commons.lang3.StringUtils;

public class StringUtil {
	/**
	 * Convierte la descripcion en Camel Case, reeplazando acentos
	 * 
	 * @param description
	 *            El texto a convertir
	 * @return El valor en formato id
	 */
	public static String descriptionAsId(String description) {
		StringBuilder builder = new StringBuilder();

		if (StringUtils.isEmpty(description))
			return "";

		for (String token : StringUtils.split(description, null)) {
			builder.append(StringUtils.stripAccents(StringUtils.capitalize(token)));
		}

		// El primer caracter no va en mayusculas
		return StringUtils.uncapitalize(builder.toString());
	}

	public static String replaceVariables(String value, String... variables) {
		String temp = value;

		for (int i = 0; i < variables.length; i += 2) {
			String varRegex = variables[i].replace("$", "\\$").replace("{", "\\{");

			temp = temp.replaceAll(varRegex, variables[i + 1]);
		}

		return temp;
	}
}
