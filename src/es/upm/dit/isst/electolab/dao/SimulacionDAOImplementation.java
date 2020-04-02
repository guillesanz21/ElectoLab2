package es.upm.dit.isst.electolab.dao;

import java.util.Collection;
import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.electolab.model.Simulacion;

public class SimulacionDAOImplementation implements SimulacionDAO {

	@Override
	public void create(Simulacion simulacion) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		session.save(simulacion);
		session.getTransaction().commit();
		session.close();
	}

	@Override
	public Simulacion read(int idSimulacion) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		Simulacion simulacion = session.get(Simulacion.class, idSimulacion);
		session.getTransaction().commit();
		session.close();
		return simulacion;
	}

	@Override
	public void update(Simulacion simulacion) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		session.saveOrUpdate(simulacion);
		session.getTransaction().commit();
		session.close();
	}

	@Override
	public void delete(Simulacion simulacion) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		session.delete(simulacion);
		session.getTransaction().commit();
		session.close();
	}

	@Override
	public Collection<Simulacion> readAll() {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		List<Simulacion> simulacion = session.createQuery("from Simulacion").list();
		session.getTransaction().commit();
		session.close();
		return simulacion;
	}

}
