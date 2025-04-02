import React, { useState } from "react";
import "./SelectedCountry.css";

const SelectCountry = () => {
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setShowResult(false);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setShowResult(false);
  };

  const handleClick = () => {
    if (country && language) {
      setShowResult(true);
    }
  };

  return (
    <div className="select-country-container">
      <div className="select-group">
        <label htmlFor="country-select">Country</label>
        <select
          id="country-select"
          value={country}
          onChange={handleCountryChange}
          required
        >
          <option value="">Select Country...</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Japan">Japan</option>
          <option value="Germany">Germany</option>
          <option value="Nepal">Nepal</option>
        </select>
      </div>

      <div className="select-group">
        <label htmlFor="language-select">Language</label>
        <select
          id="language-select"
          value={language}
          onChange={handleLanguageChange}
          required
        >
          <option value="">Select Language...</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
          <option value="Japanese">Japanese</option>
          <option value="German">German</option>
          <option value="Nepali">Nepali</option>
        </select>
      </div>

      <button onClick={handleClick} disabled={!country || !language}>
        Check
      </button>

      {showResult && (
        <p>
          My Country is {country} and my language is {language}
        </p>
      )}
    </div>
  );
};

export default SelectCountry;
