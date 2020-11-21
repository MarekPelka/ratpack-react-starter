package pl.conexus.product;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.hibernate.SessionFactory;
import pl.conexus.foundation.DemoDataLoader;

import java.io.InputStream;
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

//        try (InputStream in = Thread.currentThread().getContextClassLoader().getResourceAsStream("YourJsonFile")) {
//            //pass InputStream to JSON-Library, e.g. using Jackson
//            ObjectMapper mapper = new ObjectMapper();
//            Product product = mapper.readValue(in,
//                    Product.class);
//                products.add(product);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }


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
