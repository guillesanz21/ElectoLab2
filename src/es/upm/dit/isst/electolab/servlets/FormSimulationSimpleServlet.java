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

		// Llamo de la base de datos a la lista de partidos
				Collection<Partido> partidos = new ArrayList<Partido>();
				partidos = PartidoDAOImplementation.getInstancia().readAll();		
				// Crea una nueva simulacion para guardar los resultados 
				Simulacion simulacion = new Simulacion();
				simulacion.setTipoSimulacion("simple");
				ArrayList<Partido> votoPartido = new ArrayList<Partido>();

				boolean ley_aprobada = true;
				String voto = "abstencion";
				
				
				// Recorre la lista de partidos sumando el numero de escaños en el atributo de simulacion que corresponde
				for (Partido partido : partidos) {
					voto =  partido.getVote();
					votoPartido.add(partido);
					if (voto.equals("favor")) {
						simulacion.setVotos_favor((int) (simulacion.getVotos_favor() + partido.getSeats() - partido.getAusentes()));
					}
					else if (voto.equals("contra")) {
						simulacion.setVotos_contra(simulacion.getVotos_contra() + partido.getSeats() - partido.getAusentes());
					}
					else { 
						simulacion.setVotos_abstencion(simulacion.getVotos_abstencion() + partido.getSeats() - partido.getAusentes());
					}
					simulacion.setVotos_ausente(simulacion.getVotos_ausente() + partido.getAusentes());

					// Reinicia la variable voto 
					voto = "abstencion";
					
					// Reinicia el atributo voto del partido en concreto para actualizarlo en la bbdd
					partido.setVote(voto);
					
					if (simulacion.getVotos_favor() > (simulacion.getVotos_contra() + simulacion.getVotos_abstencion())) {
						ley_aprobada = true;
					}
					else if (simulacion.getVotos_favor() > (simulacion.getVotos_contra())) {
						ley_aprobada = true;
					}
					else {
						ley_aprobada = false;
					}
					
					simulacion.setLey_aprobada(ley_aprobada);
					System.out.println("--------------------------------------------------");
					System.out.println("FormSimulationSimpleServlet, ley aprobada: " + ley_aprobada);
					System.out.println("--------------------------------------------------");
					// Actualiza la bbdd dejando el partido con los valores reiniciados
					PartidoDAOImplementation.getInstancia().update(partido);
				}
				simulacion.setVotoPartido(votoPartido);
				// Mete en la sesion el objeto simulacion y devuelve la vista a results.jsp
				System.out.println("FormSimulationSimpleServlet ,doGet, Simulación: " + simulacion);
				request.getSession().setAttribute("simulacion", simulacion);
				getServletContext().getRequestDispatcher("/results.jsp").forward(request, response);


	}

}


