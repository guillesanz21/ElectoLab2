package es.upm.dit.isst.electolab.dao;

import java.util.Collection;

import es.upm.dit.isst.electolab.model.UsuarioRegistrado;


public interface UsuarioRegistradoDAO {
	public void create(UsuarioRegistrado user);
	public UsuarioRegistrado read(String email);
	public void update(UsuarioRegistrado user);
	public void delete(UsuarioRegistrado user);
	public Collection<UsuarioRegistrado> readAll();
	public UsuarioRegistrado login(String email, String password);
}
