package es.upm.dit.isst.electolab.dao;

import java.util.Collection;

import es.upm.dit.isst.electolab.model.Diputado;


public interface DiputadoDAO {
	public void create(Diputado diputado);
	public Diputado read(int idDiputado);
	public void update(Diputado diputado);
	public void delete(Diputado diputado);
	public Collection<Diputado> readAll();
	public Collection<Diputado> readProvincia(String provincia);

}
