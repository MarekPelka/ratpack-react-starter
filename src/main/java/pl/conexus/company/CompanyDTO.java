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
}
