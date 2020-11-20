package pl.conexus.company;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;
import javax.persistence.Column;

@Entity
@Table(name="company")
class Company {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="id")
    private Integer id;
    @Column(name="name")
    private String name;
    @Column(name="lastname")
    private String lastname;
    @Column(name="tel")
    private String tel;
    @Column(name="email")
    private String email;
    @Column(name="nip")
    private String nip;
    @Column(name="regon")
    private String regon;
    @Column(name="site")
    private String site;
    @Column(name="address")
    private String address;
    @Column(name="description")
    private String description;
    @Column(name="account_number")
    private String accountNumber;

    Integer getId() {
        return id;
    }

    void setId(Integer id) {
        this.id = id;
    }

    String getName() {
        return name;
    }

    void setName(String name) {
        this.name = name;
    }

    String getLastname() {
        return lastname;
    }

    void setLastname(String lastname) {
        this.lastname = lastname;
    }

    String getTel() {
        return tel;
    }

    void setTel(String tel) {
        this.tel = tel;
    }

    String getEmail() {
        return email;
    }

    void setEmail(String email) {
        this.email = email;
    }

    String getNip() {
        return nip;
    }

    void setNip(String nip) {
        this.nip = nip;
    }

    String getRegon() {
        return regon;
    }

    void setRegon(String regon) {
        this.regon = regon;
    }

    String getSite() {
        return site;
    }

    void setSite(String site) {
        this.site = site;
    }

    String getAddress() {
        return address;
    }

    void setAddress(String address) {
        this.address = address;
    }

    String getDescription() {
        return description;
    }

    void setDescription(String description) {
        this.description = description;
    }

    String getAccountNumber() {
        return accountNumber;
    }

    void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    @Override
    public String toString() {
        return "Company{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastname='" + lastname + '\'' +
                ", tel='" + tel + '\'' +
                ", email='" + email + '\'' +
                ", nip='" + nip + '\'' +
                ", regon='" + regon + '\'' +
                ", site='" + site + '\'' +
                ", address='" + address + '\'' +
                ", description='" + description + '\'' +
                ", accountNumber='" + accountNumber + '\'' +
                '}';
    }
}
