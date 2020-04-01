package es.upm.dit.isst.electolab.dao;

import java.util.Collection;

import es.upm.dit.isst.electolab.model.Simulacion;


public interface SimulacionDAO {
	public void create(Simulacion simulacion);
	public Simulacion read(int idSimulacion);
	public void update(Simulacion simulacion);
	public void delete(Simulacion simulacion);
	public Collection<Simulacion> readAll();
}
