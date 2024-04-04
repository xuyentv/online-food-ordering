package com.igris.service;

import com.igris.model.Order;
import com.igris.model.User;
import com.igris.request.OrderRequest;
import org.aspectj.weaver.ast.Or;

import java.util.List;

public interface OrderService {
    public Order createOrder(OrderRequest req, User user) throws Exception;

    public Order updateOrder(Long orderId, String orderStatus) throws Exception;

    public void  cancelOrder(Long orderId) throws Exception;

    public List<Order> getUserOrder(Long userId) throws Exception;


    public  List<Order> getRestaurantsOrder(Long restaurantId, String orderStatus)throws Exception;

    public Order findOrderById(Long orderId) throws Exception;
}
