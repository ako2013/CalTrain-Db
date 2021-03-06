package cs157a;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Train {
	
	@Id
	private String id;
	private int capacity;
	private String name;
	private int status;
	
	//GETTER Methods
	public String getID() { return id;}
	public int getCapacity() { return capacity;}
	public String getName() { return name; }
	public int getStatus() { return status; }
	
	//SETTER Methods
	public void setId(String id) { this.id = id;}
	public void setCapacity(int num) { this.capacity = num;}
	public void setName(String name) { this.name = name; }
	public void setStatus(int num) { this.status = num; }

}
