package pl.conexus.user;

import io.netty.util.concurrent.Promise;

class UserService {
    private UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    User getUser(Integer id) throws UserNotFoundException {
        User u = repository.getUserById(id).orElseThrow(() -> new UserNotFoundException("User with id: " + id +" not found"));
        System.out.println("Get user " + u);
        return u;
    }

    public User addUser(UserDTO userDTO) {
        System.out.println(UserMapper.mapToUser(userDTO));
        return repository.addUser(UserMapper.mapToUser(userDTO));
    }
}
