package pl.conexus.company;

import java.util.List;
import java.util.stream.Collectors;

public class CompanyService {
    private CompanyRepository companyRepository;

    public CompanyService(CompanyRepository repository) {
        this.companyRepository = repository;
    }

    CompanyDTO getCompany(Integer id) throws CompanyNotFoundException {
        CompanyDTO companyDTO = CompanyMapper.mapToCompanyDTO(companyRepository
                .getCompanyById(id)
                .orElseThrow(() -> new CompanyNotFoundException("Company with id: " + id +" not found"))
        );
        System.out.println("Get Company " + companyDTO);
        return companyDTO;
    }

    List<CompanyDTO> getAllCompanies() {
        return companyRepository
                .getAllCompanies()
                .stream()
                .map(company -> CompanyMapper.mapToCompanyDTO(company))
                .collect(Collectors.toList());
    }

    public CompanyDTO addCompany(CompanyDTO companyDTO) {
        return CompanyMapper.mapToCompanyDTO(
                companyRepository.addCompany(CompanyMapper.mapToCompany(companyDTO))
        );
    }
}
