package cs157a;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Ticket {
	
	@Id
	private String id;
	private double price;
	
	//GETTER
	public String getId() { return id; }
	public double getPrice() { return price; }
	
	//SETTER
	public void setId (String newId) { this.id = newId; }
	public void setPrice (double newPrice) { this.price = newPrice; }

}
