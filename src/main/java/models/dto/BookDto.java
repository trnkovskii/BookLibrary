package models.dto;


import lombok.Data;
import models.enumerations.Category;

@Data
public class BookDto {

    private String name;

    private Category category;

    private Integer availableCopies;

    private Long author;

    public BookDto() {
    }

    public BookDto(String name, Category category, Integer availableCopies, Long author) {
        this.name = name;
        this.category = category;
        this.availableCopies = availableCopies;
        this.author = author;
    }
}
