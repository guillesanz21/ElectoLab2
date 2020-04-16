package es.upm.dit.isst.electolab.dao;

import java.util.Collection;
import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.electolab.model.Diputado;

public class DiputadoDAOImplementation implements DiputadoDAO {

	
	private static DiputadoDAOImplementation instancia = null;
	
	private DiputadoDAOImplementation () {
	}
	
	public static DiputadoDAOImplementation getInstancia() {
		if (instancia == null)	// Comprueba si no existe todavia una instancia de la clase
			instancia = new DiputadoDAOImplementation();	// La crea
		return instancia;
	}

	@Override
	public void create(Diputado diputado) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		session.save(diputado);
		session.getTransaction().commit();
		session.close();
	}

	@Override
	public Diputado read(int idDiputado) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		Diputado diputado = session.get(Diputado.class, idDiputado);
		session.getTransaction().commit();
		session.close();
		return diputado;
	}

	@Override
	public void update(Diputado diputado) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		session.saveOrUpdate(diputado);
		session.getTransaction().commit();
		session.close();
	}

	@Override
	public void delete(Diputado diputado) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		session.delete(diputado);
		session.getTransaction().commit();
		session.close();
	}

	@Override
	public Collection<Diputado> readAll() {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		List<Diputado> diputado = session.createQuery("from Diputado").list();
		session.getTransaction().commit();
		session.close();
		return diputado;
	}

}
