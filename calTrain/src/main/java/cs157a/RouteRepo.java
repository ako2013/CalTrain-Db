package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

	public interface RouteRepo extends CrudRepository<Route, Long>{
		
		
		@Query(value = "SELECT * FROM route", nativeQuery = true)
		List<Route> findAllRoute();

}