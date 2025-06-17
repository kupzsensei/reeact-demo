export default function StepTwo() {
  return (
    <form className="flex gap-3">
      <h1>this is step 2</h1>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          className="px-3 py-1 border border-gray"
          placeholder="First Name"
        />
        <input
          type="text"
          className="px-3 py-1 border border-gray"
          placeholder="Last Name"
        />
        <input
          type="text"
          className="px-3 py-1 border border-gray"
          placeholder="Middle Name (Optional)"
        />
        <input
          type="date"
          className="px-3 py-1 border border-gray"
          placeholder="Birth Date"
        />
        <select name="gender" className="px-3 py-1 border border-gray">
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
        <input
          type="text"
          className="px-3 py-1 border border-gray"
          placeholder="Nationality"
        />
      </div>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          className="px-3 py-1 border border-gray"
          placeholder="Religion"
        />
        <input
          type="text"
          className="px-3 py-1 border border-gray"
          placeholder="Contact number"
        />
        <input
          type="email"
          className="px-3 py-1 border border-gray"
          placeholder="Email address"
        />
        <textarea
          type="t"
          className="px-3 py-1 border border-gray"
          placeholder="Address"
        />
        <input
          type="text"
          className="px-3 py-1 border border-gray"
          placeholder="Birth Place"
        />
        <input
          type="text"
          className="px-3 py-1 border border-gray"
          placeholder="LRN Number (if available)"
        />
      </div>
    </form>
  );
}
