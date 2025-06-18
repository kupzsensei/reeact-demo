import { useEffect, useRef } from "react";
import { usePersistentForm } from "../hooks/usePersistentForm";

export default function StepOne() {
  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const mnameRef = useRef(null);
  const bdateRef = useRef(null);
  const genderRef = useRef(null);
  const nationalityRef = useRef(null);
  const religionRef = useRef(null);
  const contactRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const bplaceRef = useRef(null);
  const lrnRef = useRef(null);

  const fieldToPersist = {
    fname: fnameRef,
    lname: lnameRef,
    mname: mnameRef,
    bdateRef,
    gender: genderRef,
    nationality: nationalityRef,
    religion: religionRef,
    contact: contactRef,
    email: emailRef,
    address: addressRef,
    birth_place: bplaceRef,
    lrn: lrnRef,
  };

  usePersistentForm({ refs: fieldToPersist });

  return (
    <form className="flex gap-3">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          ref={fnameRef}
          className="px-3 py-1 border border-gray"
          placeholder="First Name"
        />
        <input
          type="text"
          ref={lnameRef}
          className="px-3 py-1 border border-gray"
          placeholder="Last Name"
        />
        <input
          type="text"
          ref={mnameRef}
          className="px-3 py-1 border border-gray"
          placeholder="Middle Name (Optional)"
        />
        <input
          type="date"
          ref={bdateRef}
          className="px-3 py-1 border border-gray"
          placeholder="Birth Date"
        />
        <select
          name="gender"
          ref={genderRef}
          className="px-3 py-1 border border-gray"
        >
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
        <input
          type="text"
          ref={nationalityRef}
          className="px-3 py-1 border border-gray"
          placeholder="Nationality"
        />
      </div>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          ref={religionRef}
          className="px-3 py-1 border border-gray"
          placeholder="Religion"
        />
        <input
          type="text"
          ref={contactRef}
          className="px-3 py-1 border border-gray"
          placeholder="Contact number"
        />
        <input
          type="email"
          ref={emailRef}
          className="px-3 py-1 border border-gray"
          placeholder="Email address"
        />
        <textarea
          ref={addressRef}
          className="px-3 py-1 border border-gray"
          placeholder="Address"
        />
        <input
          type="text"
          ref={bplaceRef}
          className="px-3 py-1 border border-gray"
          placeholder="Birth Place"
        />
        <input
          type="text"
          ref={lrnRef}
          className="px-3 py-1 border border-gray"
          placeholder="LRN Number (if available)"
        />
      </div>
    </form>
  );
}
