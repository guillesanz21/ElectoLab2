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
 * Servlet implementation class FormVerSimulacionGuardadaServlet
 */
@WebServlet("/FormVerSimulacionGuardadaServlet")
public class FormVerSimulacionGuardadaServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
 
    public FormVerSimulacionGuardadaServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.getSession().removeAttribute("simulacion");
		request.getSession().setAttribute("verSimulacion", true);

		Simulacion simulacion = SimulacionDAOImplementation.getInstancia().read(Integer.parseInt(request.getParameter("idVerSimulacion")));

		request.getSession().setAttribute("simulacion", simulacion);
		
		//getServletContext().getRequestDispatcher("/VerSimulacionesGuardadas.jsp").forward(request, response);
		getServletContext().getRequestDispatcher("/results.jsp").forward(request, response);
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<Simulacion> simulaciones = (List<Simulacion>) SimulacionDAOImplementation.getInstancia().readAll();
		request.getSession().setAttribute("Simulaciones", simulaciones);			     
	     
		getServletContext().getRequestDispatcher("/ListaSimulacionesGuardadas.jsp").forward(request,response);
	}

}
