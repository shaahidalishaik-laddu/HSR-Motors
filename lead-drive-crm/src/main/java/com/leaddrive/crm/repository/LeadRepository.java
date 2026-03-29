package com.leaddrive.crm.repository;

import com.leaddrive.crm.entity.Lead;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeadRepository extends JpaRepository<Lead, Long> {
}
