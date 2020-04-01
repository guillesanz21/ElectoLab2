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
	private int edad;
	private String genero;
	private String provincia;
	private String customTags;
	
	@ManyToOne
	private String partido;

	public Diputado() {
		super();
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public int getIdDiputado() {
		return idDiputado;
	}

	public String getNombre() {
		return nombre;
	}

	public int getEdad() {
		return edad;
	}

	public String getGenero() {
		return genero;
	}

	public String getProvincia() {
		return provincia;
	}

	public String getCustomTags() {
		return customTags;
	}

	public String getPartido() {
		return partido;
	}

	public void setIdDiputado(int idDiputado) {
		this.idDiputado = idDiputado;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}

	public void setCustomTags(String customTags) {
		this.customTags = customTags;
	}

	public void setPartido(String partido) {
		this.partido = partido;
	}

	@Override
	public String toString() {
		return "Diputado [idDiputado=" + idDiputado + ", nombre=" + nombre + ", edad=" + edad + ", genero=" + genero
				+ ", provincia=" + provincia + ", customTags=" + customTags + ", partido=" + partido + "]";
	}
	
	

}
