package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import cs157a.Station;

public interface StationRepo extends CrudRepository<Station, Long> {
	
	@Query(value = "SELECT * FROM station", nativeQuery = true)
	List<Station> findAllStation();
	
}

