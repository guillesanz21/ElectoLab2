package es.upm.dit.isst.electolab.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.electolab.dao.SimulacionDAOImplementation;
import es.upm.dit.isst.electolab.model.Simulacion;

/**
 * Servlet implementation class FormVerListaSimulacionesGuardadasServlet
 */
@WebServlet("/FormVerListaSimulacionesGuardadasServlet")
public class FormVerListaSimulacionesGuardadasServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FormVerListaSimulacionesGuardadasServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<Simulacion> simulaciones = (List<Simulacion>) SimulacionDAOImplementation.getInstancia().readAll();
		request.getSession().setAttribute("Simulaciones", simulaciones);			     
	     
		getServletContext().getRequestDispatcher("/ListaSimulacionesGuardadas.jsp").forward(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
