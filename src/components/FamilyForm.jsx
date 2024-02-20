import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";

const FamilyForm = () => {
  // Hardcoded JSON data
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
          name: "Province/Country",
          type: "province_country",
          value: "Bagmati",
        },
        {
          name: "District",
          type: "district",
          value: "Lalitpur",
        },
        {
          name: "Municipality",
          type: "municipality",
          value: "Lalitpur",
        },
        {
          name: "Ward Number",
          type: "ward",
          value: "3",
        },
        {
          name: "Tole Name",
          type: "tole",
          value: "3",
        },
      ],
      _contact: [
        {
          name: "Mobile Number",
          type: "mobile",
          value: "9841252849",
        },
        {
          name: "Landline Number",
          type: "landline",
          value: "01545386",
        },
        {
          name: "Email",
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
            name: "Province/Country",
            type: "province_country",
            value: "Bagmati",
          },
          {
            name: "District",
            type: "district",
            value: "Lalitpur",
          },
          {
            name: "Municipality",
            type: "municipality",
            value: "Lalitpur",
          },
          {
            name: "Ward Number",
            type: "ward",
            value: "3",
          },
          {
            name: "Tole Name",
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

  const [numFamilyMembers, setNumFamilyMembers] = useState(1);

  const incrementFamilyMembers = () => {
    setNumFamilyMembers((prevNum) => prevNum + 1);
  };

  return (
    <Formik
      initialValues={{
        _identifier: "",
        _family_head_name: ["", ""],
        _current_address: [
          {
            name: "Province/Country",
            type: "province_country",
            value: "",
          },
          {
            name: "District",
            type: "district",
            value: "",
          },
          {
            name: "Municipality",
            type: "municipality",
            value: "",
          },
          {
            name: "Ward Number",
            type: "ward",
            value: "",
          },
          {
            name: "Tole Name",
            type: "tole",
            value: "",
          },
        ],
        _contact: [
          {
            name: "Mobile Number",
            type: "mobile",
            value: "",
          },
          {
            name: "Landline Number",
            type: "landline",
            value: "",
          },
          {
            name: "Email",
            type: "email",
            value: "",
          },
        ],
        family_details: Array.from({ length: numFamilyMembers }, () => ({
          name: { f_name: "", m_name: "", l_name: "" },
          relation: { a: 0, b: 1 },
          gender: "",
          dob_yyyy: "",
          dob_mm: "",
          dob_dd: "",
          education: "",
          work_accomplishments: [], // Initialize as an empty array
          work_profession: [], // Initialize as an empty array
          current_address: [
            {
              name: "Province/Country",
              type: "province_country",
              value: "",
            },
            {
              name: "District",
              type: "district",
              value: "",
            },
            {
              name: "Municipality",
              type: "municipality",
              value: "",
            },
            {
              name: "Ward Number",
              type: "ward",
              value: "",
            },
            {
              name: "Tole Name",
              type: "tole",
              value: "",
            },
          ],
          contact: [
            {
              name: "Mobile Number",
              type: "mobile",
              value: "",
            },
            {
              name: "Landline Number",
              type: "landline",
              value: "",
            },
            {
              name: "Email",
              type: "email",
              value: "",
            },
          ], // Initialize contact details
        })),
      }}
      onSubmit={(values) => {
        // Convert values to JSON format
        const jsonData = {
          _identifier: values._identifier,
          _meta: {
            _family_head_name: values._family_head_name.map((name) => ({
              type: "en",
              value: name,
            })),
            _current_address: values._current_address.map((value, index) => ({
              type:
                index == 0
                  ? "province_country"
                  : index === 1
                  ? "district"
                  : index === 2
                  ? "municipality"
                  : index == 3
                  ? "ward"
                  : "tole",
              name: value.name,
              value: value.value,
            })),
            _contact: values._contact.map((value, index) => ({
              type: index === 0 ? "mobile" : index === 1 ? "landline" : "email",
              name: value.name,
              value: value.value,
            })),
          },
          family_details: values.family_details.map((member) => ({
            ...member,
            dob: {
              yyyy: member.dob_yyyy,
              mm: member.dob_mm,
              dd: member.dob_dd,
            },
            work: {
              accomplishments: member.work_accomplishments,
              profession: member.work_profession,
            },
            current_address: values._current_address.map((addressField) => ({
              type: addressField.type,
              name: addressField.name,
              value: addressField.value,
            })),
            contact: member.contact.map((value, index) => ({
              type: index === 0 ? "mobile" : index === 1 ? "landline" : "email",
              value,
            })),
          })),
        };

        // Log JSON data to the console
        const jsonString = JSON.stringify(jsonData);

        // Log JSON string to the console
        console.log(jsonString);
      }}
    >
      {({ values }) => (
        <Form className="max-w-2xl mx-auto mt-8 p-4 bg-gray-100 rounded">
          <div className="mb-4">
            <label className="block">Generation</label>
            <div className="flex">
              {[...Array(11)].map((_, index) => (
                <Field
                  key={index}
                  name={`_identifier.${index}`}
                  type="text"
                  maxLength={1}
                  className="w-8 h-8 text-center border rounded mr-1"
                />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Family Head Name</label>
            <FieldArray name="_family_head_name">
              {(arrayHelpers) => (
                <div>
                  {values._family_head_name.map((name, index) => (
                    <Field
                      key={index}
                      name={`_family_head_name.${index}`}
                      type="text"
                      className="w-full mb-2 p-2 border rounded"
                      placeholder={
                        index === 0
                          ? "Family Head Name (English)"
                          : "पारिवारिक मुख्य नाम (नेपाली)"
                      }
                    />
                  ))}
                </div>
              )}
            </FieldArray>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Current Address</label>
            {values._current_address.map((addressField, index) => (
              <div key={index}>
                {/* <label>{addressField.name}</label> */}
                <Field
                  name={`_current_address.${index}.value`}
                  type="text"
                  placeholder={addressField.name}
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Contact</label>
            {values._contact.map((contactField, index) => (
              <div key={index}>
                {/* <label>{contactField.name}</label> */}
                <Field
                  name={`_contact.${index}.value`}
                  type="text"
                  placeholder={contactField.name}
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}
          </div>

          <label className="block mb-2">Family Member Details</label>

          <FieldArray name="family_details">
            {(arrayHelpers) => (
              <div>
                {values.family_details.map((member, index) => (
                  <div key={index} className="mb-4 border rounded p-4">
                    <div className="mb-2">
                      <label>First Name</label>
                      <Field
                        name={`family_details.${index}.name.f_name`}
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label>Middle Name</label>
                      <Field
                        name={`family_details.${index}.name.m_name`}
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label>Last Name</label>
                      <Field
                        name={`family_details.${index}.name.l_name`}
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label>Gender</label>
                      <Field
                        name={`family_details.${index}.gender`}
                        as="select"
                        className="w-full p-2 border rounded"
                      >
                        <option value="">Select Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </Field>
                    </div>
                    <div className="mb-2">
                      <label>Date of Birth</label>
                      <div className="flex">
                        <Field
                          name={`family_details.${index}.dob_yyyy`}
                          type="text"
                          placeholder="YYYY"
                          className="w-1/3 p-2 border rounded mr-2"
                        />
                        <Field
                          name={`family_details.${index}.dob_mm`}
                          type="text"
                          placeholder="MM"
                          className="w-1/3 p-2 border rounded mr-2"
                        />
                        <Field
                          name={`family_details.${index}.dob_dd`}
                          type="text"
                          placeholder="DD"
                          className="w-1/3 p-2 border rounded"
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <label>Relation</label>
                      <div className="flex">
                        <Field
                          name={`family_details.${index}.relation.a`}
                          type="hidden"
                          value={member.relation.a} // Hidden field to store value of a
                        />
                        <Field
                          name={`family_details.${index}.relation.b`}
                          type="hidden"
                          value={member.relation.b} // Hidden field to store value of b
                        />
                        <Field
                          name={`family_details.${index}.relation`}
                          as="select"
                          className="w-full p-2 border rounded"
                        >
                          <option value="01">Self</option>
                          <option value="02">Spouse</option>
                          <option value="03">Son/Daughter</option>
                        </Field>
                      </div>
                    </div>
                    <div className="mb-2">
                      <label>Education Level</label>
                      <Field
                        name={`family_details.${index}.education`}
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label>Accomplishments</label>
                      <FieldArray
                        name={`family_details.${index}.work_accomplishments`}
                      >
                        {(arrayHelpers) => (
                          <div>
                            {member.work_accomplishments.map((item, i) => (
                              <div key={i} className="flex mb-2">
                                <Field
                                  name={`family_details.${index}.work_accomplishments.${i}`}
                                  type="text"
                                  className="w-full p-2 border rounded mr-2"
                                />
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(i)}
                                  className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                  Remove
                                </button>
                              </div>
                            ))}
                            <button
                              type="button"
                              onClick={() => arrayHelpers.push("")}
                              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                            >
                              Add Accomplishment
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                    <div className="mb-2">
                      <label>Profession</label>
                      <FieldArray
                        name={`family_details.${index}.work_profession`}
                      >
                        {(arrayHelpers) => (
                          <div>
                            {member.work_profession.map((item, i) => (
                              <div key={i} className="flex mb-2">
                                <Field
                                  name={`family_details.${index}.work_profession.${i}`}
                                  type="text"
                                  className="w-full p-2 border rounded mr-2"
                                />
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(i)}
                                  className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                  Remove
                                </button>
                              </div>
                            ))}
                            <button
                              type="button"
                              onClick={() => arrayHelpers.push("")}
                              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                            >
                              Add Profession
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2">Contact</label>
                      {member.contact.map((contactField, index) => (
                        <div key={index}>
                          {/* <label>{contactField.name}</label> */}
                          <Field
                            name={`contact.${index}.value`}
                            type="text"
                            placeholder={contactField.name}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mb-4">
                      <label className="block mb-2">Current Address</label>
                      {Array.isArray(member.current_address) &&
                        member.current_address.map((currentAddress, index) => (
                          <div key={index}>
                            {/* <label>{contactField.name}</label> */}
                            <Field
                              name={`current_address.${index}.value`}
                              type="text"
                              placeholder={currentAddress.name}
                              className="w-full p-2 border rounded"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    arrayHelpers.push({
                      name: { f_name: "", m_name: "", l_name: "" },
                      relation: { a: 0, b: 1 },
                      gender: "",
                      dob_yyyy: "",
                      dob_mm: "",
                      dob_dd: "",
                      education: "",
                      work_accomplishments: [],
                      work_profession: [],
                      current_address: [
                        // Initialize current_address as an array
                        {
                          name: "Province/Country",
                          type: "province_country",
                          value: "",
                        },
                        {
                          name: "District",
                          type: "district",
                          value: "",
                        },
                        {
                          name: "Municipality",
                          type: "municipality",
                          value: "",
                        },
                        {
                          name: "Ward Number",
                          type: "ward",
                          value: "",
                        },
                        {
                          name: "Tole Name",
                          type: "tole",
                          value: "",
                        },
                      ],
                      contact: [
                        {
                          name: "Mobile Number",
                          type: "mobile",
                          value: "",
                        },
                        {
                          name: "Landline Number",
                          type: "landline",
                          value: "",
                        },
                        {
                          name: "Email",
                          type: "email",
                          value: "",
                        },
                      ],
                    })
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded my-6"
                >
                  Add Family Member
                </button>
              </div>
            )}
          </FieldArray>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FamilyForm;
