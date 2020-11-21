package pl.conexus.product;

import org.hibernate.SessionFactory;
import pl.conexus.foundation.DemoDataLoader;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class ProductDemoDataLoader implements DemoDataLoader {
    private SessionFactory sessionFactory;

    ProductDemoDataLoader(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public void loadData() {
        batchLoad(getDemoCompanies(), sessionFactory);
    }

    private List<Product> getDemoCompanies() {
        List<Product> products = new ArrayList<>();

        for (int i = 0; i < 41; i++) {
            Product product = new Product();
            product.setId(i);
            product.setName("Company number: " + i);
            product.setPrice(new BigDecimal(i + 50));
            product.setAmount(i);
            product.setDescription("Company description number: " + i);
            products.add(product);
        }

        return products;
    }
}
