package pl.conexus.company;

import pl.conexus.product.delivery.DeliveryDTO;
import java.util.List;

public class CompanyDTO {
    private Integer id;
    private String name;
    private String lastname;
    private String company;
    private String phone;
    private String email;
    private Integer nip;
    private Integer regon;
    private String site;
    private String address;
    private String description;
    private String bankAccount;
    private String offer;
    private String specialOffer;
    private List<DeliveryDTO> deliveriesDTO;

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

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
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

    public List<DeliveryDTO> getDeliveriesDTO() {
        return deliveriesDTO;
    }

    public void setDeliveriesDTO(List<DeliveryDTO> deliveriesDTO) {
        this.deliveriesDTO = deliveriesDTO;
    }

    @Override
    public String toString() {
        return "CompanyDTO{" +
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
                ", deliveriesDTO=" + deliveriesDTO +
                '}';
    }
}
