package es.upm.dit.isst.electolab.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Partido implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	private String codeName;
	private String fullName;
	private String vote;
	private int seats;
	
	@OneToMany(mappedBy = "partido", fetch = FetchType.EAGER)
	private List<Diputado> diputados;
	
	public Partido() {
		super();
	}
	
	
	public List<Diputado> getDiputados() {
		return diputados;
	}

	public void setDiputados(List<Diputado> diputados) {
		this.diputados = diputados;
	}

	public String getCodeName() {
		return codeName;
	}
	
	public void setCodeName(String codeName) {
		this.codeName = codeName;
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
	
	public String getVote() {
		return vote;
	}
	
	public void setVote(String vote) {
		this.vote = vote;
	}





	@Override
	public String toString() {
		return "Partido [codeName=" + codeName + ", fullName=" + fullName + ", seats=" + seats + ", vote=" + vote
				+ ", diputados=" + diputados + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((codeName == null) ? 0 : codeName.hashCode());
		result = prime * result + ((diputados == null) ? 0 : diputados.hashCode());
		result = prime * result + ((fullName == null) ? 0 : fullName.hashCode());
		result = prime * result + seats;
		result = prime * result + ((vote == null) ? 0 : vote.hashCode());
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
		if (codeName == null) {
			if (other.codeName != null)
				return false;
		} else if (!codeName.equals(other.codeName))
			return false;
		if (diputados == null) {
			if (other.diputados != null)
				return false;
		} else if (!diputados.equals(other.diputados))
			return false;
		if (fullName == null) {
			if (other.fullName != null)
				return false;
		} else if (!fullName.equals(other.fullName))
			return false;
		if (seats != other.seats)
			return false;
		if (vote == null) {
			if (other.vote != null)
				return false;
		} else if (!vote.equals(other.vote))
			return false;
		return true;
	}
	
	
}
