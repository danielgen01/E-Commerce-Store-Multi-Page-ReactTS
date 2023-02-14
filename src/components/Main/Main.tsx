import React from 'react'
import './Main.css'

const Main:React.FC = () => {
  return (
    <>
    <div className='Main'>
      <div className='shop-items-ctn'>
        {/* PRODUCT 1 */}
        <div className='item-ctn col-s-6 col-4'>
          <h2>iPhone 12</h2>
          <img src='https://files.refurbed.com/ii/iphone-12-1607327724.jpg?t=resize&h=600&w=800'
          className='product-img' />
          <h2>699€</h2>
          <input type="number"
            defaultValue="1"
            max="9"
            min="1"
            className="input-box-products-page"
          />
        </div>

         {/* PRODUCT 2 */}
         <div className='item-ctn col-s-6 col-4'>
          <h2>iPhone SE (2020)</h2>
          <img src='https://files.refurbed.com/ii/iphone-se-2020-1587013419.jpg?t=resize&h=600&w=800'
          className='product-img' />
          <h2>399€</h2>
          <input type="number"
            defaultValue="1"
            max="9"
            min="1"
            className="input-box-products-page"
          />
        </div>

        {/* PRODUCT 3 */}
        <div className='item-ctn col-s-6 col-4'>
          <h2>iPhone X 64GB</h2>
          <img src='https://www.backmarket.de/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d1eh9yux7w8iql.cloudfront.net/product_images/36833_4776bbd6-9959-4ea1-85e1-3214d47d481f.jpg?t=resize&h=600&w=800'
          className='product-img' />
          <h2>439€</h2>
          <input type="number"
            defaultValue="1"
            max="9"
            min="1"
            className="input-box-products-page"
          />
        </div>

          {/* PRODUCT 4 */}
          <div className='item-ctn col-s-6 col-4'>
          <h2>Macbook Pro 16" (2019)</h2>
          <img src='https://www.backmarket.de/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/374162_f5cfdc0c-18de-48aa-b150-0359bf861b48.jpg?t=resize&h=600&w=800'
          className='product-img' />
          <h2>439€</h2>
          <input type="number"
            defaultValue="1"
            max="9"
            min="1"
            className="input-box-products-page"
          />
        </div>

        {/* PRODUCT 5 */}
        <div className='item-ctn col-s-6 col-4'>
          <h2>iPad pro 11 (2021) 3.Gen</h2>
          <img src='https://www.backmarket.de/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d1eh9yux7w8iql.cloudfront.net/product_images/474635_0c643fb4-9e2d-4fd7-a6d4-4f756cd309f0.jpg?t=resize&h=600&w=800'
          className='product-img' />
          <h2>879€</h2>
          <input type="number"
            defaultValue="1"
            max="9"
            min="1"
            className="input-box-products-page"
          />
        </div>

        {/* PRODUCT 6 */}
        <div className='item-ctn col-s-6 col-4'>
          <h2>AirPods (2016) mit Ladecase</h2>
          <img src='https://www.backmarket.de/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d1eh9yux7w8iql.cloudfront.net/product_images/50789_5b970288-1d95-494e-a149-69779243b83a.jpg?t=resize&h=600&w=800'
          className='product-img' />
          <h2>129€</h2>
          <input type="number"
            defaultValue="1"
            max="9"
            min="1"
            className="input-box-products-page"
          />
        </div>

      </div>
    </div>
  </>)
}

export default Main