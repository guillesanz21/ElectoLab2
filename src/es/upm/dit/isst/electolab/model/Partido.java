package es.upm.dit.isst.electolab.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Partido implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@OneToMany(mappedBy = "partido", fetch = FetchType.EAGER)
	private String nombre;
	
	private int escanos;
	private int voto;		// -1 en contra, 0 abstencion, 1 a favor

	
	public Partido() {
		super();
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	public int getEscanos() {
		return escanos;
	}

	public int getVoto() {
		return voto;
	}

	public String getNombre() {
		return nombre;
	}


	public void setEscanos(int escanos) {
		this.escanos = escanos;
	}

	public void setVoto(int voto) {
		this.voto = voto;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@Override
	public String toString() {
		return "Partido [nombre=" + nombre + ", escanos=" + escanos + ", voto=" + voto + "]";
	}

	
	
}
