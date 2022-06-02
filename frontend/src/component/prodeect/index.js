import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Prodect = () => {
    const state = useSelector((state) => {
        return {
          articles: state.articles.articles,
          token:state.auth.token 
        };
      });









      
  return( 
  <div>


  </div>
  )
};

export default Prodect;
