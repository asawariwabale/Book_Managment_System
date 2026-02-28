package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.BookRepository;
import com.model.Book;

@Service
public class BookServiceImplemention implements BookService {

	@Autowired
	private BookRepository bookRepo;
	
	@Override
	public Book addBook(Book b) {
		
		return bookRepo.save(b);
	}

	@Override
	public Book getOneBook(int id) {
		
		Optional<Book> optbook=bookRepo.findById(id);
		Book b=optbook.get();
		
		return b;
	}

	@Override
	public List<Book> getAllBook() {
		
		return bookRepo.findAll();
	}

	@Override
	public String deleteBook(int id) {
		if(bookRepo.existsById(id))
		{
			bookRepo.deleteById(id);
			return "book deleted";
		}
		return "book  not deleted";
	}

	@Override
	public Book updateBook(int id, Book book) {
		
		if(bookRepo.existsById(id))
		{
			book.setId(id);
		}
		return bookRepo.save(book);
	}
	
	

}
