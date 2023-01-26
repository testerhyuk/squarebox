package jpasqurebox.squarebox.service;

import jpasqurebox.squarebox.dto.ResponseMember;
import jpasqurebox.squarebox.dto.SignInDto;
import jpasqurebox.squarebox.dto.SignInResponse;
import jpasqurebox.squarebox.dto.SignUpDto;
import jpasqurebox.squarebox.entity.Member;
import jpasqurebox.squarebox.repository.MemberRepository;
import jpasqurebox.squarebox.security.TokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired MemberRepository memberRepository;
    @Autowired TokenProvider tokenProvider;

    public ResponseMember<?> signUp(SignUpDto dto) {
        String userEmail = dto.getUserEmail();
        String userPassword = dto.getUserPassword();
        String userPasswordCheck = dto.getUserPasswordCheck();

        // email 중복 확인
        try {
            if(memberRepository.existsById(userEmail)){
                return ResponseMember.setFailed("Email exists");
            };
        } catch (Exception e) {
            return ResponseMember.setFailed("Database Error");
        }

        // 비밀번호 확인
        if(!userPassword.equals(userPasswordCheck))
            return ResponseMember.setFailed("password does not matched");

        Member member = new Member(dto);

        try {
            memberRepository.save(member);
        } catch (Exception e) {
            return ResponseMember.setFailed("Database Error when save data");
        }

        return ResponseMember.setSuccess("SignUp Success", null);
    }

    public ResponseMember<SignInResponse> signIn(SignInDto dto) {
        String userEmail = dto.getUserEmail();
        String userPassword = dto.getUserPassword();

        try {
            boolean existed = memberRepository.existsByUserEmailAndUserPassword(userEmail, userPassword);
            if (!existed)
                return ResponseMember.setFailed("Sign in Information does not Match");
        } catch (Exception e) {
            return ResponseMember.setFailed("Database Error");
        }

        Member member = null;

        try {
            member = memberRepository.findById(userEmail).get();
        } catch (Exception e) {
            return ResponseMember.setFailed("Database Error");
        }

        member.setUserPassword("");

        String token = tokenProvider.create(userEmail);
        int exprTime = 3600000;

        SignInResponse signInResponse = new SignInResponse(token, exprTime, member);
        return ResponseMember.setSuccess("Sign in Success", signInResponse);

    }
}
