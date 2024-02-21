import React, { useState } from "react";

const MyTable = () => {
  // State to store the input values for each row
  const [inputValues, setInputValues] = useState(Array(10).fill(""));

  // Function to handle changes in the input values
  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Column 1
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Column 2
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Column 3 (Number Input)
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {/* Render 10 rows */}
        {inputValues.map((value, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-no-wrap">{`Row ${
              index + 1
            } Text 1`}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{`Row ${
              index + 1
            } Text 2`}</td>
            <td className="px-6 py-4 whitespace-no-wrap">
              <input
                type="number"
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
