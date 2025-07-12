"use client";

import React, { useState } from "react";
import "../styles/Sidebar.css";
import PriceSlider from "./PriceSlider";

function handleCheckboxChange(value, selected, setSelected) {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
    console.log(selected,value)
  }
  

  export default function Sidebar({
    searchQuery,
    setSearchQuery,
    sortOption,
    setSortOption,
    priceRange,
    setPriceRange,
    selectedLocations,
    setSelectedLocations,
    selectedTypes,
    setSelectedTypes,
    selectedBedrooms,
    setSelectedBedrooms,
    selectedAmenities,
    setSelectedAmenities,
  }) {

  const sortLabels = {
    "": "Featured",
    "price-asc": "Price Low to High",
    "price-desc": "Price High to Low",
    "area-asc": "Area Smallest to Largest",
    "area-desc": "Area Largest to Smallest",
    "newest": "Most Recent",
  };
  const locations = ["Ahmedabad","Bangalore","Chennai","Delhi","Hyderabad","Kolkata","Mumbai","Pune"]
  const bedroom_s = ["2","3","4"]
  const amenitie_s = ['Garden','Pool','Balcony','Parking','Elevator']

  
  return (
    <div className="sidebar">
        <div className="sidebar">
            <div className="search-bar">
                <input
                type="text"
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>
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
                    {
                        locations.map((elem,idx) => (
                            <li key={idx}>
                            <input
                                type="checkbox"
                                id={elem}
                                checked={selectedLocations.includes(elem)}
                                onChange={() =>
                                    handleCheckboxChange(elem, selectedLocations, setSelectedLocations)}
                            />

                                <label htmlFor={elem}>{elem}</label>
                            </li>

                        ))
                    }
                </ul>
            </div>
            <div className="prop-type filter-tags">
                <h4>Property Type:</h4>
                <ul>
                    <li>
                        <input
                                type="checkbox"
                                id='Flat'
                                checked={selectedTypes.includes('Flat')}
                                onChange={() =>
                                    handleCheckboxChange('Flat', selectedTypes, setSelectedTypes)}
                            />
                        <label htmlFor="Flat">Flat</label>
                    </li>
                    <li>
                        <input
                                type="checkbox"
                                id='Villa'
                                checked={selectedTypes.includes('Villa')}
                                onChange={() =>
                                    handleCheckboxChange('Villa', selectedTypes, setSelectedTypes)}
                            />
                        <label htmlFor="Villa">Villa</label>
                    </li>
                
                </ul>
            </div>
            <div className="bedrooms filter-tags">
                <h4>Bedrooms:</h4>
                <ul>
                    {
                        bedroom_s.map((elem,idx) => (
                    <li key={idx}>
                        <input
                                type="checkbox"
                                id={elem}
                                checked={selectedBedrooms.includes(elem)}
                                onChange={() =>
                                    handleCheckboxChange(elem, selectedBedrooms, setSelectedBedrooms)
                                }
                            />
                        <label htmlFor={elem}>{elem} BHK</label>
                    </li>

                        ))
                    }
                </ul>
            </div>
            <div className="amenities filter-tags">
                <h4>Amenities:</h4>
                <ul>
                    {
                        amenitie_s.map((elem,idx) => (
                    <li key={idx}>
                        <input
                                type="checkbox"
                                id={elem}
                                checked={selectedAmenities.includes(elem)}
                                onChange={() =>
                                    handleCheckboxChange(elem, selectedAmenities, setSelectedAmenities)}
                            />
                        <label htmlFor={elem}>{elem}</label>
                    </li>

                        ))
                    }
                </ul>
            </div>
            <div className="filter-action">
                <button onClick={() => {
                    setPriceRange([6000000, 13000000]);
                    setSelectedLocations([]);
                    setSelectedTypes([]);
                    setSelectedBedrooms([]);
                    setSelectedAmenities([]);
                    setSortOption("");
                    setSearchQuery("")
                }}>
                    Clear All
                </button>

            </div>
        </div>
    </div>
  );
}
