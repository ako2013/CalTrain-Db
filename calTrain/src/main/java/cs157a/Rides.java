package cs157a;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Rides {
	
	@Id
	private String userId;
	private String trainId;
	
	//GETTER
	public String getUserId() {return userId;}
	public String getTrainId() {return trainId;}
	
	//SETTER
	public void setUserId(String newId) {this.userId = newId;}
	public void setTrainId(String newId) {this.trainId = newId;}

}
