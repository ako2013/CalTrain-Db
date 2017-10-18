package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepo extends CrudRepository<User, Long>{
	
	@Query(value = "SELECT u FROM User u WHERE u.userName = :userName AND u.userPass = :userPass")
	User findUser(@Param("userName") String userName,@Param("userPass") String userPass);
	
	@Query(value = "SELECT * FROM user", nativeQuery = true)
	List<User> findAllUsers();

}
