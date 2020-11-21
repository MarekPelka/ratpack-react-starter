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
        File file = fileRepository.getFileById(id).orElseThrow(() -> new RuntimeException("File with id: " + id +" not found"));
        return file;
    }

    List<File> getAllFiles() {
        return fileRepository
                .getAllFiles()
                .stream()
                .map(f -> f)
                .collect(Collectors.toList());
    }

    public FileDTO addFile(File file) {
        return FileMapper.mapToFileDTO(
                fileRepository.addFile(file)
        );
    }
}
