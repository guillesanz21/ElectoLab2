package es.upm.dit.isst.electolab.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import es.upm.dit.isst.electolab.dao.DiputadoDAOImplementation;
import es.upm.dit.isst.electolab.dao.PartidoDAOImplementation;
import es.upm.dit.isst.electolab.model.Diputado;

/**
 * Servlet implementation class AsigacionAvanzadaServlet
 */
@WebServlet("/AsigacionAvanzadaServlet")
public class AsigacionAvanzadaServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AsigacionAvanzadaServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
    	JSONParser parser = new JSONParser();
    	Object object;
    	

    	// Coge el parametro partidos de simulacion.js y va contando los votos
    	try {
    		object = parser.parse(request.getParameter("tagVote"));
    		JSONArray jsonArray = (JSONArray) object;		// convert Object to JSONObject
    		JSONObject tagJSON;
    		for (int i = 0; i < (jsonArray).size(); i++) {
    			tagJSON = (JSONObject) jsonArray.get(i);
    			//System.out.println("FormSimulationServlet, log, partidoJSON: " + partidoJSON);
    			//System.out.println();
    			Collection<Diputado> diputados = new ArrayList<Diputado>();
    			diputados = DiputadoDAOImplementation.getInstancia().readProvincia((String)(tagJSON.get("tag")));		
    			for (Diputado diputado : diputados) {
    				diputado.setVoto((int)(long)tagJSON.get("vote"));
        			DiputadoDAOImplementation.getInstancia().update(diputado);

				}
    			/*
								System.out.println("FormSimulationServlet, log, partido: " + partido);
								System.out.println("--------------------------------------------------");
								System.out.println("FormSimulationServlet, log, ArrayJSON: " + jsonArray);
								System.out.println("FormSimulationServlet, log, readAll: " + PartidoDAOImplementation.getInstancia().readAll());
								System.out.println("--------------------------------------------------");
    			 */
    		}
    	} catch (org.json.simple.parser.ParseException e) {
    		// TODO Auto-generated catch block
    		e.printStackTrace();
    	}
    	request.getRequestDispatcher("FormSimulationAvanzadaServlet").forward(request, response);		

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
