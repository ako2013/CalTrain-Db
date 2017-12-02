package cs157a;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class previous_station_of {
	
	@Id 
	private String station_id;
	private String previous_station_id;
	
	//GETTER
	public String getStation_id() {return station_id;}
	public String getPrevious_station_id() {return previous_station_id;}
	
	//SETTER
	public void setStation_id(String id) {this.station_id = id;}
	public void setPrevious_station_id(String id) {this.previous_station_id = id;}

}
