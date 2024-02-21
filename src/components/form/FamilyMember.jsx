import React, { useState } from "react";
import { Field, FieldArray } from "formik";
import MyTable from "../tree/MyTable";

const FamilyMemberDetails = ({ member, index }) => {
  const [alwaysWithSameFamily, setAlwaysWithSameFamily] = useState(false);

  return (
    <div key={index} className="mb-4 border rounded p-4">
      <div className="mb-2">
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
              <option value="01">घरमूली आफै</option>
              <option value="02">श्रीमान / श्रीमती</option>
              <option value="03">पिता / माता</option>
              <option value="04">हजुरबा / हजुरामा</option>
              <option value="05">सनोबा / सनिआमा</option>
              <option value="06">दाजुभाइ / दिदीबहिनी / भाउजु / बुहारी</option>
              <option value="07">छोरा / बुहारी / छोरी / ज्वाइ</option>
              <option value="08">भतिजा / भतिजी / बुहारी ज्वाइ</option>
              <option value="09">
                नाती / नातिनी / नातिनी बुहारी / नातिनि ज्वाइ
              </option>
              <option value="10">फुपु / फुपाजु / मामा / माइजु</option>
              <option value="11">भान्जा / भान्जी / ज्वाइ / बुहारी</option>
              <option value="12">अन्य नाता पर्ने</option>
              <option value="13">
                नाता नपर्ने (सहायोगी वा हेर्नेछ हेर्नेछ)
              </option>
            </Field>
          </div>
        </div>
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
          <label>Education Level</label>
          <Field
            name={`family_details.${index}.education`}
            type="text"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-2">
          <label>Accomplishments</label>
          <FieldArray name={`family_details.${index}.work_accomplishments`}>
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
          <FieldArray name={`family_details.${index}.work_profession`}>
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
          {member.contact.map((contactField, jndex) => (
            <div key={jndex}>
              {/* <label>{contactField.name}</label> */}
              <Field
                name={`family_details.${index}.contact.${jndex}.value`}
                type="text"
                placeholder={contactField.name}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
        </div>

        <div className="mb-2">
          <label>
            <Field
              name={`family_details.${index}.always_with_same_family`}
              type="checkbox"
              checked={alwaysWithSameFamily}
              onChange={(e) => setAlwaysWithSameFamily(e.target.checked)}
            />
            <span className="ml-2">I live together with the same family</span>
          </label>
        </div>

        {!alwaysWithSameFamily && (
          <div className="mb-4">
            <label className="block mb-2">Current Address</label>
            {member.current_address.map((addressField, jndex) => (
              <div key={jndex}>
                {/* <label>{addressField.type}</label> */}
                <Field
                  name={`family_details.${index}.current_address.${jndex}.value`}
                  type="text"
                  placeholder={addressField.name}
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}
          </div>
        )}

        {/* <MyTable /> */}
      </div>
    </div>
  );
};

export default FamilyMemberDetails;
