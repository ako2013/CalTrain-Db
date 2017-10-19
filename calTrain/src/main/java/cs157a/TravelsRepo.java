package cs157a;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface TravelsRepo extends CrudRepository<Travels,Long>{

}
