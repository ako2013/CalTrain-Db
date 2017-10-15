package cs157a;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Route {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String name;
	private int distance;
	private int timeArrival;
	private int timeDept;
	
	//GETTER methods
	public String getName() { return name;}
	public int getDistance() { return distance;}
	public int getArrival() { return timeArrival;}
	public int getDept() { return timeDept;}
	
	//SETTER methods
	public void setName(String name) {this.name = name;}
	public void setDistance(int distance) {this.distance = distance;}
	public void setTimeArrival(int time) {this.timeArrival = time;}
	public void setTimeDept(int time) {this.timeDept = time;}

}