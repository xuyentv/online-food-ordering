package com.igris.repository;

import com.igris.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    @Query("SELECT r from Restaurant r WHERE lower(r.name) LIKE lower(concat('%', : query, '%') ) or lower(r.cuisineType) LIKE lower(concat('%', :query,'%') ) ")
    List<Restaurant> findSearchQuery(String query);

    Restaurant findByOwnerId(Long userId);


}
