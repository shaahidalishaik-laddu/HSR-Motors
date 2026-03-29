package com.leaddrive.crm.repository;

import com.leaddrive.crm.entity.LeadActivity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<LeadActivity, Long> {
}
