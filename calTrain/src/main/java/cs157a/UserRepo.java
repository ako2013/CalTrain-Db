package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface UserRepo extends CrudRepository<User, Long>{
	
	@Query(value = "SELECT u FROM User u WHERE u.userName = :userName AND u.userPass = :userPass")
	User findUser(@Param("userName") String userName,@Param("userPass") String userPass);
	
	@Query(value = "SELECT * FROM user", nativeQuery = true)
	List<User> findAllUsers();
	
	@Transactional
	@Modifying
	@Query(value = "DELETE FROM User WHERE id = :id")
	void deleteUser(@Param("id") Integer id);
	
	
	//change password
	@Transactional
	@Modifying
	@Query(value = "UPDATE User SET userPass = :userPass WHERE id = :id")
	void updateUser(@Param("userPass") String userPass, @Param("id") Integer id);

}
