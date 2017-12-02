package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface RidesRepo extends CrudRepository <Rides, Long>{
	
	@Query(value = "SELECT * FROM train", nativeQuery = true)
	List<Rides> findAllRides();
	
	@Transactional
	@Modifying
	@Query(value = "DELETE FROM Rides WHERE id = :id")
	void deleteRide(@Param("id") String id);
	
	@Transactional
	@Modifying
	@Query(value = "UPDATE Rides SET trainId = :trainId WHERE userId = :userId")
	void updateRide(@Param("trainId") int trainId, @Param("userId") String userId);
	

}
