package pl.conexus.product.delivery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import pl.conexus.foundation.ITransactionRepository;

import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;
import java.util.Optional;

public class DeliveryRepository implements ITransactionRepository<Delivery> {
    private SessionFactory sessionFactory;

    public DeliveryRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public Delivery addDelivery(Delivery delivery) {
        return saveSingleRow(delivery, sessionFactory);
    }

    public Optional<Delivery> getDeliveryById(Integer deliveryId) {
        try (Session session = sessionFactory.openSession()) {
            TypedQuery<Delivery> query = session.createQuery(
                    "select c from Delivery c where c.id = :id",
                    Delivery.class).setParameter("id", deliveryId);
            Delivery u = query.getSingleResult();
            return Optional.of(u);
        } catch (NoResultException e) {
            return Optional.empty();
        }
    }
}
