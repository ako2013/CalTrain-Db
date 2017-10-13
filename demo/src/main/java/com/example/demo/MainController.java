package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.Station;
import com.example.demo.StationRepo;

@Controller
@RequestMapping(path="/demo")
public class MainController {
	
	@Autowired
	private StationRepo repo;
	
	@RequestMapping(path="/api")
	public @ResponseBody String greet() {
		return "Hello there!!";
	}
	
	@GetMapping(path="/add") // Map ONLY Get Requests
	public @ResponseBody String addNewStation (@RequestParam String name) {
		Station n = new Station();
		n.setName(name);
		repo.save(n);
		return "Saved";
	}
	
	@GetMapping(path="/all") //Get all stations
	public @ResponseBody Iterable<Station> getAllStations(){
		return repo.findAll();
	}

}
