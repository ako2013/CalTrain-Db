package cs157a;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Train {
	
	@Id
	private String id;
	private int capacity;
	
	//GETTER Methods
	public String getID() { return id;}
	public int getCapacity() { return capacity;}
	
	//SETTER Methods
	public void setId(String id) { this.id = id;}
	public void setCapacity(int num) { this.capacity = num;}

}
