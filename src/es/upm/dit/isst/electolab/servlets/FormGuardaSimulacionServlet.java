package es.upm.dit.isst.electolab.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import es.upm.dit.isst.electolab.dao.SimulacionDAOImplementation;
import es.upm.dit.isst.electolab.dao.UsuarioRegistradoDAOImplementation;
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
		String emailUsuario = (String) request.getSession().getAttribute("emailUsuario");
		String name = request.getParameter("simName");

		UsuarioRegistrado autor = UsuarioRegistradoDAOImplementation.getInstancia().read(emailUsuario);
		System.out.println("Autor " + autor);

		int id = SimulacionDAOImplementation.getInstancia().readAll().size() ;
		
		Simulacion simulacion = (Simulacion) request.getSession().getAttribute("simulacion");
		
	
		String tipoMayoria = (String) request.getParameter("TipoMayoria");
		String leyAprobada = (String) request.getParameter("LeyAprobada");

		if (leyAprobada.equals("aprobada"))
			simulacion.setLey_aprobada(true);
		else 
			simulacion.setLey_aprobada(false);

		simulacion.setTipoMayoria(tipoMayoria);
		simulacion.setTituloLey(name);
		simulacion.setAutor(autor);
		simulacion.setIdSimulacion(id);
		
		//request.getSession().setAttribute("Simulaciones", simulacion);
		SimulacionDAOImplementation.getInstancia().create(simulacion);
		//System.out.println("FormGuardaSimulacionServlet, doGet, Autor: " + UsuarioRegistradoDAOImplementation.getInstancia().login(email,password));
		
		request.getRequestDispatcher("/index.jsp").forward(request, response);

	
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		
		
	}

}
