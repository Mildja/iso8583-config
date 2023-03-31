import axios from "axios";

const ISO8583_BASE_PATH="http://localhost:8080/ISO8583";

class ISO8583 {
    get(){
        return axios.get(ISO8583_BASE_PATH);
    }
}
export default new ISO8583();