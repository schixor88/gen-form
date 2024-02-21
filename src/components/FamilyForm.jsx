import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import FamilyMemberDetails from "./form/FamilyMember";

const FamilyForm = ({ onFormSubmit }) => {
  const [numFamilyMembers, setNumFamilyMembers] = useState(1);

  return (
    <Formik
      initialValues={{
        _generation: "",
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
          // dob_yyyy: "",
          // dob_mm: "",
          // dob_dd: "",
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
          _generation: values._generation,
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
            // work: {
            //   accomplishments: member.work_accomplishments,
            //   profession: member.work_profession,
            // },
            current_address: member.current_address.map((addressField) => ({
              type: addressField.type,
              name: addressField.name,
              value: addressField.value,
            })),
            contact: member.contact.map((contactField) => ({
              type: contactField.type,
              name: contactField.name,
              value: contactField.value,
            })),
          })),
        };

        // Log JSON data to the console
        const jsonString = JSON.stringify(jsonData);

        // Log JSON string to the console
        console.log(jsonString);
        console.log(jsonData);
        onFormSubmit(jsonData);
      }}
    >
      {({ values }) => (
        <Form className="max-w-2xl mx-auto p-4 bg-gray-100 rounded">
          {/* <pre>{JSON.stringify(values.family_details, null, 4)}</pre> */}
          <div className="mb-4">
            <label className="block">Generation</label>
            <div className="flex">
              {[...Array(11)].map((_, index) => (
                <Field
                  key={index}
                  name={`_generation.${index}`}
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
                  <FamilyMemberDetails
                    key={index}
                    member={member}
                    index={index}
                  />
                ))}
                <button
                  type="button"
                  onClick={() =>
                    arrayHelpers.push({
                      name: { f_name: "", m_name: "", l_name: "" },
                      relation: {
                        a: 0, // Default value for 'a' property
                        b: 1, // Default value for 'b' property
                      },
                      gender: "", // Default value for gender
                      // dob_yyyy: "", // Default value for year of birth
                      // dob_mm: "", // Default value for month of birth
                      // dob_dd: "", // Default value for day of birth
                      education: "", // Default value for education
                      work_accomplishments: [], // Default value for work accomplishments
                      work_profession: [], // Default value for work profession
                      current_address: [
                        // Default values for current address
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
                        // Default values for contact
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
