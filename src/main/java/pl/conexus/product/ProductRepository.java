package pl.conexus.product;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import pl.conexus.foundation.ITransactionRepository;

import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

public class ProductRepository implements ITransactionRepository<Product> {
    private SessionFactory sessionFactory;

    ProductRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    Optional<Product> getProductById(Integer productId) {
        try (Session session = sessionFactory.openSession()) {
            TypedQuery<Product> query = session.createQuery(
                    "select p from Product p where p.id = :id",
                    Product.class).setParameter("id", productId);
            Product p = query.getSingleResult();
            return Optional.of(p);
        } catch (NoResultException e) {
            return Optional.empty();
        }
    }

    Product addProduct(Product product) {
        return saveSingleRow(product, sessionFactory);
    }

    List<Product> getAllProducts() {
        Session session = sessionFactory.openSession();
        TypedQuery<Product> query = session.createQuery(
                "from Product c",
                Product.class);
        return query.getResultList();
    }

    //TODO: to implement
    List<Optional<Product>> getProductsByCompanyId(Integer companyId) {
//        try (Session session = sessionFactory.openSession()) {
//            TypedQuery<List<Product>> query = session.cre(
//                    "select p from Product p, Company c where p.id = c.id and c.id = :id",
//                    Product.class).setParameter("id", companyId);
//            Product p = query.getSingleResult();
//            return Optional.of(p);
//        } catch (NoResultException e) {
//            return Optional.empty();
//        }
        return null;
    }
}
