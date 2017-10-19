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

import cs157a.User;
import cs157a.UserRepo;

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
	
	@Autowired
	private UserRepo repo4;
	
	@RequestMapping(path="/check")
	public @ResponseBody String greet() {
		return "{\"message\":\"API service running!\"}";
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
	
	@GetMapping(path="/add_user")
	public @ResponseBody String addNewUser (@RequestParam String name, @RequestParam String password) {
		User n = new User();
		n.setName(name);
		n.setPass(password);
		repo4.save(n);
		return "User created Successful";
	}
	
	//This method gets username of password and check if exists in the database
	//ex: http://localhost:8080/api/user_validation?userName=xxxx&userPass=yyyy
	@GetMapping(path="/user_validation")
	public @ResponseBody String checkUser(@RequestParam String userName, @RequestParam String userPass) {
		try {
			if(repo4.findUser(userName,userPass) != null) return "{\"message\": 1}" ;
			else return "{\"message\": 0}";
		}catch(Exception e) {return e.toString();}
	}
	
	
	// GET ALL DATA PART
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
	
	@GetMapping(path="/all_user")
	public @ResponseBody List<User> getAllUsers(){
		return repo4.findAllUsers();
	}
	

}

