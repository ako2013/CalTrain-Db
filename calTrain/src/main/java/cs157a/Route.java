package cs157a;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Route {
	
	@Id
	private String id;
	private int distance;
	private int timeArrival;
	private int timeDept;
	
	//GETTER methods
	public String getid() { return id;}
	public int getDistance() { return distance;}
	public int getArrival() { return timeArrival;}
	public int getDept() { return timeDept;}
	
	//SETTER methods
	public void setId(String id) {this.id = id;}
	public void setDistance(int distance) {this.distance = distance;}
	public void setTimeArrival(int time) {this.timeArrival = time;}
	public void setTimeDept(int time) {this.timeDept = time;}

}