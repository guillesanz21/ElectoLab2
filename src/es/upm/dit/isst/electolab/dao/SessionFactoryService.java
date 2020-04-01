package es.upm.dit.isst.electolab.dao;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class SessionFactoryService {
	private SessionFactory sessionFactory;
	private static SessionFactoryService sfs;
	
	// Constructor privado para que solo se pueda crear un objeto desde el metodo get.
	// Esto se hace para que no se puedan crear mas de una instancia de la clase.
	private SessionFactoryService() {
		this.sessionFactory = new Configuration().configure().buildSessionFactory();
	}

	public static SessionFactory get() {
		if (sfs == null)	// Comprueba si no existe todavia una instancia de la clase
			sfs = new SessionFactoryService();	// La crea
		return sfs.sessionFactory;
	}
}
