package pl.conexus.company;

import org.hibernate.SessionFactory;
import pl.conexus.foundation.DemoDataLoader;
import pl.conexus.product.delivery.Delivery;
import pl.conexus.product.delivery.DeliveryType;

import java.util.ArrayList;
import java.util.List;

public class CompanyDemoDataLoader implements DemoDataLoader {

    private SessionFactory sessionFactory;

    CompanyDemoDataLoader(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public void loadData() {
        batchLoad(getDemoCompanies(), sessionFactory);
    }

    private List<Company> getDemoCompanies() {
        List<Company> companies = new ArrayList<>();

        for (int i = 0; i < 21; i++) {
            Company company = new Company();
            company.setId(i);
            company.setName("Marek" + i);
            company.setLastname("Markowiak" + i);
            company.setPhone("6677888" + i);
            company.setEmail("marek.markowiak" + i + "@gmail.com");
            company.setNip(1122445456 + i);
            company.setRegon(123123123 + i);
            company.setSite("marek-markowiak" + i + ".com.pl");
            company.setAddress("Aleje Jerozolimskie " + i);
            company.setDescription("Bardzo powazna firma numer " + i);
            company.setBankAccount("08978897000011119067543212");
            company.setCompany("Firma Markownikowa " + i);
            company.setSpecialOffer("Specjalna oferta " + i);
            company.setOffer("Niespecjalna oferta " + i);
            companies.add(company);
        }

        return companies;
    }
}
