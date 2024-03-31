package com.igris.request;

import com.igris.model.Address;
import com.igris.model.ContactInformation;
import lombok.Data;

import java.util.List;

@Data
public class CreateRestaurantRequest {
    private Long id;

    private String name;
    private String description;
    private String cuisineType;
    private Address address;
    private ContactInformation contactInformation;
    private String openingHour;
    private List<String> images;
}
