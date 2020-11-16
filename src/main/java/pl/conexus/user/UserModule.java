package pl.conexus.user;

import org.hibernate.SessionFactory;
import pl.conexus.foundation.DemoDataLoader;
import ratpack.func.Action;
import ratpack.handling.Chain;

import static ratpack.jackson.Jackson.json;

public class UserModule {
    private SessionFactory sessionFactory;

    public UserModule(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public DemoDataLoader userDemoDataLoader() {
        return new UserDemoDataLoader(this.sessionFactory);
    }

    public Action<Chain> userApi() {
        final UserService userService = userService();

        return apiChain -> apiChain
                .prefix("user", user(userService))
                .prefix("user", addUserWithName(userService));

    }

    UserService userService() {
        return new UserService(userRepository());
    }

    UserRepository userRepository() {
        return new UserRepository(sessionFactory);
    }

    //get user endpoint TEST: http://localhost:5050/api/user/get?id=2
    private Action<Chain> user(UserService userService) {
        return chain -> chain
                .get("get", ctx -> ctx.render(
                        json(userService.getUser(Integer.valueOf(ctx.getRequest().getQueryParams().get("id"))))
                ));

    }

    //TODO needs to be changed to post TEST: http://localhost:5050/api/user/add?name=Pawel
    private Action<Chain> addUserWithName(UserService userService) {
        return  chain -> chain.get("add", ctx -> ctx.render(
                json(userService.addUser(ctx.getRequest().getQueryParams().get("name")))));
    }
}
