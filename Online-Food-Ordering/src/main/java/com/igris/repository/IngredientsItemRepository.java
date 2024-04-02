package com.igris.repository;

import com.igris.model.IngredientsItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientsItemRepository extends JpaRepository<IngredientsItem, Long> {
}
