package pl.conexus.user;

import org.hibernate.SessionFactory;
import pl.conexus.foundation.DemoDataLoader;
import ratpack.func.Action;
import ratpack.handling.Chain;

import static pl.conexus.user.UserMapper.mapToDTO;
import static ratpack.jackson.Jackson.fromJson;
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
                .prefix("user", addUser(userService));

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
                        json(mapToDTO(userService.getUser(Integer.valueOf(ctx.getRequest().getQueryParams().get("id")))))
                ));

    }

    //post user endpoint TEST: http://localhost:5050/api/user/add
    private Action<Chain> addUser(UserService userService) {
        return chain -> chain
                .post("add", ctx -> ctx.parse(fromJson(UserDTO.class))
                        .then(u -> ctx.render(json(userService.addUser(u))))
        );
    }
}
