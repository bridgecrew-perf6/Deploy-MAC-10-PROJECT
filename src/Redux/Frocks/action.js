import axios from "axios";

export const GETFROCKSDATA = "GETFROCKSDATA";

export const FrocksData = (payload) => ({

    type : GETFROCKSDATA,
    payload : payload
})

export const getFrocksData = () => (dispatch) => {

    axios.get("https://ecom-backend321.herokuapp.com/frocks").then((res) => {
        dispatch(FrocksData(res.data))
    })
}