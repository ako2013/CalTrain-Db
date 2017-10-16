package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface TrainRepo extends CrudRepository<Train,Long> {
	
	@Query(value = "SELECT * FROM train", nativeQuery = true)
	List<Train> findAllTrain();

}
