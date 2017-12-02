package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface TrainRepo extends CrudRepository<Train,Long> {
	
	@Query(value = "SELECT * FROM train", nativeQuery = true)
	List<Train> findAllTrain();
	
	//update name + capacity based on given id 
	@Transactional
	@Modifying
	@Query(value = "UPDATE Train SET name = :name, capacity = :capacity WHERE id = :id")
	void updateTrain(@Param("name") String name, @Param("capacity") int capacity, @Param("id") String id);
	
	//update train's status based on id
	// 1 = active
	// 0 = down 
	@Transactional
	@Modifying
	@Query(value = "UPDATE Train SET status = :status WHERE id = :id")
	void updateTrain(@Param("status") int status, @Param("id") String id);
	
	@Transactional
	@Modifying
	@Query(value = "DELETE FROM Train WHERE id = :id")
	void deleteTrain(@Param("id") String id);
	

}
