package pl.conexus.product;

import pl.conexus.file.FileRepository;

import java.awt.color.ProfileDataException;
import java.util.List;
import java.util.stream.Collectors;

public class ProductService {
    private ProductRepository productRepository;
    private FileRepository fileRepository;

    public ProductService(ProductRepository repository) {
        this.productRepository = repository;
    }

    ProductDTO getProduct(Integer id) throws ProductNotFoundException {

        ProductDTO productDTO = ProductMapper.mapToProductDTO(productRepository
                .getProductById(id)
                .orElseThrow(() -> new ProfileDataException("Product with id: " + id +" not found"))
        );
        System.out.println("Get Product " + productDTO);
        return productDTO;
    }

    List<ProductDTO> getAllProducts() {
        return productRepository
                .getAllProducts()
                .stream()
                .map(product -> ProductMapper.mapToProductDTO(product))
                .collect(Collectors.toList());
    }

    public ProductDTO addProduct(ProductDTO productDTO) {
        ProductDTO dto = ProductMapper.mapToProductDTO(
                productRepository.addProduct(ProductMapper.mapToProduct(productDTO))
        );
        if (dto != null) {
//            fileRepository.saveSingleRow();
        }
        return dto;
    }
}
