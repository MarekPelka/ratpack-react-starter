package pl.conexus.company;

import pl.conexus.product.delivery.Delivery;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.OneToMany;
import javax.persistence.CascadeType;
import java.util.List;

@Entity
@Table(name="company")
public class Company {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="id")
    private Integer id;
    @Column(name="name")
    private String name;
    @Column(name="lastname")
    private String lastname;
    @Column(name="company")
    private String company;
    @Column(name="phone")
    private String phone;
    @Column(name="email")
    private String email;
    @Column(name="nip")
    private Integer nip;
    @Column(name="regon")
    private Integer regon;
    @Column(name="site")
    private String site;
    @Column(name="address")
    private String address;
    @Column(name="description")
    private String description;
    @Column(name="bank_account")
    private String bankAccount;
    @Column(name="offer")
    private String offer;
    @Column(name="special_offer")
    private String specialOffer;
    @OneToMany(cascade = {CascadeType.ALL})
    private List<Delivery> deliveries;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getNip() {
        return nip;
    }

    public void setNip(Integer nip) {
        this.nip = nip;
    }

    public Integer getRegon() {
        return regon;
    }

    public void setRegon(Integer regon) {
        this.regon = regon;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(String bankAccount) {
        this.bankAccount = bankAccount;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getOffer() {
        return offer;
    }

    public void setOffer(String offer) {
        this.offer = offer;
    }

    public String getSpecialOffer() {
        return specialOffer;
    }

    public void setSpecialOffer(String specialOffer) {
        this.specialOffer = specialOffer;
    }

    public List<Delivery> getDeliveries() {
        return deliveries;
    }

    public void setDeliveries(List<Delivery> deliveries) {
        this.deliveries = deliveries;
    }

    @Override
    public String toString() {
        return "Company{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastname='" + lastname + '\'' +
                ", company='" + company + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", nip=" + nip +
                ", regon=" + regon +
                ", site='" + site + '\'' +
                ", address='" + address + '\'' +
                ", description='" + description + '\'' +
                ", bankAccount='" + bankAccount + '\'' +
                ", offer='" + offer + '\'' +
                ", specialOffer='" + specialOffer + '\'' +
                ", deliveries=" + deliveries +
                '}';
    }
}
