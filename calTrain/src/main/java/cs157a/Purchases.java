package cs157a;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Purchases {
	
	@Id 
	private String userId;
	private String ticketId;
	private String date;
	
	//GETTER
	public String getUserId() {return userId;}
	public String getTicketId() {return ticketId;}
	public String getDate() {return date;}
	
	//SETTER
	public void setUserId (String newId) { this.userId = newId;} 
	public void setTicketId (String newId) {this.ticketId = newId;}
	public void setDate(String date) {this.date = date;}
	
}

