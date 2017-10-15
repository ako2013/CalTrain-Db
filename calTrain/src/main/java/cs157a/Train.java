package cs157a;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Train {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private int capacity;
	
	//GETTER Methods
	public Integer getID() { return id;}
	public int getCapacity() { return capacity;}
	
	//SETTER Methods
	public void setCapacity(int num) { this.capacity = num;}

}
