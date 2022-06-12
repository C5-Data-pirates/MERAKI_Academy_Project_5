import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getfury } from "../../redux/reducers/search";
import "react-slideshow-image/dist/styles.css";
import "./style.css";
import header1 from "./img/1.png";
import header2 from "./img/2.jpg";
import header3 from "./img/3.jpg";
import header4 from "./img/4.png";
import header5 from "./img/5.png";
const Homepage = () => {
  const [Pagination, setPagination] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return {
      allproduct: state.search.allPrudact,
      number: state.search.number,
      state: state.search.allPrudact,
      home: state.home.homePageItems,
    };
  });
  const filterdSubCatag = (type1) => {
    const fortest =
      state.state &&
      state.state.map((element, index) => {
        if (element.subCategory_id == type1) {
          return (
            <div className="contener_prodect" key={index}>
              <div className="contener_img_product">
                <img className="productimg" src={element.picUrlProd} />
              </div>
              <div className="contener_titel_product">
                <p>{element.title}</p>
              </div>
              <div className="contener_price">
                {" "}
                <span>{element.price} JD</span>
              </div>
            </div>
          );
        }
      });
    return fortest;
  };
  const properties = {
    duration: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: "autoplay",
    indicators: true,
  };
  const getproductPagination = (string) => {
    axios
      .post(`http://localhost:5000/product/Pagination/${string}`)
      .then((result) => {
        setPagination(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getproductPagination(1);
  }, []);
  console.log(state.home);
  return (
    <div className="continerAll_mainhomediv">
      <div className="mainhomediv">
        <div>
          <div className="continerAll_img_page">
            <img
              src={header4}
              onClick={() => {
                dispatch(getfury());
                navigate("/resulsearch");
              }}
            />
          </div>
          <Slide easing="ease">
            <div className="each-slide">
              <img className="img" src={header1} />
            </div>
            <div className="each-slide">
              <img className="img" src={header2} />
            </div>
            <div className="each-slide">
              <img className="img" src={header3} />
            </div>
            <div className="each-slide">
              <img className="img" src={header5} />
            </div>
          </Slide>
        </div>
        <div>
          {state.home &&
            state.home.map((element, index) => {
              console.log(element);
              return (
                <div>
                  <div id={index}>
                    {element.url ? (
                      <div className="contener_img_separtor">
                        <img className="img_separtor" src={element.url}></img>
                      </div>
                    ) : null}
                    <Slide {...properties} className="contener_side_product">
                      {filterdSubCatag(element.product_Id)}
                    </Slide>
                  </div>
                </div>
              );
            })}
              <div className="contener_all_product_main">
              {Pagination &&
            Pagination.map((element) => {
              return (
                <div className="contener_one_product">
                  <Link className="linkproduct_mainpage" to={"/"}>
                 
                  <img className="firstpageimg" src={element.picUrlProd} />
                  <p className="titleproduct_main" >{element.title}</p>

                  <p className="dis_product_main" >
                    {" "}
                    {element.description
                      .split(" ")
                      .splice(1, 15)
                      .join(" ")}{" "}
                  </p>
                  <p className="price_productmain" >{element.price} JD</p>
                  </Link>
                  
                </div>
              );
            })}

              </div>
         


        </div>
      </div>
      {state.number &&
        state.number.map((element) => {
          return (
            <div className="divPagination">
              {" "}
              <button
                key={element}
                onClick={() => {
                  getproductPagination(element);
                }}
              >
                {element}
              </button>
              ;
            </div>
          );
        })}
    </div>
  );
};

export default Homepage;
