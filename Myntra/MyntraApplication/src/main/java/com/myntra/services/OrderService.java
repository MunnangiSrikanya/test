package com.myntra.services;

import java.util.List;

import com.myntra.entity.Order;
import com.myntra.entity.OrderItems;

public interface OrderService {
	
	public Order saveOrder(Integer user_id,Integer address_id,List<Integer> bagItemIds);
	public List<OrderItems> getOrders(Integer user_id);
	public List<OrderItems> getOrdersByOrderId(Integer order_id);
	public OrderItems initiateReturn(Integer order_item_id);
	public OrderItems initiateExchange(Integer order_item_id);
	public OrderItems cancelOrder(Integer order_item_id);
	public void delivered();
	public OrderItems getById(Integer id);
}
