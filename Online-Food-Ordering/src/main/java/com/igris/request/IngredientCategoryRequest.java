package com.igris.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IngredientCategoryRequest {
    private String name;
    private Long restaurantId;
}
