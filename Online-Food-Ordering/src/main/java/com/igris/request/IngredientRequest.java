package com.igris.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IngredientRequest {
    private String name;
    private Long categoryId;
    private Long restaurantId;
}
