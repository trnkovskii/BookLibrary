package services;

import models.Book;
import models.dto.BookDto;
import models.enumerations.Category;
import models.exceptions.BookNotFoundException;

import java.util.List;
import java.util.Optional;

public interface BookService {

    List<Book> findAll();

    Optional<Book> findById(Long id);

    Optional<Book> findByName(String name);

    Optional<Book> save(String name, Category category, Integer availableCopies, Long authorId);

    Optional<Book> edit(Long id, String name, Category category, Integer availableCopies, Long authorId) throws BookNotFoundException;

    void deleteById(Long id);

    Optional<Book> save(BookDto bookDto);
    Optional<Book> save(Book b);

    Optional<Book> edit(Long id, BookDto bookDto);

    Optional<Book> markAsTaken(Long id);
}