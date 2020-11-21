package pl.conexus.product.delivery;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum DeliveryType {
    @JsonProperty("deliveryInPerson")
    DELIVERY_IN_PERSON("deliveryInPerson"),
    @JsonProperty("cityDelivery")
    CITY_DELIVERY("cityDelivery"),
    @JsonProperty("delivery")
    DELIVERY("delivery");

    private String key;

    DeliveryType(String key) {
        this.key = key;
    }

    public String getKey() {
        return key;
    }
}
