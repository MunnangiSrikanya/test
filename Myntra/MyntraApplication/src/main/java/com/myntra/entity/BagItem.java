package com.myntra.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class BagItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer bagItem_id;
	private Integer quantity;
	@ManyToOne
	@JoinColumn(name="shoppingbag_id")
	private ShoppingBag bag;
	@ManyToOne
	@JoinColumn(name="product_id")
	private Product product;
	public Integer getBagItem_id() {
		return bagItem_id;
	}
	public void setBagItem_id(Integer bagItem_id) {
		this.bagItem_id = bagItem_id;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public ShoppingBag getBag() {
		return bag;
	}
	public void setBag(ShoppingBag bag) {
		this.bag = bag;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	
//	@Override
//	public String toString() {
//		return "BagItem [bagItem_id=" + bagItem_id + ", quantity=" + quantity + ", bag=" + bag + ", product=" + product
//				+ "]";
//	}
//	public BagItem(Integer bagItem_id, Integer quantity, ShoppingBag bag, Product product) {
//		super();
//		this.bagItem_id = bagItem_id;
//		this.quantity = quantity;
//		this.bag = bag;
//		this.product = product;
//	}
	
	
}
