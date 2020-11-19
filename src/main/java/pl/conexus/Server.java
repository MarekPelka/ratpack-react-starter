package pl.conexus;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import pl.conexus.foundation.DemoDataLoader;
import pl.conexus.product.ProductModule;
import pl.conexus.user.UserModule;
import ratpack.func.Action;
import ratpack.handling.Chain;
import ratpack.server.BaseDir;
import ratpack.server.RatpackServer;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Map;
import java.util.TreeMap;

class Server {

    private SessionFactory sessionFactory;

    private UserModule userModule;

    private ProductModule productModule;

    private Path staticPath;

    Server() {
        init();
    }

    void start() throws Exception {
        RatpackServer.start(server -> server
                .serverConfig(c -> c.baseDir(staticPath))
                .handlers(makeApi(defineApi()))
        );
    }

    void init() {
        // https://ratpack.io/manual/current/gradle.html#running_the_application
        boolean isDevelopmentMode = Boolean.parseBoolean(System.getProperty("ratpack.development"));
        printInfo(isDevelopmentMode);

        //we should keep one session factory per application
        sessionFactory = new Configuration().configure().buildSessionFactory();
        initializeModules(isDevelopmentMode);
    }

    private void initializeModules(boolean isDevelopmentMode) {
        //Frontend
        staticPath = isDevelopmentMode ? Paths.get(System.getProperty("user.dir"), "frontend", "build") :
                BaseDir.find().getRoot().resolve("static");

        //Backend modules
        userModule = new UserModule(sessionFactory);
        productModule = new ProductModule(sessionFactory);

        if (isDevelopmentMode) {
            loadDemoData(userModule.userDemoDataLoader());
        }
    }

    private static Action<Chain> makeApi(Action<Chain> handlers) {
        return chain -> chain.prefix("api", handlers);
    }

    private Action<Chain> defineApi() {
        return apiChain -> apiChain
                .insert(userModule.userApi())
                //some other api from different module .insert(gamesService.gamesApi())
                ;
    }

    private void loadDemoData(DemoDataLoader... demoDataLoader) {
        Arrays.asList(demoDataLoader).forEach(DemoDataLoader::loadData);
    }

    private void printInfo(boolean isDevelopmentMode) {
        if (isDevelopmentMode) {
            System.out.println("Starting server in development mode.");
            Map<String, String> map = new TreeMap(System.getProperties());
            map.forEach((k, v) -> System.out.println("\t" + k + " => " + v));
        } else {
            System.out.println("Starting server in development mode.");
        }
    }
}
