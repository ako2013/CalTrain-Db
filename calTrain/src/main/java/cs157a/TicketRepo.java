package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface TicketRepo extends CrudRepository <Ticket, Long> {

	@Query(value = "SELECT * FROM ticket", nativeQuery = true)
	List<Ticket> findAllTickets();
	
	@Transactional
	@Modifying
	@Query(value = "DELETE FROM Ticket WHERE id = :id")
	void deleteTicket(@Param("id") String id);
	
	@Transactional
	@Modifying
	@Query(value = "UPDATE Ticket SET price = :price WHERE id = :id")
	void updateTicket(@Param("price") double price, @Param("id") String id);
}
