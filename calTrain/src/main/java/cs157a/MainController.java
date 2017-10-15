package cs157a;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;

import cs157a.Station;
import cs157a.StationRepo;

import cs157a.Train;
import cs157a.TrainRepo;

@Controller
@RequestMapping(path="/api")
public class MainController {
	
	@PersistenceContext	
	private EntityManagerFactory entityManagerFactory;
	
	@Autowired
	private StationRepo repo;
	
	@Autowired
	private TrainRepo repo2;
	
	@Autowired
	private RouteRepo repo3;
	
	@RequestMapping(path="/check")
	public @ResponseBody String greet() {
		return "API service running!";
	}
	
	
	// API Mapping 
	@GetMapping(path="/addStation") // Map ONLY Get Requests
	public @ResponseBody String addNewStation (@RequestParam String name) {
		Station n = new Station();
		n.setName(name);
		repo.save(n);
		return "Station added succcessful!";
	}
	
	@GetMapping(path="/addTrain") // Map ONLY Get Requests
	public @ResponseBody String addNewTrain (@RequestParam int cap) {
		Train n = new Train();
		n.setCapacity(cap);
		repo2.save(n);
		return "Train added succcessful!";
	}
	
	@GetMapping(path="/addTrain") // Map ONLY Get Requests
	public @ResponseBody String addNewRoute (@RequestParam String name, @RequestParam int dist, @RequestParam int timeArr, @RequestParam int timeDept) {
		Route n = new Route();
		n.setName(name);
		n.setDistance(dist);
		n.setTimeArrival(timeArr);
		n.setTimeDept(timeDept);
		repo3.save(n);
		return "Train added succcessful!";
	}
	
	@GetMapping(path="/all") //Get all stations
	public @ResponseBody Iterable<Station> getAllStations(){
		return repo.findAll();
		//String hql = "FROM station";
		//return (List<Station>)entityManager.createQuery(hql).getResultList();
	}

}

