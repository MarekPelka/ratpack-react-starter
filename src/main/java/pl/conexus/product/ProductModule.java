package pl.conexus.product;

import org.hibernate.SessionFactory;

public class ProductModule {

    private SessionFactory sessionFactory;

    public ProductModule(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    //TODO check pl.conexus.user and fill with Repository, Service, Handlers etc
}
