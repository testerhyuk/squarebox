package jpasqurebox.squarebox.dto;

import jpasqurebox.squarebox.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignInResponse {
    private String token;
    private int exprTime;
    private Member member;
}
