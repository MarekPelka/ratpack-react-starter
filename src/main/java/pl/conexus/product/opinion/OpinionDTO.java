package pl.conexus.product.opinion;
import pl.conexus.user.UserDTO;
import java.util.Date;

public class OpinionDTO {

    private Integer id;
    private UserDTO userDTO;
    private Integer rate;
    private String content;
    private Date addedDate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }

    public Integer getRate() {
        return rate;
    }

    public void setRate(Integer rate) {
        this.rate = rate;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(Date addedDate) {
        this.addedDate = addedDate;
    }

    @Override
    public String toString() {
        return "OpinionDTO{" +
                "id=" + id +
                ", userDTO=" + userDTO +
                ", rate=" + rate +
                ", content='" + content + '\'' +
                ", addedDate=" + addedDate +
                '}';
    }
}
