package pl.conexus.product.opinion;

import pl.conexus.user.UserMapper;

public class OpinionMapper {
    public static Opinion mapToOpinion(OpinionDTO opinionDTO) {
        Opinion opinion = new Opinion();
        if (opinionDTO != null) {
            opinion.setId(opinionDTO.getId());
            opinion.setUser(UserMapper.mapToUser(opinionDTO.getUserDTO()));
            opinion.setContent(opinionDTO.getContent());
            opinion.setAddedDate(opinionDTO.getAddedDate());
            opinion.setRate(opinionDTO.getRate());
        }
        return opinion;
    }

    public static OpinionDTO mapToOpinionDTO(Opinion opinion) {
        OpinionDTO opinionDTO = new OpinionDTO();
        if (opinionDTO != null) {
            opinionDTO.setId(opinion.getId());
            opinionDTO.setUserDTO(UserMapper.mapToDTO(opinion.getUser()));
            opinionDTO.setContent(opinion.getContent());
            opinionDTO.setAddedDate(opinion.getAddedDate());
            opinionDTO.setRate(opinion.getRate());
        }
        return opinionDTO;
    }
}
