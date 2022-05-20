import axios from "axios";


export const GETKURTISDATA = "GETKURTISDATA";

export const kurtiData = (payload) => ({

    type : GETKURTISDATA,
    payload : payload
})

export const getKurtiData = () => (dispatch) => {

    axios.get("https://ecom-backend321.herokuapp.com/kurtis").then((res)=>{
        dispatch(kurtiData(res.data))
    })
}