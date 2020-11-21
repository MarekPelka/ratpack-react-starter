package pl.conexus.foundation;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

//TODO: Implementacja INonTransaction
public interface ITransactionRepository<T extends Object> {

    default T saveSingleRow(T object, SessionFactory sessionFactory) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.save(object);
        transaction.commit();
        session.close();
        return object;
    }
}
