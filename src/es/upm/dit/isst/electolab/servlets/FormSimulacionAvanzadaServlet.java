package es.upm.dit.isst.electolab.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.electolab.dao.DiputadoDAOImplementation;
import es.upm.dit.isst.electolab.dao.PartidoDAOImplementation;
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

		// Llamo de la base de datos a la lista de partidos
		Collection<Diputado> diputados = new ArrayList<Diputado>();
		diputados = DiputadoDAOImplementation.getInstancia().readAll();		
		// Crea una nueva simulacion para guardar los resultados 
		Simulacion simulacion = new Simulacion();
		boolean ley_aprobada = true;
		String voto = "ausente";
		
		// Recorre la lista de partidos sumando el numero de escaños en el atributo de simulacion que corresponde
		for (Diputado diputado : diputados) {
			
			voto =  diputado.getVote();

			if (voto == "favor")
				simulacion.setVotos_favor(simulacion.getVotos_favor() + 1);
			else if (voto == "contra")
				simulacion.setVotos_contra(simulacion.getVotos_contra() + 1);
			else if (voto == "abstencion")
				simulacion.setVotos_abstencion(simulacion.getVotos_abstencion() + 1);
			else 
				simulacion.setVotos_ausente(simulacion.getVotos_ausente() + 1);
			// Reinicia la variable voto 
			voto = "ausente";
			
			// Reinicia el atributo voto del partido en concreto para actualizarlo en la bbdd
			diputado.setVote(voto);
			
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
			DiputadoDAOImplementation.getInstancia().update(diputado);
		}
		
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
