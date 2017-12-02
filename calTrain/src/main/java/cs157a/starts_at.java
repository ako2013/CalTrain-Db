package cs157a;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class starts_at {
	
	@Id
	private String route_id;
	private String station_id;
	
	//GETTER
	public String getRoute_id() {return route_id;}
	public String getStation_id() {return station_id;}
	
	//SETTER
	public void setRoute_id(String newRoute) {this.route_id = newRoute;}
	public void setStation_id(String newStation) {this.station_id = newStation;}

}
