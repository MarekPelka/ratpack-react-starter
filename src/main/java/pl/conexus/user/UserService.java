package pl.conexus.user;

class UserService {

    private UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    User getUser(Integer id) throws Exception {
        //TODO add custom exception
        User u = repository.getUserById(id).orElseThrow(() -> new Exception("User not found"));
        System.out.println(u.getName());
        return u;
    }

    public User addUser(String name) {
        User userToAdd = new User();
        userToAdd.setName(name);
        return repository.addUser(userToAdd);
    }
}
