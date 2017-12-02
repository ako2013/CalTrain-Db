package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface next_station_ofRepo extends CrudRepository<next_station_of,Long>{
	
	@Query(value = "SELECT * FROM next_station_of", nativeQuery = true)
	List<next_station_of> findAllNextStationOf();

	@Transactional
	@Modifying
	@Query(value = "DELETE FROM next_station_of WHERE station_id = :station_id AND next_station_id = :next_station_id")
	void deleteTrain(@Param("station_id") String station_id, @Param("next_station_id") String next_station_id);
}
