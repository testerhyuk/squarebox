package jpasqurebox.squarebox.entity;

import jpasqurebox.squarebox.dto.SignUpDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "member")
@NoArgsConstructor
@Getter @Setter
@Table(name = "member")
public class Member {
    @Id
    private String userEmail;
    private String userPassword;

    public Member(SignUpDto dto) {
        this.userEmail = dto.getUserEmail();
        this.userPassword = dto.getUserPassword();
    }
}
