package cs157a;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Station {
	@Id
	private String id;
	private String name;
	
	//set the ID of the station
	public void setId(String id) {
		this.id = id;
	}
	
	//get ID of station
	public String getId() {
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