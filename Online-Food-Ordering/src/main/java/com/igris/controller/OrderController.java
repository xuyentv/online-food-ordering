package com.igris.controller;

import com.igris.model.Order;
import com.igris.model.User;
import com.igris.request.OrderRequest;
import com.igris.response.PaymentResponse;
import com.igris.service.OrderService;
import com.igris.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @PostMapping("/orders")
    public ResponseEntity<PaymentResponse> createOrder(
            @RequestBody OrderRequest req,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Order order = orderService.createOrder(req, user);
        PaymentResponse res = new PaymentResponse();
        res.setPayment_url("http://localhost:3000/payment/success/" + order.getId());
        return new ResponseEntity<>(res, HttpStatus.OK);

    }

    @GetMapping("/orders/user")
    public ResponseEntity<List<Order>> getOrderHistory(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Order> listOrders = orderService.getUserOrder(user.getId());
        return new ResponseEntity<>(listOrders, HttpStatus.OK);

    }
}
