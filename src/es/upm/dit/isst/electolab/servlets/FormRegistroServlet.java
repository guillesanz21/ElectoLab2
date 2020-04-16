
package es.upm.dit.isst.electolab.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.electolab.dao.UsuarioRegistradoDAOImplementation;
import es.upm.dit.isst.electolab.model.UsuarioRegistrado;

/**
 * Servlet implementation class Form1UsuarioAvanzadoServlet
 */
@WebServlet("/FormRegistroServlet")
public class FormRegistroServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FormRegistroServlet() {
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
    	String nombre = req.getParameter("name");
    	
    	UsuarioRegistrado usuarioReg = new UsuarioRegistrado();
    	usuarioReg.setEmail(email);
    	usuarioReg.setPassword(password);
    	usuarioReg.setNombre(nombre);
    	
    	UsuarioRegistradoDAOImplementation.getInstancia().create(usuarioReg);
    	
    	//getServletContext().getRequestDispatcher("/Regitrado.html").forward(req, resp);
    	getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
    	
    	/*
    	//para probar el registro desde el admin
    	List<UsuarioRegistrado> listUsuarioRegistrado = new ArrayList<UsuarioRegistrado>();
    	listUsuarioRegistrado.addAll((List<UsuarioRegistrado>) 
    			req.getSession().getAttribute("UsuariosRegistrados"));
    	listUsuarioRegistrado.add(usuarioReg);
    	
    	req.getSession().setAttribute("UsuariosRegistrados", listUsuarioRegistrado);
        getServletContext().getRequestDispatcher("/Admin.jsp").forward(req,resp);
        */
        
    }

}