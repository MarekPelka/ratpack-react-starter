package pl.conexus.file;

import org.hibernate.Session;
import pl.conexus.product.Product;

import javax.persistence.TypedQuery;
import java.util.List;
import java.util.stream.Collectors;

public class FileService {
    private FileRepository fileRepository;

    public FileService(FileRepository repository) {
        this.fileRepository = repository;
    }

    File getFile(long id) {
        File fileDTO = fileRepository.getFileById(id).orElseThrow(() -> new RuntimeException("File with id: " + id +" not found"));
//        System.out.println("Get File " + fileDTO);
        return fileDTO;
    }

    List<File> getAllFiles() {
        return fileRepository
                .getAllFiles()
                .stream()
                .map(f -> f)
                .collect(Collectors.toList());
    }
//
//    public FileDTO addFile(FileDTO fileDTO) {
//        return FileMapper.mapToFileDTO(
//                fileRepository.addFile(FileMapper.mapToFile(fileDTO))
//        );
//    }
}
