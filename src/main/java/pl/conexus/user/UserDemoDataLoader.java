package pl.conexus.user;

import org.hibernate.SessionFactory;
import pl.conexus.foundation.DemoDataLoader;

import java.util.ArrayList;
import java.util.List;

class UserDemoDataLoader implements DemoDataLoader {

    private SessionFactory sessionFactory;

    UserDemoDataLoader(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public void loadData() {
        batchLoad(getDemoUsers(), sessionFactory);
    }

    private List<User> getDemoUsers() {
        List<User> users = new ArrayList<>();

        for (int i = 0; i < 101; i++) {
            User marek = new User();
            marek.setName("Marek" + i);
            users.add(marek);
        }

        return users;
    }
}
