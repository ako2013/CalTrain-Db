package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface RidesRepo extends CrudRepository <Rides, Long>{
	
	@Query(value = "SELECT * FROM rides", nativeQuery = true)
	List<Rides> findAllRides();
	
	@Transactional
	@Modifying
	@Query(value = "DELETE FROM Rides WHERE userId = :userId")
	void deleteRide(@Param("userId") String userId);
	
	@Transactional
	@Modifying
	@Query(value = "UPDATE Rides SET trainId = :trainId WHERE userId = :userId")
	void updateRide(@Param("trainId") String trainId, @Param("userId") String userId);
	

}
