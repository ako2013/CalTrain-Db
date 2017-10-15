package cs157a;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Station {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String name;
	
	//set the ID of the station
	public void setId(Integer id) {
		this.id = id;
	}
	
	//get ID of station
	public Integer getId() {
		return id;
	}
	
	//set station name
	public void setName(String name) {
		this.name = name;
	}
	
	//get station name
	public String getName(){
		return name;
	}
	
}