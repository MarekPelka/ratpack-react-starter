package pl.conexus.product;

import pl.conexus.company.Company;
import pl.conexus.file.FileDTO;
import pl.conexus.product.opinion.Opinion;
import pl.conexus.product.promotion.Promotion;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.CascadeType;

@Entity
@Table(name="product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "public")
    @SequenceGenerator(name = "public", sequenceName = "product_seq", initialValue = 1, allocationSize = 1)
    @Column(name="id")
    private Integer id;
    @ManyToOne
    private Company company;
    @Column(name="name")
    private String name;
    @Column(name="price")
    private BigDecimal price;
    @Column(name="amount")
    private Integer amount;
    @Column(name="description")
    private String description;
    @OneToMany
    private List<Opinion> opinions;
    @ManyToOne
    private Promotion promotion;
    @OneToMany(cascade = {CascadeType.ALL})
    private List<FileDTO> files;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
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

    public List<Opinion> getOpinions() {
        return opinions;
    }

    public void setOpinions(List<Opinion> opinions) {
        this.opinions = opinions;
    }

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }

    public List<FileDTO> getFiles() {
        return files;
    }

    public void setFiles(List<FileDTO> files) {
        this.files = files;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", company=" + company +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", amount=" + amount +
                ", description='" + description + '\'' +
                ", opinions=" + opinions +
                ", promotion=" + promotion +
                '}';
    }
}
