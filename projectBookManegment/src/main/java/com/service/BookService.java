package com.service;

import java.util.List;

import com.model.Book;



public interface BookService {
	
	public Book addBook(Book b);
	
	public Book getOneBook(int id);
	
	public List<Book> getAllBook();
	
	 public String deleteBook(int id);
	 
	 public Book updateBook(int id,Book book);
	
	

}
