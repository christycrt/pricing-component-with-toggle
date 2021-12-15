import "./styles/App.scss";

import { useEffect, useState } from "react";

import AnnuallyData from "./data/annually.json";
import MonthlyData from "./data/monthly.json";
import PricingCard from "./components/PricingCard";

const App = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const [data, setData] = useState(AnnuallyData);

  useEffect(() => {
    if (isMonthly) {
      setData(MonthlyData);
    } else {
      setData(AnnuallyData);
    }
  }, [isMonthly]);

  return (
    <div className="App">
      <p className="pricing">Our Pricing</p>
      <div className="form-check form-switch">
        <span className="month">Annually</span>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={isMonthly}
          onChange={() => setIsMonthly(!isMonthly)}
        />
        <span className="month">Monthly</span>
      </div>
      <div className="pricing-container">
        <div className="pricing-wrapper">
          {data.map((d, index) => {
            return (
              <div className="card-wrapper">
                <PricingCard key={index} {...d} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
