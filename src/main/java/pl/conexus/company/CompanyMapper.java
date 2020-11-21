package pl.conexus.company;

import pl.conexus.product.delivery.DeliveryMapper;

import java.util.stream.Collectors;

public class CompanyMapper {
    public static Company mapToCompany(CompanyDTO companyDTO) {
        Company company = new Company();
        if (companyDTO != null) {
            company.setId(companyDTO.getId());
            company.setName(companyDTO.getName());
            company.setCompany(companyDTO.getCompany());
            company.setLastname(companyDTO.getLastname());
            company.setPhone(companyDTO.getPhone());
            company.setEmail(companyDTO.getEmail());
            company.setNip(companyDTO.getNip());
            company.setRegon(companyDTO.getRegon());
            company.setSite(companyDTO.getSite());
            company.setAddress(companyDTO.getAddress());
            company.setDescription(companyDTO.getDescription());
            company.setBankAccount(companyDTO.getBankAccount());
            company.setOffer(companyDTO.getOffer());
            company.setSpecialOffer(companyDTO.getSpecialOffer());
            company.setDeliveries(companyDTO.getDeliveriesDTO().stream()
                    .map(deliveryDTO -> DeliveryMapper.mapToDelivery(deliveryDTO)).collect(Collectors.toList()));
        }
        return company;
    }

    public static CompanyDTO mapToCompanyDTO(Company company) {
        CompanyDTO companyDTO = new CompanyDTO();
        System.out.println(company);
        if (company != null) {
            companyDTO.setId(company.getId());
            companyDTO.setName(company.getName());
            companyDTO.setCompany(company.getCompany());
            companyDTO.setLastname(company.getLastname());
            companyDTO.setPhone(company.getPhone());
            companyDTO.setEmail(company.getEmail());
            companyDTO.setNip(company.getNip());
            companyDTO.setRegon(company.getRegon());
            companyDTO.setSite(company.getSite());
            companyDTO.setAddress(company.getAddress());
            companyDTO.setDescription(company.getDescription());
            companyDTO.setBankAccount(company.getBankAccount());
            companyDTO.setOffer(company.getOffer());
            companyDTO.setSpecialOffer(company.getSpecialOffer());
            companyDTO.setDeliveriesDTO(company.getDeliveries().stream()
                    .map(delivery -> DeliveryMapper.mapToDeliveryDTO(delivery)).collect(Collectors.toList()));
        }
        System.out.println(companyDTO);
        return companyDTO;
    }
}
