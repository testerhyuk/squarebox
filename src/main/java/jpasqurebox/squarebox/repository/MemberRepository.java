package jpasqurebox.squarebox.repository;

import jpasqurebox.squarebox.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, String> {
    boolean existsByUserEmailAndUserPassword(String userEmail, String userPassword);
}
