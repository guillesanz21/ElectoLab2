package es.upm.dit.isst.electolab.dao;

import java.util.List;

import es.upm.dit.isst.electolab.model.Diputado;


public interface DiputadoDAO {
	public void create(Diputado diputado);
	public Diputado read(int idDiputado);
	public void update(Diputado diputado);
	public void delete(Diputado diputado);
	public List<Diputado> readAll();
	public List<Diputado> readTag(String tag, String tagElement);

}
