"use client";

import React from "react";
import { Range } from "react-range";

const PRICE_MIN = 6000000;
const PRICE_MAX = 13000000;
const STEP = 100000;

export default function PriceSlider({ values, setValues }) {
  return (
    <div className="price-range filter-tags" style={{padding:'1rem'}}>
      <h4>Budget (₹):</h4>

      <Range
        values={values}
        step={STEP}
        min={PRICE_MIN}
        max={PRICE_MAX}
        onChange={(vals) => setValues(vals)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              background: "#ddd",
              borderRadius: "4px",
              marginTop: "20px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "6px",
                background: "#4f46e5",
                borderRadius: "4px",
                left: `${((values[0] - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100}%`,
                width: `${((values[1] - values[0]) / (PRICE_MAX - PRICE_MIN)) * 100}%`,
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props }) => {
            const { key, ...rest } = props; 
            return (
              <div
                key={key}          
                {...rest}          
                style={{
                  ...rest.style,
                  height: "18px",
                  width: "18px",
                  borderRadius: "50%",
                  backgroundColor: "#4f46e5",
                  cursor: "pointer",
                }}
              />
            );
          }}
          
          
      />

      <div className="price-values">
        ₹{(values[0] / 100000).toFixed(1)}L - ₹{(values[1] / 100000).toFixed(1)}L
      </div>
    </div>
  );
}
