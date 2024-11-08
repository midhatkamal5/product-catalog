// src/components/ProductCatalog.js
import React from 'react';
import ProductCard from './ProductCard';
import styles from './styles/catalog.module.css';

function ProductCatalog (){
  const products = [
    {
      id: 1,
      name: "IPhone 15",
      price: "$299",
      description: "Latest model with all-new features.",
      image: "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-color-lineup-230912_big.jpg.large.jpg",
      category: "Electronics",
      rating: 4
    },
    {
      id: 2,
      name: "T-shirt",
      price: "$19",
      description: "100% cotton, very comfortable.",
      image: "https://img.lovepik.com/free-png/20210919/lovepik-cotton-short-sleeved-t-shirt-png-image_400477563_wh1200.png",
      category: "Clothing",
      rating: 3
    },
    {
      id: 3,
      name: "Handsfree",
      price: "$10",
      description: "Latest model with all-new features.",
      image: "https://img.freepik.com/free-vector/wireless-headphones-realistic-composition_1284-71370.jpg",
      category: "Electronics",
      rating: 4
    },
    {
      id: 4,
      name: "Cotton Jeans",
      price: "$15",
      description: "Comfortable jeans for daily wear.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbTx7GNrW-VEYs2e0NJeeLnTy1Tp1X5jAYw&s",
      category: "Clothing",
      rating: 3
    },
    {
      id: 5,
      name: "Steam Iron",
      price: "$15",
      description: "Steam iron your clothes easily in a jiffy",
      image: "https://electrogallery.com.pk/wp-content/uploads/2023/06/Mini-Foldable-Travel-Steam-Iron-HF-258B-02.webp",
      category: "Electronics",
      rating: 3
    },
    {
      id: 6,
      name: "Formal Shirt",
      price: "$15",
      description: "100% cotton slim fit wear shirt",
      image: "https://frankshop.co.in/cdn/shop/files/download_1_d3a8c57f-5b72-48af-a615-57dfaa69bf0a.png?v=1717857083",
      category: "Clothing",
      rating: 5
    },
    {
      id: 7,
      name: "Straightner",
      price: "$15",
      description: "ThermoProtect straightner for all hair types",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKr4X_MECvfQTOD9RjIGDvEM1rIXSo--lFwQ&s",
      category: "Electronics",
      rating: 3.5
    }
  ];

  return (
    <div className={`${styles.catalog} container`}>
      <div className="row justify-content-center">
        {products.map(product => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
