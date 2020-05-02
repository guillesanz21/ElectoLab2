package es.upm.dit.isst.electolab.model;

import java.io.Serializable;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Simulacion implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	private int idSimulacion;
	
	private int votos_favor;
	private int votos_contra;
	private int votos_abstencion;
	private int votos_ausente;

	
	private String tituloLey;
	private boolean ley_aprobada;
	
	

	@ManyToOne
	private UsuarioRegistrado autor;

	public Simulacion() {
		super();
	}

	public int getIdSimulacion() {
		return idSimulacion;
	}

	public int getVotos_favor() {
		return votos_favor;
	}

	public int getVotos_contra() {
		return votos_contra;
	}

	public int getVotos_abstencion() {
		return votos_abstencion;
	}

	public String getTituloLey() {
		return tituloLey;
	}

	public boolean isLey_aprobada() {
		return ley_aprobada;
	}

	public UsuarioRegistrado getAutor() {
		return autor;
	}

	public void setIdSimulacion(int idSimulacion) {
		this.idSimulacion = idSimulacion;
	}

	public void setVotos_favor(int votos_favor) {
		this.votos_favor = votos_favor;
	}

	public void setVotos_contra(int votos_contra) {
		this.votos_contra = votos_contra;
	}

	public void setVotos_abstencion(int votos_abstencion) {
		this.votos_abstencion = votos_abstencion;
	}

	public void setTituloLey(String tituloLey) {
		this.tituloLey = tituloLey;
	}

	public void setLey_aprobada(boolean ley_aprobada) {
		this.ley_aprobada = ley_aprobada;
	}

	public void setAutor(UsuarioRegistrado autor) {
		this.autor = autor;
	}
	
	public int getVotos_ausente() {
		return votos_ausente;
	}

	public void setVotos_ausente(int votos_ausente) {
		this.votos_ausente = votos_ausente;
	}

	@Override
	public String toString() {
		return "Simulacion [idSimulacion=" + idSimulacion + ", votos_favor=" + votos_favor + ", votos_contra="
				+ votos_contra + ", votos_abstencion=" + votos_abstencion + ", tituloLey=" + tituloLey + 
				", ley_aprobada=" + ley_aprobada + ", autor=" + autor + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((autor == null) ? 0 : autor.hashCode());
		result = prime * result + idSimulacion;
		result = prime * result + (ley_aprobada ? 1231 : 1237);
		result = prime * result + ((tituloLey == null) ? 0 : tituloLey.hashCode());
		result = prime * result + (int) (votos_abstencion ^ (votos_abstencion >>> 32));
		result = prime * result + (int) (votos_contra ^ (votos_contra >>> 32));
		result = prime * result + (int) (votos_favor ^ (votos_favor >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Simulacion other = (Simulacion) obj;
		if (autor == null) {
			if (other.autor != null)
				return false;
		} else if (!autor.equals(other.autor))
			return false;
		if (idSimulacion != other.idSimulacion)
			return false;
		if (ley_aprobada != other.ley_aprobada)
			return false;
		if (tituloLey == null) {
			if (other.tituloLey != null)
				return false;
		} else if (!tituloLey.equals(other.tituloLey))
			return false;
		if (votos_abstencion != other.votos_abstencion)
			return false;
		if (votos_contra != other.votos_contra)
			return false;
		if (votos_favor != other.votos_favor)
			return false;
		return true;
	}

}
