package es.upm.dit.isst.electolab.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.electolab.dao.PartidoDAOImplementation;
import es.upm.dit.isst.electolab.model.Partido;
import es.upm.dit.isst.electolab.model.Simulacion;

/**
 * Servlet implementation class FormSimulationServlet
 */
@WebServlet("/FormSimulationSimpleServlet")
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

		
		// Crea una colección de partidos y la inicializa con un array list para recorrerlo 
		// con el bucle
		Collection<Partido> partidos = new ArrayList<Partido>();
		// Accede a la base de datos y guarda todos los partudos en la colección
		partidos = PartidoDAOImplementation.getInstancia().readAll();		
		// Crea una nueva simulación para guardar los resultados 
		Simulacion simulacion = new Simulacion();
		
		// Inicia la variable voto a 5 apra evitar problemas en caso 
		// de que alguno de los partidos de la base de datos no tenga asignado un voto
		int voto = 5;

		// Recorre la lista de partidos sumando el numero de escaños en el atributo 
		// de simulación que corresponde
		for (Partido partido : partidos) {
			
			System.out.println("FormSimulationServlet, log, partido: " + partido);
			voto =  partido.getVote();

			if (voto == 1)
				simulacion.setVotos_favor(simulacion.getVotos_favor() + partido.getSeats());
			else if (voto == -1)
				simulacion.setVotos_contra(simulacion.getVotos_contra() + partido.getSeats());
			else
				simulacion.setVotos_abstencion(simulacion.getVotos_abstencion() + partido.getSeats());
		
			// Reinicia la variable voto para evitar errores
			voto = 5;
			
			// Reinicia el atributo voto del partido en concreto para actualizarlo en la bbdd
			partido.setVote(voto);
			
			// Actualiza la bbss dejando el partido con los valores reiniciados
			PartidoDAOImplementation.getInstancia().update(partido);
		}
		
		// Guarda la simulación en la base de datos para asignarle luego un usuario (?)
		//SimulacionDAOImplementation.getInstancia().create(simulacion);
		
		// Mete en la sesión el objeto simulación y devuelve la vista a results.jsp
		
		request.getSession().setAttribute("simulacion", simulacion);
		getServletContext().getRequestDispatcher("/results.jsp").forward(request, response);

	}

}
