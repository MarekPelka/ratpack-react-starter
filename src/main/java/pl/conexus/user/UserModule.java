package pl.conexus.user;

import org.hibernate.SessionFactory;
import pl.conexus.foundation.DemoDataLoader;

public class UserModule {
    private SessionFactory sessionFactory;

    public UserModule(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public DemoDataLoader userDemoDataLoader() {
        return new UserDemoDataLoader(this.sessionFactory);
    }
}
