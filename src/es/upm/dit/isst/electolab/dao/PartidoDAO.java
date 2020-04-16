package es.upm.dit.isst.electolab.dao;

import java.util.Collection;

import es.upm.dit.isst.electolab.model.Partido;

public interface PartidoDAO {
	public void create(Partido partido);
	public Partido read(String nameCode);
	public void update(Partido partido);
	public void delete(Partido partido);
	public Collection<Partido> readAll();
}
