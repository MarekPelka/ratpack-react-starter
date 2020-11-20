package pl.conexus.company;

public class CompanyDTO {
    private Integer id;
    private String name;
    private String lastname;
    private String tel;
    private String email;
    private String nip;
    private String regon;
    private String site;
    private String address;
    private String description;
    private String accountNumber;

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

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNip() {
        return nip;
    }

    public void setNip(String nip) {
        this.nip = nip;
    }

    public String getRegon() {
        return regon;
    }

    public void setRegon(String regon) {
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

    void setAddress(String address) {
        this.address = address;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    @Override
    public String toString() {
        return "CompanyDTO{" +
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
