package pl.conexus.product.promotion;

public class PromotionMapper {
    public static Promotion mapToPromotion(PromotionDTO promotionDTO) {
        Promotion promotion = new Promotion();
        if (promotionDTO != null) {
            promotion.setId(promotionDTO.getId());
            promotion.setName(promotionDTO.getName());
            promotion.setDescription(promotionDTO.getDescription());
            promotion.setValue(promotionDTO.getValue());
            promotion.setKey(promotionDTO.getKey());
        }
        return promotion;
    }

    public static PromotionDTO mapToPromotionDTO(Promotion promotion) {
        PromotionDTO promotionDTO = new PromotionDTO();
        if (promotion != null) {
            promotionDTO.setId(promotion.getId());
            promotionDTO.setName(promotion.getName());
            promotionDTO.setDescription(promotion.getDescription());
            promotionDTO.setValue(promotion.getValue());
            promotionDTO.setKey(promotion.getKey());
        }
        return promotionDTO;
    }
}
