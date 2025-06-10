import React, { useState, useEffect } from "react";

const NumberFormatConverter = () => {
  const [input, setInput] = useState("");
  const [base, setBase] = useState("decimal");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (input === "") {
      setResult(null);
      setError("");
      return;
    }

    try {
      let num;
      switch (base) {
        case "binary":
          num = parseInt(input, 2);
          break;
        case "octal":
          num = parseInt(input, 8);
          break;
        case "decimal":
          num = parseInt(input, 10);
          break;
        case "hex":
          num = parseInt(input, 16);
          break;
        default:
          num = NaN;
      }

      if (isNaN(num)) throw new Error("Invalid number format");

      setResult({
        decimal: num.toString(10),
        binary: num.toString(2),
        octal: num.toString(8),
        hex: num.toString(16).toUpperCase(),
      });

      setError("");
    } catch (e) {
      setError("Invalid input");
      setResult(null);
    }
  }, [input, base]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>🔢 Number Format Converter</h2>

      <div>
        <label>Choose input format: </label>
        <select value={base} onChange={(e) => setBase(e.target.value)}>
          <option value="decimal">Decimal</option>
          <option value="binary">Binary</option>
          <option value="octal">Octal</option>
          <option value="hex">Hexadecimal</option>
        </select>
      </div>

      <input
        style={{ marginTop: "1rem", padding: "0.5rem", width: "200px" }}
        placeholder="Enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && !error && (
        <div style={{ marginTop: "1rem" }}>
          <p>Decimal: {result.decimal}</p>
          <p>Binary: {result.binary}</p>
          <p>Octal: {result.octal}</p>
          <p>Hexadecimal: {result.hex}</p>
        </div>
      )}
    </div>
  );
};

export default NumberFormatConverter;
