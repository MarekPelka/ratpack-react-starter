package pl.conexus.file;

public class FileMapper {
    public static FileDTO mapToFileDTO (File file) {
        FileDTO fileDTO = new FileDTO();
        fileDTO.setId(file.getId());
        fileDTO.setName(file.getName());
        return fileDTO;
    }
}
