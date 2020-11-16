package pl.conexus.user;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

class UserRepository {

    private SessionFactory sessionFactory;

    UserRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    Optional<User> getUserById(Integer userId) {
        Session session = sessionFactory.openSession();
        TypedQuery<User> query = session.createQuery(
                "select u from User u where u.id = :id",
                User.class).setParameter("id", userId);
        try {
            User u = query.getSingleResult();
            session.close();
            return Optional.of(u);
        } catch (NoResultException e) {
            return Optional.empty();
        }
    }

    User addUser(User user) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.save(user);
        transaction.commit();
        session.close();
        return user;
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
