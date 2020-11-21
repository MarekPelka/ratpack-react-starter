package pl.conexus.user;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import pl.conexus.foundation.ITransactionRepository;

import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

class UserRepository implements ITransactionRepository<User> {

    private SessionFactory sessionFactory;

    UserRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    Optional<User> getUserById(Integer userId) {
        try (Session session = sessionFactory.openSession()) {
            TypedQuery<User> query = session.createQuery(
                    "select u from User u where u.id = :id",
                    User.class).setParameter("id", userId);
            User u = query.getSingleResult();
            return Optional.of(u);
        } catch (NoResultException e) {
            return Optional.empty();
        }
    }

    User addUser(User user) {
        return saveSingleRow(user, sessionFactory);
    }

    //For debug
    List<User> getAllUsers() {
        Session session = sessionFactory.openSession();
        TypedQuery<User> query = session.createQuery(
                "from User u ",
                User.class);
        return query.getResultList();
    }
}
