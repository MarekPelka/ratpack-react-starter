package pl.conexus.product;

public class ProductNotFoundException extends Exception {
    ProductNotFoundException(String message) {
        System.out.println(message);
    }
}
