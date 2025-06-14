"use client";

import React, { useState } from "react";
import "../styles/Sidebar.css";
import PriceSlider from "./PriceSlider";

export default function Sidebar({ sortOption, setSortOption }) {

  const sortLabels = {
    "": "Featured",
    "price-asc": "Price Low to High",
    "price-desc": "Price High to Low",
    "area-asc": "Area Smallest to Largest",
    "area-desc": "Area Largest to Smallest",
    "newest": "Most Recent",
  };
  const [priceRange, setPriceRange] = useState([6000000, 10000000]);


  return (
    <div className="sidebar">
        <div className="sort-section">
            <label className="sort-label">
                Sort by:{" "}
            </label>
            <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            >
                <option value="">Featured</option>
                <option value="price-asc">Price Low to High</option>
                <option value="price-desc">Price High to Low</option>
                <option value="area-asc">Area Smallest to Largest</option>
                <option value="area-desc">Area Largest to Smallest</option>
            </select>
        </div>
        <div className="filter-section">
            <h1>Filters</h1>
            <PriceSlider values={priceRange} setValues={setPriceRange} />

            <div className="location filter-tags">
                <h4>Location:</h4>
                <ul>
                    <li>
                        <input type="checkbox" id="Ahmedabad" />
                        <label htmlFor="Ahmedabad">Ahmedabad</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Bangalore" />
                        <label htmlFor="Bangalore">Bangalore</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Chennai" />
                        <label htmlFor="Chennai">Chennai</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Delhi" />
                        <label htmlFor="Delhi">Delhi</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Hyderabad" />
                        <label htmlFor="Hyderabad">Hyderabad</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Kolkata" />
                        <label htmlFor="Kolkata">Kolkata</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Mumbai" />
                        <label htmlFor="Mumbai">Mumbai</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Pune" />
                        <label htmlFor="Pune">Pune</label>
                    </li>
                
                </ul>
            </div>
            <div className="prop-type filter-tags">
                <h4>Property Type:</h4>
                <ul>
                    <li>
                        <input type="checkbox" id="Apartment" />
                        <label htmlFor="Apartment">Apartment</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Villa" />
                        <label htmlFor="Villa">Villa</label>
                    </li>
                
                </ul>
            </div>
            <div className="bedrooms filter-tags">
                <h4>Bedrooms:</h4>
                <ul>
                    <li>
                        <input type="checkbox" id="two" />
                        <label htmlFor="two">2 BHK</label>
                    </li>
                    <li>
                        <input type="checkbox" id="three" />
                        <label htmlFor="three">3 BHK</label>
                    </li>
                    <li>
                        <input type="checkbox" id="four" />
                        <label htmlFor="four">4 BHK</label>
                    </li>
                
                </ul>
            </div>
            <div className="amenities filter-tags">
                <h4>Amenities:</h4>
                <ul>
                    <li>
                        <input type="checkbox" id="Garden" />
                        <label htmlFor="Garden">Garden</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Pool" />
                        <label htmlFor="Pool">Pool</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Parking" />
                        <label htmlFor="Parking">Parking</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Balcony" />
                        <label htmlFor="Balcony">Balcony</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Elevator" />
                        <label htmlFor="Elevator">Elevator</label>
                    </li>
                
                </ul>
            </div>
            <div className="filter-action">
                <button>Clear All</button>
                <button>Apply Filter</button>
            </div>
        </div>
    </div>
  );
}
