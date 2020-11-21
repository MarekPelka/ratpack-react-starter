package pl.conexus.company;

import org.hibernate.SessionFactory;
import pl.conexus.foundation.DemoDataLoader;
import pl.conexus.product.delivery.DeliveryRepository;
import ratpack.func.Action;
import ratpack.handling.Chain;

import static ratpack.jackson.Jackson.fromJson;
import static ratpack.jackson.Jackson.json;

public class CompanyModule {
    private SessionFactory sessionFactory;

    public CompanyModule(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public DemoDataLoader companyDemoDataLoader() {
        return new CompanyDemoDataLoader(this.sessionFactory);
    }

    public Action<Chain> companyApi() {
        final CompanyService companyService = companyService();

        return apiChain -> apiChain
                .prefix("company", getCompany(companyService))
                .prefix("company", getAllCompanies(companyService))
                .prefix("company", addCompany(companyService));

    }

    CompanyService companyService() {
        return new CompanyService(companyRepository());
    }

    CompanyRepository companyRepository() {
        return new CompanyRepository(sessionFactory);
    }

    DeliveryRepository deliveryRepository() {
        return new DeliveryRepository(sessionFactory);
    }

    //get company endpoint TEST: http://localhost:5050/api/company/get?id=2
    private Action<Chain> getCompany(CompanyService companyService) {
        return chain -> chain
                .get("get", ctx -> ctx.render(
                        json(companyService.getCompany(Integer.valueOf(ctx.getRequest().getQueryParams().get("id"))))
                ));

    }

    //get all companies endpoint TEST: http://localhost:5050/api/company/all
    private Action<Chain> getAllCompanies(CompanyService companyService) {
        return chain -> chain
                .get("all", ctx -> ctx.render(
                        json(companyService.getAllCompanies())
                ));

    }

    //post user endpoint TEST: http://localhost:5050/api/company/add
    private Action<Chain> addCompany(CompanyService companyService) {
        return chain -> chain
                .post("add", ctx -> ctx.parse(fromJson(CompanyDTO.class))
                        .then(u -> ctx.render(json(companyService.addCompany(u))))
                );
    }
}
