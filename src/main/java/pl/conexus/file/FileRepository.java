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

    public Optional<File> getFileById(long fileId) {
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

        public List<File> getAllFiles() {
            Session session = sessionFactory.openSession();
            TypedQuery<File> query = session.createQuery(
                    "from File c",
                    File.class);
            return query.getResultList();
        }

    public File addFile(File file) {
        return saveSingleRow(file, sessionFactory);
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
