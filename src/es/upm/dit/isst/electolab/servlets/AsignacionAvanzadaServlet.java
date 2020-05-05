package es.upm.dit.isst.electolab.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import es.upm.dit.isst.electolab.dao.DiputadoDAOImplementation;
import es.upm.dit.isst.electolab.model.Diputado;

/**
 * Servlet implementation class AsigacionAvanzadaServlet
 */
@WebServlet("/AsignacionAvanzadaServlet")
public class AsignacionAvanzadaServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AsignacionAvanzadaServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Collection<Diputado> diputados = new ArrayList<Diputado>();
    	diputados = DiputadoDAOImplementation.getInstancia().readAll();

    	request.getSession().setAttribute("diputados", diputados);

    	getServletContext().getRequestDispatcher("/AsignacionAvanzada.jsp").forward(request, response);
	
	}


}

