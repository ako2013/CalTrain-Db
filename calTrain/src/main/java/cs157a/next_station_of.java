package cs157a;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class next_station_of {
	
	@Id 
	private String station_id;
	private String next_station_id;
	
	//GETTER
	public String getStation_id() {return station_id;}
	public String getNext_station_id() {return next_station_id;}
	
	//SETTER
	public void setStation_id(String id) {this.station_id = id;}
	public void setNext_station_id(String id) {this.next_station_id = id;}
		
}
