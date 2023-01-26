package jpasqurebox.squarebox.controller;

import jpasqurebox.squarebox.dto.*;
import jpasqurebox.squarebox.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/register/auth")
public class AuthController {
    @Autowired AuthService authService;
    @PostMapping("/signUp")
    public ResponseMember<?> signUp(@RequestBody SignUpDto requestBody) {
        ResponseMember<?> result = authService.signUp(requestBody);
        return result;
    }

    @PostMapping("/signIn")
    public ResponseMember<SignInResponse> signIn(@RequestBody SignInDto requestBody) {
        ResponseMember<SignInResponse> result = authService.signIn(requestBody);
        return result;
    }
}
