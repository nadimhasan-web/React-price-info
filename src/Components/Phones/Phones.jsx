import { useEffect, useState } from "react";


const Phones = () => {
    const [phone, setPhone] = useState([]);
    useEffect
    const phoneData = [
        {
          "id": 1,
          "brand": "Samsung",
          "model": "Galaxy S21 Ultra",
          "release_year": 2021,
          "price": 1199.99,
          "screen_size": 6.8,
        },
        {
          "id": 2,
          "brand": "Apple",
          "model": "iPhone 13 Pro Max",
          "release_year": 2021,
          "price": 1099.00,
          "screen_size": 6.7,
        },
        {
          "id": 3,
          "brand": "Google",
          "model": "Pixel 6 Pro",
          "release_year": 2021,
          "price": 899.00,
          "screen_size": 6.7,
        },
        {
          "id": 4,
          "brand": "OnePlus",
          "model": "9 Pro",
          "release_year": 2021,
          "price": 969.00,
          "screen_size": 6.7,
        },
        {
          "id": 5,
          "brand": "Xiaomi",
          "model": "Mi 11 Ultra",
          "release_year": 2021,
          "price": 1199.00,
          "screen_size": 6.81,
        },
        {
          "id": 6,
          "brand": "Huawei",
          "model": "Mate 40 Pro",
          "release_year": 2020,
          "price": 999.00,
          "screen_size": 6.76,
        },
        {
          "id": 7,
          "brand": "Sony",
          "model": "Xperia 1 III",
          "release_year": 2021,
          "price": 1299.00,
          "screen_size": 6.5,
        },
        {
          "id": 8,
          "brand": "Motorola",
          "model": "Edge+",
          "release_year": 2020,
          "price": 999.99,
          "screen_size": 6.7,
        },
        {
          "id": 9,
          "brand": "LG",
          "model": "Wing",
          "release_year": 2020,
          "price": 999.99,
          "screen_size": 6.8,
        },
        {
          "id": 10,
          "brand": "Oppo",
          "model": "Find X3 Pro",
          "release_year": 2021,
          "price": 1149.00,
          "screen_size": 6.7,
        }
      ]
      
    return (
        <div>
            {/* {
                phoneData.map(data =>{
                    const obj ={
                        brand: data.brand,
                        price: data.price,
                    }
                })
                return obj;
            } */}
        </div>
    );
};

export default Phones;