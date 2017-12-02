package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface starts_atRepo extends CrudRepository<starts_at,Long>{
	
	@Query(value = "SELECT * FROM starts_at", nativeQuery = true)
	List<starts_at> findAllStartsAt();
	
	@Transactional
	@Modifying
	@Query(value = "DELETE FROM starts_at WHERE route_id = :route_id AND station_id = :station_id")
	void deleteStartsAt(@Param("route_id") String route_id, @Param("station_id") String station_id);
	

}
