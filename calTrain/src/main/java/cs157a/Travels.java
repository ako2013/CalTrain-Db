package cs157a;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Travels {
	
	private String trainId;
	private String stationId;
	
	//GETTER
	public String getTrainId() {return trainId;}
	public String getStationId() {return stationId;}
	
	//SETTER
	public void setTrainId(String newId) {this.trainId = newId;}
	public void setStationId(String newId) {this.stationId = newId;}

}
