package cs157a;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;

import cs157a.Station;
import cs157a.StationRepo;
import cs157a.Train;
import cs157a.TrainRepo;
import cs157a.User;
import cs157a.UserRepo;
import cs157a.Travels;
import cs157a.TravelsRepo;
import cs157a.Ticket;
import cs157a.TicketRepo;
import cs157a.Route;
import cs157a.RouteRepo;
import cs157a.Rides;
import cs157a.RidesRepo;
import cs157a.Purchases;
import cs157a.PurchasesRepo;

import cs157a.previous_station_of;
import cs157a.previous_station_ofRepo;
import cs157a.next_station_of;
import cs157a.next_station_ofRepo;
import cs157a.ends_at;
import cs157a.ends_atRepo;
import cs157a.starts_at;
import cs157a.starts_atRepo;

@Controller
@CrossOrigin
@RequestMapping(path="/api")
public class MainController {
	
	//REPOSITORIES
	@Autowired
	private StationRepo repoStation;
	@Autowired
	private TrainRepo repoTrain;
	@Autowired
	private RouteRepo repoRoute;
	@Autowired
	private UserRepo repoUser;
	@Autowired
	private TravelsRepo repoTravel;
	@Autowired
	private TicketRepo repoTicket;
	@Autowired
	private RidesRepo repoRide;
	@Autowired
	private PurchasesRepo repoPurchases;
	
	@Autowired
	private previous_station_ofRepo repoPrevStation;
	@Autowired
	private next_station_ofRepo repoNextStation;
	@Autowired
	private ends_atRepo repoEndsAt;
	@Autowired
	private starts_atRepo repoStartsAt;
	
	//===================================================================\\
	//===================================================================\\
	
	@RequestMapping(path="/check")
	public @ResponseBody String check() {
		return "{\"message\":\"API service running!\"}";
	}
	
	// API Mapping 
	
	@GetMapping(path="/add_station") // Map ONLY Get Requests
	public @ResponseBody String addNewStation (@RequestParam String name) {
		Station n = new Station();
		n.setName(name);
		repoStation.save(n);
		return "Station added succcessful!";
	}
	
	@GetMapping(path="/add_route") // Map ONLY Get Requests
	public @ResponseBody String addNewRoute (@RequestParam String id, @RequestParam int dist, @RequestParam int timeArr, @RequestParam int timeDept) {
		Route n = new Route();
		n.setId(id);
		n.setDistance(dist);
		n.setTimeArrival(timeArr);
		n.setTimeDept(timeDept);
		repoRoute.save(n);
		return "Route added succcessful!";
	}
	
	@GetMapping(path="/add_user")
	public @ResponseBody String addNewUser (@RequestParam String name, @RequestParam String password) {
		User n = new User();
		n.setName(name);
		n.setPass(password);
		repoUser.save(n);
		return "User created Successful";
	}
	
	//This method gets username of password and check if exists in the database
	//ex: http://localhost:8080/api/user_validation?userName=xxxx&userPass=yyyy
	@GetMapping(path="/user_validation")
	public @ResponseBody String checkUser(@RequestParam String userName, @RequestParam String userPass) {
		try {
			if(repoUser.findUser(userName,userPass) != null) return "{\"message\": 1}" ;
			else return "{\"message\": 0}";
		}catch(Exception e) {return e.toString();}
	}
	
	//===================================================================\\
	//===================================================================\\
	
	// GET ALL DATA PART \\
	@GetMapping(path="/all_station") //Get all stations
	public @ResponseBody List<Station> getAllStations(){
		return repoStation.findAllStation();
	}
	@GetMapping(path="/all_train") //Get all stations
	public @ResponseBody List<Train> getAllTrains(){
		return repoTrain.findAllTrain();
	}
	@GetMapping(path="/all_route") //Get all stations
	public @ResponseBody List<Route> getAllRoutes(){
		return repoRoute.findAllRoutes();
	}
	@GetMapping(path="/all_user")
	public @ResponseBody List<User> getAllUsers(){
		return repoUser.findAllUsers();
	}
	@GetMapping(path="/all_travels")
	public @ResponseBody List<Travels> getAllTravels(){
		return repoTravel.findAllTravels();
	}
	@GetMapping(path="/all_ticket")
	public @ResponseBody List<Ticket> getAllTickets(){
		return repoTicket.findAllTickets();
	}
	@GetMapping(path="/all_rides")
	public @ResponseBody List<Rides> getAllRides(){
		return repoRide.findAllRides();
	}
	@GetMapping(path="/all_purchases")
	public @ResponseBody List<Purchases> getAllPurchases(){
		return repoPurchases.findAllPurchases();
	}
	@GetMapping(path="/all_next_station_of")
	public @ResponseBody List<next_station_of> getAllNextStationOf(){
		return repoNextStation.findAllNextStationOf();
	}
	@GetMapping(path="/all_previous_station_of")
	public @ResponseBody List<previous_station_of> getAllPreviousStationOf(){
		return repoPrevStation.findAllPreviousStationOf();
	}
	@GetMapping(path="/all_starts_at")
	public @ResponseBody List<starts_at> getAllStartsAt(){
		return repoStartsAt.findAllStartsAt();
	}
	@GetMapping(path="/all_ends_at")
	public @ResponseBody List<ends_at> getAllEndsAt(){
		return repoEndsAt.findAllEndsAt();
	}
	
	//===================================================================\\
	//===================================================================\\
	
	//EDIT DATA\\
	
	// encoding 
	//1 = add
	//2 = delete
	//3 = update
	
	//code
	//1 = add (cap + name + id)
	//2 = delete (id)
	//3 = update name + cap (name + cap using id)
	//4 = change status (status)
	@GetMapping(path="/train") 
	public @ResponseBody String trainEdit (
			@RequestParam int code,
			@RequestParam(value = "cap",defaultValue="0") int cap,
			@RequestParam(value = "name",defaultValue="0") String name,
			@RequestParam(value = "id",defaultValue="0") String id,
			@RequestParam(value = "status",defaultValue="0") int status
			)
	{
		try {
			switch(code) {
			case 1: 
				Train n = new Train();
				n.setId(id);
				n.setName(name);
				n.setCapacity(cap);
				n.setStatus(status);
				repoTrain.save(n);
				return "{\"message\": 1}";
			case 2:
				repoTrain.deleteTrain(id);
				return "{\"message\": 1}";
			case 3:
				repoTrain.updateTrain(name, cap, id);
				return "{\"message\": 1}";
			case 4:
				repoTrain.updateTrain(status, id);
				return "{\"message\": 1}";
			}
		} catch(Exception e) {return e.toString();}
		return "{\"message\": 0}";
	}

}

