package pl.conexus.file;

import org.hibernate.SessionFactory;
import pl.conexus.foundation.DemoDataLoader;
import pl.conexus.product.ProductDTO;
import pl.conexus.product.ProductDemoDataLoader;
import pl.conexus.product.ProductRepository;
import pl.conexus.product.ProductService;
import ratpack.func.Action;
import ratpack.handling.Chain;

import java.sql.Blob;

import static ratpack.jackson.Jackson.fromJson;
import static ratpack.jackson.Jackson.json;

public class FileModule {

    private SessionFactory sessionFactory;

    public FileModule(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public DemoDataLoader fileDemoDataLoader() {
        return new FileDemoDataLoader(this.sessionFactory);
    }

    public Action<Chain> fileApi() {
        final FileService fileService = fileService();

        return apiChain -> apiChain
                .prefix("file", getFile(fileService))
                .prefix("file", getAllFiles(fileService));
//                .prefix("file", addProduct(productService));

    }

    FileService fileService() {
        return new FileService(fileRepository());
    }

    FileRepository fileRepository() {
        return new FileRepository(sessionFactory);
    }

    //get company endpoint TEST: http://localhost:5050/api/file/get?id=1
    private Action<Chain> getFile(FileService fileService) {
        return chain -> chain
                .get("get", ctx -> {
                            Blob blob = fileService.getFile(Long.parseLong(ctx.getRequest().getQueryParams().get("id"))).getContent();
                            ctx.getResponse().send("img/jpg", blob.getBytes(0, (int) blob.length()));
                        }
//                    ctx.render(
//                        json(fileService.getFile(Long.valueOf(ctx.getRequest().getQueryParams().get("id"))))
//                    )
                );

    }

    //get all companies endpoint TEST: http://localhost:5050/api/file/all
    private Action<Chain> getAllFiles(FileService fileService) {
        return chain -> chain
                .get("all", ctx -> ctx.render(
                        json(fileService.getAllFiles())
                ));

    }

//    //post user endpoint TEST: http://localhost:5050/api/product/add
//    private Action<Chain> addProduct(ProductService productService) {
//        return chain -> chain
//                .post("add", ctx -> ctx.parse(fromJson(ProductDTO.class))
//                        .then(u -> ctx.render(json(productService.addProduct(u))))
//                );
//    }
}
