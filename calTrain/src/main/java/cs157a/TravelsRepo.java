package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface TravelsRepo extends CrudRepository<Travels,Long>{
	
	@Query(value = "SELECT * FROM travels", nativeQuery = true)
	List<Travels> findAllTravels();
	
	@Transactional
	@Modifying
	@Query(value = "DELETE FROM Travels WHERE trainId = :trainId")
	void deleteTravels(@Param("trainId") String trainId);
	
	@Transactional
	@Modifying
	@Query(value = "UPDATE Travels SET routeId = :routeId WHERE trainId = :trainId")
	void updateTravels(@Param("routeId") String routeId, @Param("trainId") String trainId);

}
