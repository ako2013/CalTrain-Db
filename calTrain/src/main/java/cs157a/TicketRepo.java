package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface TicketRepo extends CrudRepository <Ticket, Long> {

	@Query(value = "SELECT * FROM ticket", nativeQuery = true)
	List<Ticket> findAllTicket();
}
