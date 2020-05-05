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
import es.upm.dit.isst.electolab.model.Partido;
import es.upm.dit.isst.electolab.model.Simulacion;

/**
 * Servlet implementation class FormSimulacionAvanzadaServlet
 */
@WebServlet("/FormSimulacionAvanzadaServlet")
public class FormSimulacionAvanzadaServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FormSimulacionAvanzadaServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		/*
		 * Crea las variables de simulacion y de JSONArray.
		 * Crea un ArrayList auxiliar donde irá metiendo los partidos
		 * que luego asignara al atributo votoPartido de simulación.
		 */
		Simulacion simulacion = new Simulacion();
		ArrayList<Diputado> votoDiputado = new ArrayList<Diputado>();
		JSONParser parser = new JSONParser();
    	Object object;
    	/*
    	 {
		"tag": "provincia",
		"lista": [
			{
				"provincia": "Madrid",
				"seats": "30",
				"vote": "favor",
				"ausentes": "13"
			},
			...
			{
				"provincia": "Valencia",
				"seats": "20",
				"vote": "contra",
				"ausentes": "3"
			}
			
		]
			
	}; */

    	// Coge el parametro partidos de simulacion.js y va contando los votos
    	try {
    		
    		/*
    		 * Inicializa las variables creadas antes, parsea el JSON y lo recorre.
    		 */
    		
    		object = parser.parse(request.getParameter("tagJSON"));
    		JSONObject tagJSON = (JSONObject) object;
    		JSONArray jsonArray = (JSONArray) tagJSON.get("lista");		
    		JSONObject listaJSON; 
    		String voto = "abstencion";
    		simulacion.setTipoSimulacion((String) tagJSON.get("tag"));


    		for (int i = 0; i < (jsonArray).size(); i++) {
    			listaJSON = (JSONObject) jsonArray.get(i);
    			Collection<Diputado> diputados = new ArrayList<Diputado>();
    			diputados = DiputadoDAOImplementation.getInstancia().readTag( (String) tagJSON.get("tag"), (String) listaJSON.get("tagElement") );		
    			int nAusentes = Integer.parseInt( (String) listaJSON.get("ausentes"));
    			/*
    			 * Asigna el núemro de ausentes del tag concreto a los primeros n diputados.
    			 * Por ejemplo, en voto por provincias, en la provincia de Madrid asigna 
    			 * los "n" primeros diputados de Madrid como ausentes, 
    			 * siendo "n" el numero de ausentes en esta provincia.
    			 */
    			for (Diputado diputado : diputados) {
    				if (nAusentes != 0) {
        				diputado.setVote("ausente");
        				nAusentes--;
    				} else
    					diputado.setVote((String)listaJSON.get("vote"));
    				/*
    				 * Acumula los votos asignados en el atributo correspondiente de simulación
    				 */
    				voto =  diputado.getVote();
    				if (voto.equals("favor")) 
    					simulacion.setVotos_favor(simulacion.getVotos_favor() + 1);
    				else if (voto.equals("contra"))
    					simulacion.setVotos_contra(simulacion.getVotos_contra() + 1);
    				else if (voto.equals("abstencion"))
    					simulacion.setVotos_abstencion(simulacion.getVotos_abstencion() + 1);
    				else 
    					simulacion.setVotos_ausente(simulacion.getVotos_ausente() + 1);
    				
    				// Añade el diputado con el voto asignado al atributo de simulación
    				votoDiputado.add(diputado);

    				// Reinicia la variable voto 
    				voto = "abstencion";
    								}
    			
    		}
    	} catch (org.json.simple.parser.ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		simulacion.setVotoDiputado(votoDiputado);

		// Mete en la sesion el objeto simulacion y devuelve la vista a results.jsp
		request.getSession().setAttribute("simulacion", simulacion);
		getServletContext().getRequestDispatcher("/results.jsp").forward(request, response);
	}
    	


	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
