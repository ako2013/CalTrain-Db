package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface previous_station_ofRepo extends CrudRepository<previous_station_of,Long>{
	
	@Query(value = "SELECT * FROM previous_station_of", nativeQuery = true)
	List<previous_station_of> findAllPreviousStationOf();

	@Transactional
	@Modifying
	@Query(value = "DELETE FROM previous_station_of WHERE station_id = :station_id AND previous_station_id = :previous_station_id")
	void deleteStation(@Param("station_id") String station_id, @Param("previous_station_id") String previous_station_id);

}
