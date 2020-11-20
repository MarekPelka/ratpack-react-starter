package pl.conexus.company;

public class CompanyMapper {
    static Company mapToCompany(CompanyDTO companyDTO) {
        Company company = new Company();
        company.setId(companyDTO.getId());
        company.setName(companyDTO.getName());
        company.setLastname(companyDTO.getLastname());
        company.setTel(companyDTO.getTel());
        company.setEmail(companyDTO.getEmail());
        company.setNip(companyDTO.getNip());
        company.setRegon(companyDTO.getRegon());
        company.setSite(companyDTO.getSite());
        company.setAddress(companyDTO.getAddress());
        company.setDescription(companyDTO.getDescription());
        company.setAccountNumber(companyDTO.getAccountNumber());
        return company;
    }

    static CompanyDTO mapToCompanyDTO(Company company) {
        CompanyDTO companyDTO = new CompanyDTO();
        companyDTO.setId(company.getId());
        companyDTO.setName(company.getName());
        companyDTO.setLastname(company.getLastname());
        companyDTO.setTel(company.getTel());
        companyDTO.setEmail(company.getEmail());
        companyDTO.setNip(company.getNip());
        companyDTO.setRegon(company.getRegon());
        companyDTO.setSite(company.getSite());
        companyDTO.setAddress(company.getAddress());
        companyDTO.setDescription(company.getDescription());
        companyDTO.setAccountNumber(company.getAccountNumber());
        return companyDTO;
    }
}
