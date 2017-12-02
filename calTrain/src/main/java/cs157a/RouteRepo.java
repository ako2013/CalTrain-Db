package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

	public interface RouteRepo extends CrudRepository<Route, Long>{
		
		
		@Query(value = "SELECT * FROM route", nativeQuery = true)
		List<Route> findAllRoutes();
		
		@Transactional
		@Modifying
		@Query(value = "DELETE FROM Route WHERE id = :id")
		void deleteRoute(@Param("id") String id);
		
		@Transactional
		@Modifying
		@Query(value = "UPDATE Route SET distance = :distance, timeArrival = :timeArrival, timeDept = :timeDept WHERE id = :id")
		void updateRoute(@Param("distance") int distance, @Param("timeArrival") int timeArrival,@Param("timeDept") int timeDept, @Param("id") String id);
}