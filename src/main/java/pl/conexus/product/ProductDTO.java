package pl.conexus.product;

import pl.conexus.company.CompanyDTO;
import pl.conexus.file.FileDTO;
import pl.conexus.product.opinion.OpinionDTO;
import pl.conexus.product.promotion.PromotionDTO;

import java.math.BigDecimal;
import java.util.List;

public class ProductDTO {
    private Integer id;
    private CompanyDTO companyDTO;
    private String name;
    private BigDecimal price;
    private Integer amount;
    private String description;
    private List<OpinionDTO> opinionsDTO;
    private PromotionDTO promotionDTO;
    private List<FileDTO> filesDTO;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public CompanyDTO getCompanyDTO() {
        return companyDTO;
    }

    public void setCompanyDTO(CompanyDTO companyDTO) {
        this.companyDTO = companyDTO;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<OpinionDTO> getOpinionsDTO() {
        return opinionsDTO;
    }

    public void setOpinionsDTO(List<OpinionDTO> opinionsDTO) {
        this.opinionsDTO = opinionsDTO;
    }

    public PromotionDTO getPromotionDTO() {
        return promotionDTO;
    }

    public void setPromotionDTO(PromotionDTO promotionDTO) {
        this.promotionDTO = promotionDTO;
    }

    public List<FileDTO> getFilesDTO() {
        return filesDTO;
    }

    public void setFilesDTO(List<FileDTO> filesDTO) {
        this.filesDTO = filesDTO;
    }

    @Override
    public String toString() {
        return "ProductDTO{" +
                "id=" + id +
                ", companyDTO=" + companyDTO +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", amount=" + amount +
                ", description='" + description + '\'' +
                ", opinionsDTO=" + opinionsDTO +
                ", promotionDTO=" + promotionDTO +
                '}';
    }
}
