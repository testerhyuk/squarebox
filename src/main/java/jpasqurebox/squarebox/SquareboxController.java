package jpasqurebox.squarebox;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SquareboxController {
    @GetMapping(value = {"", "search", "video", "/search/video", "/kr", "/register"})
    public String forward() {
        return "forward:/index.html";
    }
}
