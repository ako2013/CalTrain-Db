package cs157a;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;

import cs157a.Station;
import cs157a.StationRepo;

import cs157a.Train;
import cs157a.TrainRepo;

@Controller
@RequestMapping(path="/api")
public class MainController {
	
	//@PersistenceContext	
	//private EntityManagerFactory entityManagerFactory;
	
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
	
	// 
	@GetMapping(path="/add_station") // Map ONLY Get Requests
	public @ResponseBody String addNewStation (@RequestParam String name) {
		Station n = new Station();
		n.setName(name);
		repo.save(n);
		return "Station added succcessful!";
	}
	
	@GetMapping(path="/add_train") // Map ONLY Get Requests
	public @ResponseBody String addNewTrain (@RequestParam int cap) {
		Train n = new Train();
		n.setCapacity(cap);
		repo2.save(n);
		return "Train added succcessful!";
	}
	
	@GetMapping(path="/add_route") // Map ONLY Get Requests
	public @ResponseBody String addNewRoute (@RequestParam String name, @RequestParam int dist, @RequestParam int timeArr, @RequestParam int timeDept) {
		Route n = new Route();
		n.setName(name);
		n.setDistance(dist);
		n.setTimeArrival(timeArr);
		n.setTimeDept(timeDept);
		repo3.save(n);
		return "Route added succcessful!";
	}
	
	@GetMapping(path="/all_station") //Get all stations
	public @ResponseBody List<Station> getAllStations(){
		return repo.findAllStation();
	}
	
	@GetMapping(path="/all_train") //Get all stations
	public @ResponseBody List<Train> getAllTrains(){
		return repo2.findAllTrain();
	}
	
	@GetMapping(path="/all_route") //Get all stations
	public @ResponseBody List<Route> getAllRoutes(){
		return repo3.findAllRoute();
	}
	

}

