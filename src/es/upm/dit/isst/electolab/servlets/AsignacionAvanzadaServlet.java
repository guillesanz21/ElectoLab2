package es.upm.dit.isst.electolab.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import es.upm.dit.isst.electolab.dao.DiputadoDAOImplementation;
import es.upm.dit.isst.electolab.model.Diputado;

/**
 * Servlet implementation class AsigacionAvanzadaServlet
 */
@WebServlet("/AsignacionAvanzadaServlet")
public class AsignacionAvanzadaServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AsignacionAvanzadaServlet() {
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
    	/*
    	 {
		"tag": "provincia",
		"lista": [
			{
				"provincia": "Madrid",
				"seats": "30",
				"voto": "favor",
				"ausentes": "13"
			},
			...
			{
				"provincia": "Valencia",
				"seats": "20",
				"voto": "contra",
				"ausentes": "3"
			}
			
		]
			
	}; */

    	// Coge el parametro partidos de simulacion.js y va contando los votos
    	try {
    		System.out.println("Hola" + request.getParameter("partidos"));
    		object = parser.parse(request.getParameter("partidos"));
    		JSONObject tagJSON = (JSONObject) object;
    		JSONArray jsonArray = (JSONArray) tagJSON.get("lista");		// convert Object to JSONObject
    		JSONObject listaJSON;
    		for (int i = 0; i < (jsonArray).size(); i++) {
    			listaJSON = (JSONObject) jsonArray.get(i);
    			//System.out.println("FormSimulationServlet, log, partidoJSON: " + partidoJSON);
    			//System.out.println((String)(tagJSON.get("tag")), (String)(tagJSON.get("tagElement")));
    			System.out.println((String) tagJSON.get("tag")  + "-------------" + (String) listaJSON.get("tagElement"));

    			Collection<Diputado> diputados = new ArrayList<Diputado>();
    			diputados = DiputadoDAOImplementation.getInstancia().readTag( (String) tagJSON.get("tag"), (String) listaJSON.get("tagElement") );		
    			System.out.println(diputados);
    			int nAusentes = Integer.parseInt( (String) listaJSON.get("ausentes"));
    			for (Diputado diputado : diputados) {
    				if (nAusentes != 0) {
        				diputado.setVote("ausente");
        				nAusentes--;
    				} else
    					diputado.setVote((String)listaJSON.get("voto"));
    				
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
    	request.getRequestDispatcher("FormSimulacionAvanzadaServlet").forward(request, response);		

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	//	doGet(request, response);
		Collection<Diputado> diputados = new ArrayList<Diputado>();
    	diputados = DiputadoDAOImplementation.getInstancia().readAll();

    	request.getSession().setAttribute("diputados", diputados);

    	getServletContext().getRequestDispatcher("/AsignacionAvanzada.jsp").forward(request, response);
	}

}

