# Online Food Delivery Project

### Technology

- React
- Spring boot
- spring security
- role base access (ROLE_CUSTOMER, ROLE_RESTAURANT_OWNER)
- spring start mail
- jeson web token
- Mysql(Data base)
- Tailwind css
- Mui (css component library)
- Redux (State managment library)
- Axios
- strip payment gatway

### Tools

- intellij idea (spring boot)
- vs code (react)

### Models
#### User
    
	Long id;
	fullName;
	email;
	password;
	role;
	orders;
	favorites
	addresses 
	status;

#### Restaurant
    public class Restaurant {
        id;
        owner;
        name;
        description;
        cuisineType;
        address;
        contactInformation;
        openingHours;
        reviews;
        orders;
        numRating;
        images;
        registrationDate;
        open;
        foods;
    }
#### Food
    public class Food {
        id;
        name;
        description;
        price;
        foodCategory;
        images;
        available;
        restaurant;
        isVegetarian;
        isSeasonal;
        ingredients;
        creationDate;
    }
#### Food Category
    public class Category {
        id;
        name;
        restaurant;
    }

#### Ingredients
    public class IngredientCategory {
        id;
        name;
        restaurant;
        ingredients;
    }

    public class IngredientsItem {
        id;
        name;
        category;
        restaurant;
        inStock;
    }
#### Order
    public class Order {
        id;
        customer;
        restaurant;
        totalAmount;
        orderStatus;
        createdAt;
        deliveryAddress;
        items;
        payment;
        totalItem;
        totalPrice;
    }
#### OrderItem 
    public class OrderItem {
        id;
        food;
        quantity;
        totalPrice;
        ingredients;
    }
#### Cart
    public class Cart {
        id;
        customer;
        items;
        total;
    }   
#### Cart Item
    public class CartItem {
        id;
        cart;
        food;
        quantity;
        ingredients;
        totalPrice;
    }

##### Folder Stucture

    project_root/
    │
    ├── src/
    │   ├── controllers/        // Controllers handle request/response logic
    │   │   ├── itemController.js
    │   │   └── ...
    │   │
    │   ├── models/            // Database models/schema
    │   │   ├── itemModel.js
    │   │   └── ...
    │   │
    │   ├── routes/            // API routes
    │   │   ├── itemRoutes.js
    │   │   └── ...
    │   │
    │   ├── services/          // Business logic and data processing
    │   │   ├── itemService.js
    │   │   └── ...
    │   │
    │   └── app.js             // Entry point of the application
    │
    ├── .env                   // Environment variables
    ├── package.json           // Project dependencies and metadata
    └── ...