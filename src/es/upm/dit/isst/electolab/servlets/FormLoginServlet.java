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
 * Servlet implementation class FormLoginServlet
 */
@WebServlet("/FormLoginServlet")
public class FormLoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private final String ADMIN_EMAIL = "root";
	private final String ADMIN_PASSWORD = "root";
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FormLoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
    @Override

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
    		throws ServletException, IOException {
    	String email = req.getParameter("email");
    	String password = req.getParameter("password");
    	
    	List<UsuarioRegistrado> usuarios =  
    			(List<UsuarioRegistrado>) UsuarioRegistradoDAOImplementation.getInstancia().readAll();
    	List<Simulacion> simulaciones = (List<Simulacion>) SimulacionDAOImplementation.getInstancia().readAll();
    	UsuarioRegistrado usuario =UsuarioRegistradoDAOImplementation.getInstancia()
    			.login(email, password);
    	/*
    	Simulacion simulacion =SimulacionDAOImplementation.getInstancia()
    			.login(email, password);
    			*/
    	if( ADMIN_EMAIL.equals(email) && ADMIN_PASSWORD.equals(password) ) {
    		req.getSession().setAttribute("admin", true);
    		req.getSession().setAttribute("UsuarioRegistrado", usuarios);
    		//req.getSession().setAttribute("simulacion", simulaciones);			     
    		getServletContext().getRequestDispatcher("/Admin.jsp")
    		.forward(req,resp);
    		/*
    	} else if ( null != simulacion ) {
    		req.getSession().setAttribute("tfg", simulacion);
    		getServletContext().getRequestDispatcher("/TFG.jsp")
    		.forward(req,resp);
    		*/
    	} else if ( null != usuario ) {
    		req.getSession().setAttribute("usuario", 
    				UsuarioRegistradoDAOImplementation.getInstancia()
    				.read(usuario.getEmail()));
    		getServletContext().getRequestDispatcher("/index.html")
    		.forward(req,resp);
    	} else	{
    		getServletContext().getRequestDispatcher("/index.html")
    		.forward(req,resp);
    	}
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	// TODO Auto-generated method stub
    	doGet(request, response);
    }

}
