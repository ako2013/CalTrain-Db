package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface PurchasesRepo extends CrudRepository <Purchases, Long>{
	
	@Query(value = "SELECT * FROM purchases", nativeQuery = true)
	List<Purchases> findAllPurchases();
	
	@Transactional
	@Modifying
	@Query(value = "DELETE FROM Purchases WHERE ticketId = :ticketId")
	void deletePurchase(@Param("ticketId") String ticketId);
	
	@Transactional
	@Modifying
	@Query(value = "UPDATE Purchases SET userId = :userId, ticketId = :ticketId WHERE ticketId = :ticketId")
	void updatePurchase(@Param("userId") String userId, @Param("ticketId") String ticketId);
	

}
