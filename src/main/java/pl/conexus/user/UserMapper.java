package pl.conexus.user;

class UserMapper {

    static UserDTO mapToDTO(User u) {
        UserDTO dto = new UserDTO();
        dto.setId(u.getId());
        dto.setName(u.getName());
        dto.setEmail(u.getEmail());
        // TODO: Not sure if necessary
        dto.setPassword(u.getPassword());
        return dto;
    }

    static User mapToUser(UserDTO dto) {
        User u = new User();
        u.setId(dto.getId());
        u.setName(dto.getName());
        u.setEmail(dto.getEmail());
        u.setPassword(dto.getPassword());
        return u;
    }
}
