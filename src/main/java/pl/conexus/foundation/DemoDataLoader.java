package pl.conexus.foundation;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import java.util.List;

public interface DemoDataLoader {
    // see hibernate.jdbc.batch_size
    int BATCH_SIZE = 20;

    void loadData();

    default void batchLoad(List<? extends Object> entities, SessionFactory sessionFactory) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();

        short batchCounter = 0;
        for (Object e : entities) {
            session.save(e);
            batchCounter++;
            if (batchCounter % BATCH_SIZE == 0) {
                batchCounter = 0;
                session.flush();
                session.clear();
            }
        }

        transaction.commit();
        session.close();
    }
}
