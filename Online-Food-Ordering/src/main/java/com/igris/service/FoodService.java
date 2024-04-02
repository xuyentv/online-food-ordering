package com.igris.service;

import com.igris.model.Category;
import com.igris.model.Food;
import com.igris.model.Restaurant;
import com.igris.request.CreateFoodRequest;

import java.util.List;


public interface FoodService {
    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);

    void deleteFood(Long foodId) throws Exception;

    public List<Food> getRestaurantFood(Long restaurantId,
                                        boolean isVegitarain,
                                        boolean isNonveg,
                                        boolean isSeasonal,
                                        String foodCategory);

    public List<Food> searchFood(String keyword);

    public Food findFoodById(Long foodId) throws  Exception;
    public Food updateAvailibiityStatus(Long foodId) throws Exception;

}
