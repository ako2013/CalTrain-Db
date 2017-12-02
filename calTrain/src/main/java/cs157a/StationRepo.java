package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import cs157a.Station;

public interface StationRepo extends CrudRepository<Station, Long> {
	
	@Query(value = "SELECT * FROM station", nativeQuery = true)
	List<Station> findAllStation();
	
	@Transactional
	@Modifying
	@Query(value = "DELETE FROM Station WHERE id = :id")
	void deleteStation(@Param("id") String id);
	
	//update name + capacity based on given id 
	@Transactional
	@Modifying
	@Query(value = "UPDATE Station SET name = :name WHERE id = :id")
	void updateStation(@Param("name") String name, @Param("id") String id);
		
	
}

