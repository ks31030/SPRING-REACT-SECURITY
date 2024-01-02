package com.kh.springChap2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kh.springChap2.model.Product;
import com.kh.springChap2.repository.ProductRepository;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:3000", allowCredentials="true")
public class ProductController {
	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping("/item")
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}

	@PostMapping("/add")
	public ResponseEntity<Product> createProduct(@RequestBody Product newProduct) {
		Product saveProduct = productRepository.save(newProduct);
		return ResponseEntity.ok(saveProduct);
	}
}
