package pl.conexus.product.delivery;

public class DeliveryDTO {
    private Integer id;
    private DeliveryType deliveryType;
    private String deliverySpecification;
    private int deliveryRange;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public DeliveryType getDeliveryType() {
        return deliveryType;
    }

    public void setDeliveryType(DeliveryType deliveryType) {
        this.deliveryType = deliveryType;
    }

    public String getDeliverySpecification() {
        return deliverySpecification;
    }

    public void setDeliverySpecification(String deliverySpecification) {
        this.deliverySpecification = deliverySpecification;
    }

    public int getDeliveryRange() {
        return deliveryRange;
    }

    public void setDeliveryRange(int deliveryRange) {
        this.deliveryRange = deliveryRange;
    }

    @Override
    public String toString() {
        return "DeliveryDTO{" +
                "id=" + id +
                ", deliveryType=" + deliveryType +
                ", deliverySpecification='" + deliverySpecification + '\'' +
                ", deliveryRange=" + deliveryRange +
                '}';
    }
}
