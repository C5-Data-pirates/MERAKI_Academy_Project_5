import axios from "axios";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getcatogre } from "../../redux/reducers/catogre";
let value=true
console.log(value);
const CategoryBar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      category: state.catogre.catorge,
      prodect:state.productby.product
    };
  });
const test=()=>{
  axios
    .get("http://localhost:5000/category")
    .then((result) => {
      console.log(result);
      dispatch(getcatogre(result.data.result));
    })
    .catch((err) => {
      console.log(err);
    });
}

useEffect(()=>{
  test()
},[value])



  return (
    <div onClick={(()=>{
if (value) {
  value=false
  console.log(1);
}else{
  value= true
  console.log(2);
}
    })}>
      {state.category &&
        state.category.map((element, index) => {
          return (
            <Link to={`/category/${element.id}/products`}>
              {element.category} 
            </Link>
          );
        })}
    </div>
  );
};

export default CategoryBar 
