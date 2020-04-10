
package es.upm.dit.isst.electolab.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.electolab.model.UsuarioRegistrado;

/**
 * Servlet implementation class Form1UsuarioAvanzadoServlet
 */
@WebServlet("/Form1UsuarioAvanzadoServlet")
public class Form1UsuarioAvanzadoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Form1UsuarioAvanzadoServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
    		throws ServletException, IOException {
    	String email = req.getParameter("email");
    	String password = req.getParameter("password");
    	String nombre = req.getParameter("nombre");
    	
    	
    	
    	
    	if( null != nombre ) {			// Comprueba que existe usuario
    		UsuarioRegistrado usuario = new UsuarioRegistrado();
    		usuario.setEmail(email);
    		usuario.setPassword(password);
    		usuario.setNombre(nombre);
    		req.getSession().setAttribute("usuario", usuario);
    	}
    	//getServletContext().getRequestDispatcher("/Regitrado.html").forward(req, resp);
    	getServletContext().getRequestDispatcher("/index.html").forward(req, resp);
    }

}