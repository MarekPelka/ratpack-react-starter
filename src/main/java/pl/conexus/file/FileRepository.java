package pl.conexus.file;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.engine.jdbc.BlobProxy;
import pl.conexus.foundation.ITransactionRepository;

import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class FileRepository implements ITransactionRepository<File> {
    private SessionFactory sessionFactory;

    FileRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    Optional<File> getFileById(long fileId) {
        try (Session session = sessionFactory.openSession()) {
            TypedQuery<File> query = session.createQuery(
                    "select f from File f where f.id = :id",
                    File.class).setParameter("id", fileId);
            File p = query.getSingleResult();
            return Optional.of(p);
        } catch (NoResultException e) {
            return Optional.empty();
        }
    }

        List<File> getAllFiles() {
            Session session = sessionFactory.openSession();
            TypedQuery<File> query = session.createQuery(
                    "from File c",
                    File.class);
            return query.getResultList();
        }

    File addFile(File file) {
//        File file = new File();
//        Session session = null;
//        Transaction transaction = null;
//        try {
//            session = sessionFactory.openSession();
//            transaction = session.beginTransaction();
//            transaction.begin();
//
//
//            file.setName("Pizza image");
//            session.doWork(conn -> {
//                file.setImage(BlobProxy.generateProxy(getImage("pizza.jpg")));
//            });
//            session.save(file);
//            transaction.commit();
//
//            System.out.println("File is saved successfully.");
//
//        } catch (Exception e) {
//            if (transaction != null) {
//                System.out.println("Transaction is being rolled back.");
//                transaction.rollback();
//            }
//            e.printStackTrace();
//        } finally {
//            if (session != null) {
//                session.close();
//            }
//        }
        return file;
    }


    //TODO: to implement
    List<Optional<File>> getFilesByCompanyId(Integer companyId) {
//        try (Session session = sessionFactory.openSession()) {
//            TypedQuery<List<File>> query = session.cre(
//                    "select p from File p, Company c where p.id = c.id and c.id = :id",
//                    File.class).setParameter("id", companyId);
//            File p = query.getSingleResult();
//            return Optional.of(p);
//        } catch (NoResultException e) {
//            return Optional.empty();
//        }
        return null;
    }
}
