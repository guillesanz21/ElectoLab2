package es.upm.dit.isst.electolab.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FormLogoutServlet
 */
@WebServlet("/FormLogoutServlet")
public class FormLogoutServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FormLogoutServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    @Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.getSession().removeAttribute("admin");
		req.getSession().removeAttribute("UsuarioRegistrado");
		req.getSession().removeAttribute("usuario");
		req.getSession().removeAttribute("usuarioActivo");
		req.getSession().removeAttribute("Simulaciones");
		req.getSession().invalidate();
		getServletContext().getRequestDispatcher("/index.jsp").forward(req,resp);
	}
    
    
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
