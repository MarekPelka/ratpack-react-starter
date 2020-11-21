package pl.conexus.product;

import org.hibernate.SessionFactory;
import pl.conexus.foundation.DemoDataLoader;
import ratpack.func.Action;
import ratpack.handling.Chain;

import static ratpack.jackson.Jackson.fromJson;
import static ratpack.jackson.Jackson.json;

public class ProductModule {

    private SessionFactory sessionFactory;

    public ProductModule(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public DemoDataLoader productDemoDataLoader() {
        return new ProductDemoDataLoader(this.sessionFactory);
    }

    public Action<Chain> productApi() {
        final ProductService productService = productService();

        return apiChain -> apiChain
                .prefix("product", getProduct(productService))
                .prefix("product", getAllProducts(productService))
                .prefix("product", addProduct(productService));

    }

    ProductService productService() {
        return new ProductService(productRepository());
    }

    ProductRepository productRepository() {
        return new ProductRepository(sessionFactory);
    }

    //get company endpoint TEST: http://localhost:5050/api/product/get?id=2
    private Action<Chain> getProduct(ProductService productService) {
        return chain -> chain
                .get("get", ctx -> ctx.render(
                        json(productService.getProduct(Integer.valueOf(ctx.getRequest().getQueryParams().get("id"))))
                ));

    }

    //get all companies endpoint TEST: http://localhost:5050/api/product/all
    private Action<Chain> getAllProducts(ProductService productService) {
        return chain -> chain
                .get("all", ctx -> ctx.render(
                        json(productService.getAllProducts())
                ));

    }

    //post user endpoint TEST: http://localhost:5050/api/product/add
    private Action<Chain> addProduct(ProductService productService) {
        return chain -> chain
                .post("add", ctx -> ctx.parse(fromJson(ProductDTO.class))
                        .then(u -> ctx.render(json(productService.addProduct(u))))
                );
    }
}
