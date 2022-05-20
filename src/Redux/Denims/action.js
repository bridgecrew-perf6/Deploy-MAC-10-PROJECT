import axios from "axios";


export const GETDENIMSDATA = "GETDENIMSDATA";

export const DenimData = (payload) => ({

    type : GETDENIMSDATA,
    payload : payload
})

export const getDenimData = () => (dispatch) => {

    axios.get("https://ecom-backend321.herokuapp.com/denims").then((res)=>{
        dispatch(DenimData(res.data))
    })
}