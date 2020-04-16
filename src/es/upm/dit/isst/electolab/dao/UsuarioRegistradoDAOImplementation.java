package es.upm.dit.isst.electolab.dao;

import java.util.Collection;
import java.util.List;

import javax.persistence.Query;

import org.hibernate.Session;

import es.upm.dit.isst.electolab.model.UsuarioRegistrado;

public class UsuarioRegistradoDAOImplementation implements UsuarioRegistradoDAO {


	private static UsuarioRegistradoDAOImplementation instancia = null;
	// Constructor privado para que solo se pueda crear un objeto desde el metodo get.
	// Esto se hace para que no se puedan crear mas de una instancia de la clase.
	private UsuarioRegistradoDAOImplementation () {
	}

	public static UsuarioRegistradoDAOImplementation getInstancia() {
		if (instancia == null)	// Comprueba si no existe todavia una instancia de la clase
			instancia = new UsuarioRegistradoDAOImplementation();	// La crea
		return instancia;
	}

	@SuppressWarnings("unchecked")
	@Override
	public void create(UsuarioRegistrado user) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		session.save(user);
		session.getTransaction().commit();
		session.close();
	}

	@SuppressWarnings("unchecked")
	@Override
	public UsuarioRegistrado read(String email) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		UsuarioRegistrado user = session.get(UsuarioRegistrado.class, email);
		session.getTransaction().commit();
		session.close();
		return user;
	}

	@SuppressWarnings("unchecked")
	@Override
	public void update(UsuarioRegistrado user) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		session.saveOrUpdate(user);
		session.getTransaction().commit();
		session.close();
	}

	@SuppressWarnings("unchecked")
	@Override
	public void delete(UsuarioRegistrado user) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		session.delete(user);
		session.getTransaction().commit();
		session.close();
	}

	@SuppressWarnings("unchecked")
	@Override
	public Collection<UsuarioRegistrado> readAll() {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		List<UsuarioRegistrado> users = session.createQuery("from UsuarioRegistrado").list();
		session.getTransaction().commit();
		session.close();
		return users;
	}

	@SuppressWarnings("unchecked")
	@Override
	public UsuarioRegistrado login(String email, String password) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		// operaciones
		UsuarioRegistrado usuario = null;
		Query q = session.createQuery("select u from UsuarioRegistrado u where u.email = :email and u.password = :password");
		q.setParameter("email", email);
		q.setParameter("password", password);
		List<UsuarioRegistrado> users = q.getResultList();
		System.out.println("UsuarioRegistradoDAOImplementation, login, users: " + users);

		if (users.size() > 0)
			usuario = (UsuarioRegistrado) (q.getResultList().get(0));
		session.getTransaction().commit();
		session.close();
		return usuario;
	}

}
