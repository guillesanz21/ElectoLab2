package es.upm.dit.isst.electolab.sevlets;

import java.io.Console;
import java.io.IOException;
import java.util.Collection;

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
public class FormSimulationServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public FormSimulationServlet() {
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
		Simulacion simulacion = new Simulacion();
		Collection<Diputado> diputados = simulacion.getDiputados();

		String aFavor;
		String enContra;
		int voto = 5;

		for (Diputado diputado : diputados) {
			aFavor = request.getParameter(diputado.getPartido() + "1");
			enContra = request.getParameter(diputado.getPartido() + "2");

			voto = (aFavor != null && aFavor.contentEquals("on")) ? 1
					: (enContra != null && enContra.contentEquals("on")) ? -1 : 0;

			diputado.setVoto(voto);

			if (voto == 1)
				simulacion.setVotos_favor(simulacion.getVotos_favor() + 1);
			else if (voto == -1)
				simulacion.setVotos_contra(simulacion.getVotos_contra() + 1);
			else
				simulacion.setVotos_abstencion(simulacion.getVotos_abstencion() + 1);
		}

		getServletContext().getRequestDispatcher("/results.html").forward(request, response);

	}

}
