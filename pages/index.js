
import React from 'react';
import HeroBanner from './components/HeroBanner'
import Product from './components/Product'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Cart from './components/Cart'
import FooterBanner from './components/FooterBanner'
import {client} from '../lib/client';




 const Home = ({ product,Herobanner})=> {
  return <div>
    <HeroBanner heroBanner={Herobanner.length && Herobanner[0]}  />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>Best Earphones and earbuds for Purchase</p>
    </div>

    <div className="products-container">
      {product?.map((product) => <Product key={product._id} product={product} />)}

    </div>
    <FooterBanner footerBanner={Herobanner.length && Herobanner[0]}  />
    
  </div>
        
                         }
export default Home;



export  const getStaticProps=async()=> {
  const queryp='*[_type == "product"]';
  const product = await client.fetch(queryp);
  
  const queryb='*[_type == "banner"]';

  const Herobanner = await client.fetch(queryb);

  return {
    props: {product,
       Herobanner
    }
  };
}
