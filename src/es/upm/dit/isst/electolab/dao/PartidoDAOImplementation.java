package es.upm.dit.isst.electolab.dao;

import java.util.Collection;
import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.electolab.model.Partido;

public class PartidoDAOImplementation implements PartidoDAO {

	private static PartidoDAOImplementation instancia = null;
	
	
	private PartidoDAOImplementation () {
	}
	
	public static PartidoDAOImplementation getInstancia() {
		if (instancia == null)	// Comprueba si no existe todavia una instancia de la clase
			instancia = new PartidoDAOImplementation();	// La crea
		return instancia;
	}
	
	
	@Override
	public void create(Partido partido) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		session.save(partido);
		session.getTransaction().commit();
		session.close();

	}

	@Override
	public Partido read(String nameCode) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		Partido partido = session.get(Partido.class, nameCode);
		session.getTransaction().commit();
		session.close();
		return partido;
	}

	@Override
	public void update(Partido partido) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		session.saveOrUpdate(partido);
		session.getTransaction().commit();
		session.close();
	}

	@Override
	public void delete(Partido partido) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		session.delete(partido);
		session.getTransaction().commit();
		session.close();

	}

	@Override
	public Collection<Partido> readAll() {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		List<Partido> partido = session.createQuery("from Partido").list();
		session.getTransaction().commit();
		session.close();
		return partido;
	}

}
