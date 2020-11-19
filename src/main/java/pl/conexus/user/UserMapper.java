package pl.conexus.user;

class UserMapper {

    static UserDTO mapToDTO(User u) {
        UserDTO dto = new UserDTO();
        dto.setId(u.getId());
        dto.setName(u.getName());
        return dto;
    }

    static User mapToUser(UserDTO dto) {
        User u = new User();
        u.setId(dto.getId());
        u.setName(dto.getName());
        return u;
    }
}
