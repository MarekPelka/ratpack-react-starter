package pl.conexus.user;

public class UserNotFoundException extends Exception {
    UserNotFoundException(String message) {
        System.out.println(message);
    }
}
