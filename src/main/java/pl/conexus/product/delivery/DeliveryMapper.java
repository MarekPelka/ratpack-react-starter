package pl.conexus.product.delivery;

public class DeliveryMapper {
    public static DeliveryDTO mapToDeliveryDTO(Delivery delivery) {
        DeliveryDTO deliveryDTO = new DeliveryDTO();
        if (delivery != null) {
            deliveryDTO.setId(delivery.getId());
            deliveryDTO.setDeliveryType(delivery.getDeliveryType());
            deliveryDTO.setDeliverySpecification(delivery.getDeliverySpecification());
            deliveryDTO.setDeliveryRange(delivery.getDeliveryRange());
        }
        return deliveryDTO;
    }

    public static Delivery mapToDelivery(DeliveryDTO deliveryDTO) {
        Delivery delivery = new Delivery();
        if (deliveryDTO != null) {
            delivery.setId(deliveryDTO.getId());
            delivery.setDeliveryType(deliveryDTO.getDeliveryType());
            delivery.setDeliverySpecification(deliveryDTO.getDeliverySpecification());
            delivery.setDeliveryRange(deliveryDTO.getDeliveryRange());
        }
        return delivery;
    }
}
