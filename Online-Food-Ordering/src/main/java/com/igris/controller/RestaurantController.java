package com.igris.controller;

import com.igris.model.Restaurant;
import com.igris.model.User;
import com.igris.service.RestaurantService;
import com.igris.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {
    @Autowired
    private RestaurantService restaurantService;
    @Autowired
    private UserService userService;

    @GetMapping("/search")
    public ResponseEntity<List<Restaurant>> searchRestaurant(
            @RequestHeader("Authorization") String jwt,
            @RequestParam String keyword
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Restaurant> listRestaurant = restaurantService.searchRestaurant(keyword);

        return new ResponseEntity<>(listRestaurant, HttpStatus.OK);

    }


    @GetMapping()
    public ResponseEntity<List<Restaurant>> getAll(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Restaurant> listRestaurant = restaurantService.getAllRestaurant();

        return new ResponseEntity<>(listRestaurant, HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurant> getAll(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Restaurant restaurant = restaurantService.findRestaurantById(id);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }



}
