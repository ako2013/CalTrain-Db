package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface ends_atRepo extends CrudRepository<ends_at,Long>{
	
	@Query(value = "SELECT * FROM ends_at", nativeQuery = true)
	List<ends_at> findAllEndsAt();
	
	@Transactional
	@Modifying
	@Query(value = "DELETE FROM ends_at WHERE route_id = :route_id AND station_id = :station_id")
	void deleteEndsAt(@Param("route_id") String route_id, @Param("station_id") String station_id);
	

}
