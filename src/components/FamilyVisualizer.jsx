import React from "react";

function FamilyVisualizer() {
  const data = {
    _identifier: {
      _1: 1,
      _2: 0,
      _3: 0,
      _4: 0,
      _5: 0,
      _6: 0,
      _7: 0,
      _8: 0,
      _9: 0,
      _10: 0,
      _11: 0,
    },
    _meta: {
      _family_head_name: [
        {
          type: "np",
          value: "Uttam Acharya",
        },
        {
          type: "en",
          value: "Uttam Acharya",
        },
      ],
      _current_address: [
        {
          type: "province_country",
          value: "Bagmati",
        },
        {
          type: "district",
          value: "Lalitpur",
        },
        {
          type: "municipality",
          value: "Lalitpur",
        },
        {
          type: "ward",
          value: "3",
        },
        {
          type: "tole",
          value: "3",
        },
      ],
      _contact: [
        {
          type: "mobile",
          value: "9841252849",
        },
        {
          type: "landline",
          value: "01545386",
        },
        {
          type: "email",
          value: "uttam@gmail.com",
        },
      ],
    },
    family_details: [
      {
        sn: 1,
        name: {
          f_name: "Uttam",
          m_name: "",
          l_name: "Acharya",
        },
        gender: 1,
        relation: {
          a: 0,
          b: 1,
        },
        dob: {
          yyyy: "2025",
          mm: "09",
          dd: "04",
        },
        relationship: 2,
        education: 18,
        work: {
          accomplishments: ["1", "2"],
          profession: ["1", "2"],
        },
        maiden_name: "",
        permanent_member: true,
        current_address: [
          {
            type: "province_country",
            value: "Bagmati",
          },
          {
            type: "district",
            value: "Lalitpur",
          },
          {
            type: "municipality",
            value: "Lalitpur",
          },
          {
            type: "ward",
            value: "3",
          },
          {
            type: "tole",
            value: "3",
          },
        ],
      },
      {
        sn: 2,
        name: {
          f_name: "Pushpa",
          m_name: "",
          l_name: "Acharya",
        },
        gender: 2,
        relation: {
          a: 0,
          b: 2,
        },
        dob: {
          yyyy: "2030",
          mm: "10",
          dd: "12",
        },
        relationship: 2,
        education: 16,
        work: {
          accomplishments: ["1", "2"],
          profession: ["1", "2"],
        },
        maiden_name: "regmi",
        permanent_member: true,
        current_address: [
          {
            type: "province_country",
            value: "Bagmati",
          },
          {
            type: "district",
            value: "Lalitpur",
          },
          {
            type: "municipality",
            value: "Lalitpur",
          },
          {
            type: "ward",
            value: "3",
          },
          {
            type: "tole",
            value: "3",
          },
        ],
      },
      {
        sn: 3,
        name: {
          f_name: "Kushagra",
          m_name: "",
          l_name: "Acharya",
        },
        gender: 1,
        relation: {
          a: 0,
          b: 7,
        },
        dob: {
          yyyy: "2053",
          mm: "08",
          dd: "27",
        },
        relationship: 1,
        education: 16,
        work: {
          accomplishments: ["1", "2"],
          profession: ["1", "2"],
        },
        maiden_name: "",
        permanent_member: true,
        current_address: [
          {
            type: "province_country",
            value: "Bagmati",
          },
          {
            type: "district",
            value: "Lalitpur",
          },
          {
            type: "municipality",
            value: "Lalitpur",
          },
          {
            type: "ward",
            value: "3",
          },
          {
            type: "tole",
            value: "3",
          },
        ],
      },
      {
        sn: 4,
        name: {
          f_name: "Samhita",
          m_name: "",
          l_name: "Acharya",
        },
        gender: 2,
        relation: {
          a: 0,
          b: 7,
        },
        dob: {
          yyyy: "2063",
          mm: "09",
          dd: "16",
        },
        relationship: 1,
        education: 12,
        work: {
          accomplishments: ["1", "2"],
          profession: ["1", "2"],
        },
        maiden_name: "",
        permanent_member: true,
        current_address: [
          {
            type: "province_country",
            value: "Bagmati",
          },
          {
            type: "district",
            value: "Lalitpur",
          },
          {
            type: "municipality",
            value: "Lalitpur",
          },
          {
            type: "ward",
            value: "3",
          },
          {
            type: "tole",
            value: "3",
          },
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Family Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.family_details.map((member) => (
          <div key={member.sn} className="bg-white rounded shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">
              {member.name.f_name} {member.name.l_name}
            </h2>
            <p>Gender: {member.gender === 1 ? "Male" : "Female"}</p>
            <p>
              Date of Birth: {member.dob.yyyy}-{member.dob.mm}-{member.dob.dd}
            </p>
            <p>Education Level: {member.education}</p>
            <p>
              Current Address:{" "}
              {member.current_address.map((addr) => addr.value).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FamilyVisualizer;
