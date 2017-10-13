package cs157a;

import org.springframework.data.repository.CrudRepository;

import cs157a.Station;

public interface StationRepo extends CrudRepository<Station, Long> {
}

