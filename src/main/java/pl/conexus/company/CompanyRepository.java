package pl.conexus.company;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import pl.conexus.foundation.ITransactionRepository;

import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

public class CompanyRepository implements ITransactionRepository<Company> {
    private SessionFactory sessionFactory;

    CompanyRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    Optional<Company> getCompanyById(Integer companyId) {
        try (Session session = sessionFactory.openSession()) {
            TypedQuery<Company> query = session.createQuery(
                    "select c from Company c where c.id = :id",
                    Company.class).setParameter("id", companyId);
            Company u = query.getSingleResult();
            return Optional.of(u);
        } catch (NoResultException e) {
            return Optional.empty();
        }
    }

    Company addCompany(Company company) {
        return saveSingleRow(company, sessionFactory);
    }

    List<Company> getAllCompanies() {
        Session session = sessionFactory.openSession();
        TypedQuery<Company> query = session.createQuery(
                "from Company c",
                Company.class);
        return query.getResultList();
    }
}
