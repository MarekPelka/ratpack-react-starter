package pl.conexus.product;

import pl.conexus.company.CompanyMapper;
import pl.conexus.product.opinion.OpinionMapper;
import pl.conexus.product.promotion.PromotionMapper;
import java.util.stream.Collectors;

public class ProductMapper {
    public static ProductDTO mapToProductDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(product.getId());
        productDTO.setCompanyDTO(CompanyMapper.mapToCompanyDTO(product.getCompany()));
        productDTO.setName(product.getName());
        productDTO.setPrice(product.getPrice());
        productDTO.setAmount(product.getAmount());
        productDTO.setDescription(product.getDescription());
        productDTO.setOpinionsDTO(product.getOpinions().stream()
                .map(opinion -> OpinionMapper.mapToOpinionDTO(opinion)).collect(Collectors.toList()));
        productDTO.setPromotionDTO(PromotionMapper.mapToPromotionDTO(product.getPromotion()));
//        productDTO.setFilesDTO(product.getFiles().stream().map(file -> FileMapper.mapToFileDTO(file)).collect(Collectors.toList()));
        productDTO.setFilesDTO(product.getFiles());
        return productDTO;
    }

    public static Product mapToProduct(ProductDTO productDTO) {
        Product product = new Product();
        product.setId(productDTO.getId());
        product.setCompany(CompanyMapper.mapToCompany(productDTO.getCompanyDTO()));
        product.setName(productDTO.getName());
        product.setPrice(productDTO.getPrice());
        product.setAmount(productDTO.getAmount());
        product.setDescription(productDTO.getDescription());
        product.setOpinions(productDTO.getOpinionsDTO().stream()
                .map(opinion -> OpinionMapper.mapToOpinion(opinion)).collect(Collectors.toList()));
        product.setPromotion(PromotionMapper.mapToPromotion(productDTO.getPromotionDTO()));
        product.setFiles(productDTO.getFilesDTO());
        return product;
    }
}
