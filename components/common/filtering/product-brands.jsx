import React from "react";
import useGlobalContext from "../../../hooks/use-context";

const ProductBrands = () => {
  const { resetFiltering, filteringBrands } = useGlobalContext();
  const brands = ["Maple", "Oak", "Willow", "Walnut"];
  return (
    <>
      <div className="sidebar__widget mb-50">
        <div className="sidebar__widget-title mb-25">
          <h3>Wood</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="brand">
            <ul>
              {brands.map((brand, index) => (
                <li key={index} onClick={() => filteringBrands(brand)}>
                  <button>{brand}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="reset-button mt-20">
          <button onClick={resetFiltering}>Reset Filters</button>
        </div>
      </div>
    </>
  );
};

export default ProductBrands;
