package com.kh.springChap2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kh.springChap2.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
