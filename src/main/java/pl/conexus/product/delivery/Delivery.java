package pl.conexus.product.delivery;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Enumerated;
import javax.persistence.EnumType;

@Entity
@Table(name="delivery")
public class Delivery {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    @Column(name = "delivery_type")
    @Enumerated(EnumType.STRING)
    private DeliveryType deliveryType;
    @Column(name = "delivery_specification")
    private String deliverySpecification;
    @Column(name = "delivery_range")
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
        return "Delivery{" +
                "id=" + id +
                ", deliveryType=" + deliveryType +
                ", deliverySpecification='" + deliverySpecification + '\'' +
                ", deliveryRange=" + deliveryRange +
                '}';
    }
}
