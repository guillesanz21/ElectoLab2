/**
 * 
 */
package es.upm.dit.isst.electolab.model;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class UsuarioRegistrado implements Serializable {
	
	
	private static final long serialVersionUID = 1L;

	@Id
	private String email;
	
	private String nombre;
	private String password;
	
	@OneToMany(mappedBy = "autor", fetch = FetchType.EAGER)
	private Collection<Simulacion> simulaciones;
	
	
	public UsuarioRegistrado() {
		super();
	}


	public String getEmail() {
		return email;
	}


	public String getNombre() {
		return nombre;
	}


	public String getPassword() {
		return password;
	}


	public Collection<Simulacion> getSimulaciones() {
		return simulaciones;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public void setSimulaciones(Collection<Simulacion> simulaciones) {
		this.simulaciones = simulaciones;
	}


	
	@Override
	public String toString() {
		return "UsuarioRegistrado [email=" + email + ", nombre=" + nombre + ", password=" + password + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
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
		UsuarioRegistrado other = (UsuarioRegistrado) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		return true;
	}

	

}
