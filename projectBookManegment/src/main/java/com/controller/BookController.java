package com.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.Book;
import com.service.BookService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BookController {
	
	@Autowired
	private BookService service;
	
	 /*@PostMapping("/add")
	public Book addBook(@RequestBody Book b)
	{
	 Book book=service.addBook(b);
	 return book;
	}*/
	
	
	
	
	 
	 @PostMapping("/add")
	 public ResponseEntity<Book> addBook(@RequestBody Book b)
		{
		 Book book=service.addBook(b);
		 return ResponseEntity.status(HttpStatus.CREATED).header("add","adding record").body(book);
		 
		}
	 
	 @GetMapping("/getOne/{id}")
	   public ResponseEntity<Book> getOneBook(@PathVariable int id) {
		 
		Book b=  service.getOneBook(id);
		
        return ResponseEntity.status(HttpStatus.OK).header("get","get one record").body(b);

	 }

	 
	/* @GetMapping("/getOne/{id}")
	 public ResponseEntity<Book> addBook(@RequestBody Book b)
		{
		 Book book=service.addBook(b);
		 return ResponseEntity.status(HttpStatus.CREATED).header("add","adding record").body(book);
		 
		}*/
	 
	 @GetMapping("/getAll")
	 
		 public  ResponseEntity <List<Book>> getAllBook(){
			List<Book> b=service.getAllBook();
			
	         return ResponseEntity.status(HttpStatus.OK).header("get","get one record").body(b);
		 }
	 
	 @DeleteMapping("/delete/{id}")
	 public ResponseEntity<String> deleteBook(@PathVariable int id)
	 {
		 
		 String msg=service.deleteBook(id);
		 
		 return ResponseEntity.status(HttpStatus.OK).body(msg);
	 }
	 
	 @PutMapping("/update/{id}")
	    public ResponseEntity<Book> updateBook(@PathVariable int id,@RequestBody Book b) {
	
		 Book book=service.updateBook(id,b );
		 
		 return ResponseEntity.status(HttpStatus.OK).body(b);
	 }
	 
}

	 

