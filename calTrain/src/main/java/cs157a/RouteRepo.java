package cs157a;

import org.springframework.data.repository.CrudRepository;

public class RouteRepo {
	
	public interface StationRepo extends CrudRepository<Route, Long>{
		
	}

}