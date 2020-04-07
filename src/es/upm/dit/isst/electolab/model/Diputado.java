package es.upm.dit.isst.electolab.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Diputado implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	private int idDiputado;
	
	private String nombre;
	
	//Tags
	private String partido;
	private long edad;
	private String provincia;
	private String genero;
	private String customTags;
	private int voto;   //-1 contra, 0 abs, 1 a favor
	

	public Diputado() {
		super();
	}


	public int getIdDiputado() {
		return idDiputado;
	}


	public void setIdDiputado(int idDiputado) {
		this.idDiputado = idDiputado;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getPartido() {
		return partido;
	}


	public void setPartido(String partido) {
		this.partido = partido;
	}


	public long getEdad() {
		return edad;
	}


	public void setEdad(long l) {
		this.edad = l;
	}


	public String getProvincia() {
		return provincia;
	}


	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}


	public String getGenero() {
		return genero;
	}


	public void setGenero(String genero) {
		this.genero = genero;
	}


	public String getCustomTags() {
		return customTags;
	}


	public void setCustomTags(String customTags) {
		this.customTags = customTags;
	}


	public int getVoto() {
		return voto;
	}


	public void setVoto(int voto) {
		this.voto = voto;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idDiputado;
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
		Diputado other = (Diputado) obj;
		if (idDiputado != other.idDiputado)
			return false;
		return true;
	}

	
	

}
