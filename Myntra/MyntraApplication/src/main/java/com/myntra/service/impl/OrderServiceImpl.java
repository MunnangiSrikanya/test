
package com.myntra.service.impl;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.myntra.entity.*;
import com.myntra.repository.AddressRepository;
import com.myntra.repository.BagItemRepository;
import com.myntra.repository.OrderItemRepository;
import com.myntra.repository.OrderRepository;
import com.myntra.repository.RegistrationRepository;
import com.myntra.repository.ShoppingBagRepository;
import com.myntra.services.OrderService;
import com.myntra.services.ShoppingBagService;
@Service
public class OrderServiceImpl implements OrderService{
	@Autowired
	private RegistrationRepository userRepository;
	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private AddressRepository addressRepository;
	@Autowired
	private ShoppingBagService bagservice;
	@Autowired
	private BagItemRepository bagItemRepository;
	@Autowired
	private ShoppingBagRepository bagRepository;
	@Autowired
	private OrderItemRepository orderItemRepository;

	@Override
	public Order saveOrder(Integer user_id, Integer address_id, List<Integer> bagItemIds) {
		RegisterUser user=userRepository.findById(user_id).get();
		Address address=addressRepository.findById(address_id).get();
		Order order=new Order();
		order.setUser(user);
		order.setAddress(address);
		List<BagItem> items=bagItemRepository.findAllById(bagItemIds);
		ShoppingBag bag=bagRepository.findById(bagRepository.findBagIdByUserId(user_id)).get();
		order.setPrice(bag.getBag_price());
		for(BagItem item:items) {
			OrderItems orderItem=new OrderItems();
			orderItem.setProduct(item.getProduct());
			orderItem.setQuantity(item.getQuantity());
			orderItem.setOrder(order);
			orderItem.setOrderStatus("Ordered");
			orderItem.setExpected_Delivery(Date.valueOf(LocalDate.now().plusDays(7)));
			orderItem.setOrder_date(Date.valueOf(LocalDate.now()));
			System.out.println(orderItem.getOrderStatus());
			order.getOrderitems().add(orderItem);
		}
		for(Integer b:bagItemIds) {
			bagservice.delete(b);
		}
		
		return orderRepository.save(order);
	}

	@Override
	public List<OrderItems> getOrders(Integer user_id) {
		List<Order> orders=orderRepository.getOrder(user_id);
		List<OrderItems> items=new ArrayList<>();
		for(Order o:orders) {
			List<OrderItems> orderItems=orderItemRepository.getOrderItemd(o.getOrder_id());
			items.addAll(orderItems);
		}
		
		return items;
	}

	@Override
	public List<OrderItems> getOrdersByOrderId(Integer order_id) {
		List<OrderItems> orderItems =orderItemRepository.getOrderItemd(order_id);
		return orderItems;
	}

	@Override
	public OrderItems initiateReturn(Integer order_item_id) {
		OrderItems item=orderItemRepository.findById(order_item_id).get();
		item.setOrderStatus("Return Initiated");
		item.setOrder_date(Date.valueOf(LocalDate.now()));
		item.setExpected_Delivery(null);
		return orderItemRepository.save(item);
		
	}

	@Override
	public OrderItems initiateExchange(Integer order_item_id) {
		OrderItems item=orderItemRepository.findById(order_item_id).get();
		item.setOrderStatus("Exchange Initiated");
		item.setOrder_date(Date.valueOf(LocalDate.now()));
		item.setExpected_Delivery(null);
		return orderItemRepository.save(item);
	}

	@Override
	public OrderItems cancelOrder(Integer order_item_id) {
		OrderItems item=orderItemRepository.findById(order_item_id).get();
		item.setOrderStatus("Cancelled");
		item.setOrder_date(Date.valueOf(LocalDate.now()));
		item.setExpected_Delivery(null);
		return orderItemRepository.save(item);
	}

	@Override
	@Scheduled(cron = "0 4 13 * * ?")
	public void delivered() {
		List<OrderItems> items=orderItemRepository.findAll();
		for(OrderItems i:items) {
			OrderItems item=orderItemRepository.findById(i.getItem_id()).get();
			if(item.getExpected_Delivery()!=null)
			{
				if(item.getExpected_Delivery().before(Date.valueOf(LocalDate.now())) ) {
			
				item.setOrderStatus("Delivered");
				item.setOrder_date(item.getExpected_Delivery());
				item.setExpected_Delivery(null);
				}
			}
				System.out.println("Scheduled method executed.");
				orderItemRepository.save(item);
		}
		
		
	}

	@Override
	public OrderItems getById(Integer id) {
		OrderItems item=orderItemRepository.findById(id).get();
		return item;
	}
	
}
