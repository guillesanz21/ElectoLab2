package es.upm.dit.isst.electolab.servlets;

import java.io.Console;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collection;

import java.io.IOException;
import java.io.File;
import java.io.FileInputStream;
import java.util.Iterator;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Iterator;

import java.io.FileNotFoundException;
import java.io.FileReader;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.json.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.datatype.DatatypeDocumentFactory;

import es.upm.dit.isst.electolab.model.Diputado;
import es.upm.dit.isst.electolab.model.Simulacion;

/**
 * Servlet implementation class FormSimulationServlet
 */
@WebServlet("/FormSimulationServlet")
public class FormSimulationSimpleServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public FormSimulationSimpleServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)

			throws ServletException, IOException {
		// TODO Auto-generated method stub

		// ARRAY CON TODOS LOS DIPUTADOS
//kjsadkjfhsadjhfkjhsdaf
		Simulacion simulacion = new Simulacion();
		ArrayList<Diputado> diputados = simulacion.getDiputados();

		long voto = 5;
		System.out.println(request.getParameter("partidos"));
		JSONParser parser = new JSONParser();

		/*
		 * Coge el parametro partidos de simulacion.js y va contando los votos
		 */
		Object object;
		try {
			object = parser.parse(request.getParameter("partidos"));

			// convert Object to JSONObject
			JSONArray jsonArray = (JSONArray) object;

			JSONObject diputadoJSON;
			for (int i = 0; i < jsonArray.size(); i++) {
				diputadoJSON = (JSONObject) jsonArray.get(i);
				System.out.println("FormSimulationServlet, log, diputadoJSON: " + diputadoJSON);
				voto = (Long) diputadoJSON.get("vote");

				if (voto == 1)
					simulacion.setVotos_favor(simulacion.getVotos_favor() + (long) diputadoJSON.get("seats"));
				else if (voto == -1)
					simulacion.setVotos_contra(simulacion.getVotos_contra() + (long) diputadoJSON.get("seats"));
				else
					simulacion.setVotos_abstencion(simulacion.getVotos_abstencion() + (long) diputadoJSON.get("seats"));

			}
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		request.getSession().setAttribute("simulacion", simulacion);
		getServletContext().getRequestDispatcher("/results.html").forward(request, response);

	}

}
