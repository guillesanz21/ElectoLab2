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
import es.upm.dit.isst.electolab.model.Diputado;




/**
 * Servlet implementation class FormSeedBBDDServlet
 */
@WebServlet("/FormSeedBBDDServlet")
public class FormSeedBBDD extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final String DiputadoDAOImplementation = null;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FormSeedBBDD() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		//ArrayList de diputados
		
		
    	ArrayList<Diputado> diputados = new ArrayList<Diputado>();
		JSONParser parser = new JSONParser();
        try
        {           
        	
        	

            URL url = getClass().getResource("diputados.json");
            Object object = parser
                    .parse(new FileReader(url.getPath()));
            System.out.println(url.getPath());

            
            //convert Object to JSONObject
            JSONObject jsonObject = (JSONObject)object;
            
            //Reading the array
            JSONArray diputadosJSON = (JSONArray)jsonObject.get("diputados");

            //Printing all the values
            //JSONObject diputado = ((JSONArray) diputados).getJSONObject(0);
          
            JSONObject diputadoJSON;
            int year = Calendar.getInstance().get(Calendar.YEAR);
			/*
			 * Bucle que recorre el array y va accediendo a cada diputado, para acceder a una propiedad de un diputado:
			 * diputadoJSON = (JSONObject)diputadosJSON.get(i)
			 * String proiedad = (String)diputadoJSON.get("Nombre de la propiedad")
			 */
            for(int i = 0; i<diputadosJSON.size(); i++)
            {
            	Diputado d = new Diputado();
            	diputadoJSON = (JSONObject)diputadosJSON.get(i);
            	d.setIdDiputado(i);
            	d.setNombre((String)diputadoJSON.get("nombre"));
            	d.setPartido((String)diputadoJSON.get("partido"));
            	//Genero meterlo en custom tag
            	d.setGenero((String)diputadoJSON.get("sexo"));
            	d.setProvincia((String)diputadoJSON.get("provincia"));
            	d.setEdad(year-(Long)diputadoJSON.get("nacimiento"));

         //   	DiputadoDAOImplementation.getInstancia().create(d);
             	
            	
            	//	this.diputados.add(d);

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

	}



}
