import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/ecom-image.jpg";

const Home=()=>{
  const navigate=useNavigate();

  const handleNavigateToProduct=()=>{
    navigate("/product");
  }
     return(
    <div className="main">
        <div className="homeimage">
            <img src={image} height={1000} width={2000}  alt="images"/>
       
        </div>
      
        <h3>Welcome to our store <em>OKPlease</em> .It is the Ecommerec store <br></br>where you can find all the ecomerce products</h3>
        <button className="button" onClick={handleNavigateToProduct}  >Shop Now</button>
        
    </div>
)};
export default Home;