package pl.conexus;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import pl.conexus.foundation.DemoDataLoader;
import pl.conexus.user.UserModule;
import ratpack.server.BaseDir;
import ratpack.server.RatpackServer;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Map;
import java.util.TreeMap;

import static ratpack.jackson.Jackson.json;

class Server {

    private SessionFactory sessionFactory;

    private UserModule userModule;

    private Path staticPath;

    Server() {
        init();
    }

    void start() throws Exception {
        RatpackServer.start(server -> server
                .serverConfig(c -> c.baseDir(staticPath))
                .handlers(chain -> chain
                        .get(":name", ctx -> ctx.render(json(new Main.Person(ctx.getPathTokens().get("name")))))
                        .files(f -> f.indexFiles("index.html"))
                )
        );
    }

    void init() {
        // https://ratpack.io/manual/current/gradle.html#running_the_application
        boolean isDevelopmentMode = Boolean.parseBoolean(System.getProperty("ratpack.development"));
        printInfo(isDevelopmentMode);

        sessionFactory = new Configuration().configure().buildSessionFactory();
        initializeModules(isDevelopmentMode);
    }

    private void initializeModules(boolean isDevelopmentMode) {
        //Frontend
        staticPath = isDevelopmentMode ? Paths.get(System.getProperty("user.dir"), "frontend", "build") :
                BaseDir.find().getRoot().resolve("static");

        //Backend modules
        userModule = new UserModule(sessionFactory);

        if (isDevelopmentMode) {
            loadDemoData(userModule.userDemoDataLoader());
        }
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
