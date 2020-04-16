package es.upm.dit.isst.electolab.servlets;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Calendar;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import es.upm.dit.isst.electolab.dao.PartidoDAOImplementation;
import es.upm.dit.isst.electolab.model.Partido;

/**
 * Servlet implementation class FormPartidoSeedDBServlet
 */
@WebServlet("/FormPartidoSeedDBServlet")
public class FormPartidoSeedDBServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FormPartidoSeedDBServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		ArrayList<Partido> partidos = new ArrayList<Partido>();
		JSONParser parser = new JSONParser();
        try
        {           
        	
        	

            URL url = getClass().getResource("partidos.json");
            Object object = parser
                    .parse(new FileReader(url.getPath()));
            System.out.println(url.getPath());

            
            //convert Object to JSONObject
            JSONObject jsonObject = (JSONObject)object;
            
            //Reading the array
            JSONArray partidosJSON = (JSONArray)jsonObject.get("partidos");

            //Printing all the values
            //JSONObject partido = ((JSONArray) partidos).getJSONObject(0);
          
            JSONObject partidoJSON;
            int year = Calendar.getInstance().get(Calendar.YEAR);
			/*
			 * Bucle que recorre el array y va accediendo a cada partido, para acceder a una propiedad de un partido:
			 * partidoJSON = (JSONObject)partidosJSON.get(i)
			 * String proiedad = (String)partidoJSON.get("Nombre de la propiedad")
			 */
            for(int i = 0; i<partidosJSON.size(); i++)
            {
            	Partido p = new Partido();
            	partidoJSON = (JSONObject)partidosJSON.get(i);
            	p.setIdPartido(i);
            	p.setNameCode((String)partidoJSON.get("nameCode"));
            	p.setFullName((String)partidoJSON.get("fullName"));
            	//Genero meterlo en custom tag
            	p.setSeats(Integer.parseInt((String) partidoJSON.get("seats")));
            	p.setVote(Integer.parseInt((String) partidoJSON.get("vote")));
            	
           	PartidoDAOImplementation.getInstancia().create(p);
            
            	
            	//	this.partidos.add(d);

            }
        }
        catch(FileNotFoundException fe)
        {
            fe.printStackTrace();
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        getServletContext().getRequestDispatcher("/index.jsp")
		.forward(request,response);
	}

	

}
