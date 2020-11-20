package pl.conexus.company;

public class CompanyNotFoundException extends Exception {
    CompanyNotFoundException(String s) {
        System.out.println(s);
    }
}
