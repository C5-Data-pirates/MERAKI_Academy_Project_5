import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState } from "react";
import axios from "axios";
import { setallProductFromAdmin } from "../../../redux/reducers/prduct_used";
import "./style.css"
const ALLPRODUCTFORADMIN=()=>{
    const dispacth=useDispatch()
    const state=useSelector((state)=>{
        return{
            allOrderSaleForAdmin:state.product_used.allProductFromAdmin
        }
    })


    const allOrderSale=()=>{
        axios.get("http://localhost:5000/prudect_used/AllSaleOrderForadmin").then((resulatt)=>{

            dispacth( setallProductFromAdmin(resulatt.data.result))
            console.log(resulatt);
                
        })
    }


    useEffect(()=>{
        allOrderSale()
    },[])





    return(
        <div className="contener_all_product_for_admin">
                <table>
                   
                        <tr>
                            <th>Image</th>
                            <th>name</th>
                            <th>category</th>
                            <th>asking price</th>
                            <th>bank account</th>
                            <th>admission status</th>
                            <th>product description</th>
                            <th>phone number</th>
                            <th>Available Operations</th>
                        </tr>

                        {
    state.allOrderSaleForAdmin&&state.allOrderSaleForAdmin.map((element,index)=>{
        console.log(element);
        return(
            <tr>
                            <td><img src={element.url_imj}/></td>
                            <td><h1>{element.product_name}</h1> </td>
                            <td> <h1>{element.category}</h1></td>
                            <td><h1>{element.asking_price}  JD</h1></td>
                            <td><h1>{element.bank_account}</h1></td>
                            <td>{element.admission_status?<h1 style={{color:"green"}} >it has been accpted</h1  >:<h1 style={{color:"red"}} >under review</h1>}</td>
                            <td>{element.product_description}</td>
                            <td>{element.phone_number}</td>
                            <td> <button onClick={()=>{
                                axios.put(`http://localhost:5000/prudect_used/${element.used_product_id}`).then((result)=>{
                                    allOrderSale()
                                })
                            }} >Acceptance</button>
                                <button onClick={()=>{axios.delete(`http://localhost:5000/prudect_used/delete/${element.used_product_id}`).then((result)=>{
                                    allOrderSale()
                                    console.log(result);
                                })}} >delete</button>
                             </td>
            </tr>
        )
    })
}
                        
                   
                </table>
        </div>
    )
}
export default ALLPRODUCTFORADMIN


{/* <img src={element.url_imj} /> */}




{/* <table>
<tr>
  <th>Image</th>
  <th>Product_id</th>
  <th>picUrlProd</th>
  <th>title</th>
  <th>Product Name</th>
  <th>category</th>
  <th>sub_category</th>
  <th>product_type</th>
  <th>price</th>
  <th>description</th>
  <th>Store_Quantity</th>
  <th>note</th>
  <th>button</th>
</tr>
</table> */}





