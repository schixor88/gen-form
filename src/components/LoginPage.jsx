import React, { useState } from "react";
import FamilyForm from "./FamilyForm";
import { JSONTree } from "react-json-tree"; // Import JSONTree like this

const LoginPage = () => {
  const [jsonData, setJson] = useState(null);

  const handleFormSubmit = (data) => {
    setJson(data);
  };

  const whiteTheme = {
    scheme: "light",
    base00: "white", // Background color
    base01: "white", // Text color
    base02: "white", // Arrow color
    base03: "orange", // Object key color
    base04: "black", // Object value color
    base05: "black", // Object bracket color
    base06: "black", // Comma color
    base07: "black", // Colon color
    base08: "black", // Undefined, null, and boolean color
    base09: "black", // Integer and number color
    base0A: "black", // String color
    base0B: "blue", // Date color
    base0C: "black", // Symbol color
    base0D: "green", // Identifier color
    base0E: "red", // Template variable color
    base0F: "green", // Markup heading, list, and quote color
  };

  return (
    <div className="flex m-10">
      {/* Column 1 with 30% width */}
      <div className="w-50 mx-10">
        <FamilyForm onFormSubmit={handleFormSubmit} />
      </div>

      {/* Column 2 with 70% width */}
      <div className="w-70 m-10">
        {/* Display JSON data as a tree diagram */}
        {jsonData && <JSONTree data={jsonData} theme={whiteTheme} />}
      </div>
    </div>
  );
};

export default LoginPage;
