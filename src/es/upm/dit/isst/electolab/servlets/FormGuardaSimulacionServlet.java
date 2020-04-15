package es.upm.dit.isst.electolab.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import es.upm.dit.isst.electolab.dao.SimulacionDAOImplementation;
import es.upm.dit.isst.electolab.dao.UsuarioRegistradoDAOImplementation;
import es.upm.dit.isst.electolab.model.Diputado;
import es.upm.dit.isst.electolab.model.Simulacion;
import es.upm.dit.isst.electolab.model.UsuarioRegistrado;

/**
 * Servlet implementation class FormGuardaSimulacionServlet
 */
@WebServlet("/FormGuardaSimulacionServlet")
public class FormGuardaSimulacionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FormGuardaSimulacionServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		
		
		String name = request.getParameter("simName");
		
		UsuarioRegistrado autor = UsuarioRegistradoDAOImplementation.getInstancia().login(email,password); 		
		
		boolean ley_aprobada = true;
		int id = SimulacionDAOImplementation.getInstancia().readAll().size() ;
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
		if (simulacion.getVotos_favor() > (simulacion.getVotos_contra()+ simulacion.getVotos_abstencion())) {
			ley_aprobada = true;
		}
		else {
			ley_aprobada = false;
		}
		
		simulacion.setTituloLey(name);
		simulacion.setAutor(autor);
		simulacion.setLey_aprobada(ley_aprobada);
		simulacion.setIdSimulacion(id);
		simulacion.setDiputados(diputados);
		SimulacionDAOImplementation.getInstancia().create(simulacion);
		
		List<Simulacion> sim = new ArrayList<Simulacion>();
		
		sim.addAll((List<Simulacion>) request.getSession().getAttribute("simulaciones"));
		sim.add(simulacion);
		request.getSession().setAttribute("simulaciones", sim);
		
		request.getRequestDispatcher("/index.jsp").forward(request, response);

		/*
		long afavor = (simulacion.getVotos_favor());
		long contra = (simulacion.getVotos_contra());
		long abstencion = (simulacion.getVotos_abstencion());
		long datos[]= {afavor, contra, abstencion};
		
		context.setAttribute("list", datos );
		
		request.setAttribute("simulacion", simulacion);
		*/
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		
		
	}

}
