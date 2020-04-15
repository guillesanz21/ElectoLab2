package es.upm.dit.isst.electolab.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Partido implements Serializable{
	private static final long serialVersionUID = 1L;

	
	@Id
	private int idPartido;
	
	private String nameCode;
	private String fullName;
	private int seats;
	private int vote;
	
	
	public Partido() {
		super();
	}
	
	
	public int getIdPartido() {
		return idPartido;
	}
	public void setIdPartido(int idPartido) {
		this.idPartido = idPartido;
	}
	public String getNameCode() {
		return nameCode;
	}
	public void setNameCode(String nameCode) {
		this.nameCode = nameCode;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public int getSeats() {
		return seats;
	}
	public void setSeats(int seats) {
		this.seats = seats;
	}
	public int getVote() {
		return vote;
	}
	public void setVote(int vote) {
		this.vote = vote;
	}


	@Override
	public String toString() {
		return "Partido [idPartido=" + idPartido + ", nameCode=" + nameCode + ", fullName=" + fullName + ", seats="
				+ seats + ", vote=" + vote + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((fullName == null) ? 0 : fullName.hashCode());
		result = prime * result + idPartido;
		result = prime * result + ((nameCode == null) ? 0 : nameCode.hashCode());
		result = prime * result + seats;
		result = prime * result + vote;
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
		Partido other = (Partido) obj;
		if (fullName == null) {
			if (other.fullName != null)
				return false;
		} else if (!fullName.equals(other.fullName))
			return false;
		if (idPartido != other.idPartido)
			return false;
		if (nameCode == null) {
			if (other.nameCode != null)
				return false;
		} else if (!nameCode.equals(other.nameCode))
			return false;
		if (seats != other.seats)
			return false;
		if (vote != other.vote)
			return false;
		return true;
	}
	
	
}
