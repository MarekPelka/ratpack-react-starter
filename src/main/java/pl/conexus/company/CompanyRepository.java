package pl.conexus.company;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

public class CompanyRepository {
    private SessionFactory sessionFactory;

    CompanyRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    Optional<Company> getCompanyById(Integer companyId) {
        Session session = sessionFactory.openSession();
        TypedQuery<Company> query = session.createQuery(
                "select c from Company c where c.id = :id",
                Company.class).setParameter("id", companyId);
        try {
            Company u = query.getSingleResult();
            session.close();
            return Optional.of(u);
        } catch (NoResultException e) {
            session.close();
            return Optional.empty();
        }
    }

    Company addCompany(Company company) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.save(company);
        transaction.commit();
        session.close();
        return company;
    }

    List<Company> getAllCompanies() {
        Session session = sessionFactory.openSession();
        TypedQuery<Company> query = session.createQuery(
                "from Company c",
                Company.class);
        return query.getResultList();
    }
}
