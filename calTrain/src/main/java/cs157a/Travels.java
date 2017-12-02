package cs157a;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Travels {
	
	@Id
	private String trainId;
	private String routeId;
	
	//GETTER
	public String getTrainId() {return trainId;}
	public String getRouteId() {return routeId;}
	
	//SETTER
	public void setTrainId(String newId) {this.trainId = newId;}
	public void setRouteId(String newId) {this.routeId = newId;}

}
