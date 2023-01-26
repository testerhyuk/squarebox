package jpasqurebox.squarebox.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor(staticName = "set")
public class ResponseMember<D> {
    private boolean result;
    private String message;
    private D data;

    public static <D> ResponseMember<D> setSuccess(String message, D data) {
        return ResponseMember.set(true, message, data);
    }

    public static <D> ResponseMember<D> setFailed(String message) {
        return ResponseMember.set(false, message, null);
    }
}
