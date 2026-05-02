// import React, { useState } from "react";

// const CabRegistration = () => {
//   const [form, setForm] = useState({
//     ownerName: "",
//     phone: "",
//     email: "",
//     city: "",
//     cabType: "",
//     carModel: "",
//     carNumber: "",
//     licenseNumber: "",
//     aadhaar: "",
//     rcNumber: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ✅ Save data (localStorage for now)
//     localStorage.setItem("cab_registration", JSON.stringify(form));

//     alert("Cab Registered Successfully 🚀");
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl"
//       >
//         <h2 className="text-2xl font-bold mb-6">Cab Registration</h2>

//         {/* Owner Details */}
//         <input name="ownerName" placeholder="Owner Name" onChange={handleChange} className="input" required />
//         <input name="phone" placeholder="Phone Number" onChange={handleChange} className="input" required />
//         <input name="email" placeholder="Email" onChange={handleChange} className="input" required />

//         {/* Cab Details */}
//         <input name="city" placeholder="City" onChange={handleChange} className="input" required />
//         <input name="cabType" placeholder="Cab Type (Sedan/SUV)" onChange={handleChange} className="input" required />
//         <input name="carModel" placeholder="Car Model" onChange={handleChange} className="input" required />
//         <input name="carNumber" placeholder="Car Number" onChange={handleChange} className="input" required />

//         {/* Documents */}
//         <input name="licenseNumber" placeholder="Driving License Number" onChange={handleChange} className="input" required />
//         <input name="aadhaar" placeholder="Aadhaar Number" onChange={handleChange} className="input" required />
//         <input name="rcNumber" placeholder="RC Number" onChange={handleChange} className="input" required />

//         <button className="bg-blue-600 text-white w-full py-2 rounded mt-4">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CabRegistration;
























// import { useState, useEffect } from "react";

// const MMT_RED = "#E31837";

// const STATES = [
//   "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa",
//   "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
//   "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan",
//   "Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Other",
// ];

// const BANKS = [
//   "State Bank of India","HDFC Bank","ICICI Bank","Axis Bank","Punjab National Bank",
//   "Bank of Baroda","Kotak Mahindra Bank","Canara Bank","Union Bank of India","Yes Bank",
//   "IndusInd Bank","IDFC First Bank","Federal Bank","Other",
// ];

// const CAR_BRANDS = [
//   "Maruti Suzuki","Hyundai","Tata","Honda","Toyota","Mahindra","Kia","Ford",
//   "Renault","Skoda","Volkswagen","MG","Other",
// ];

// const currentYear = new Date().getFullYear();
// const YEARS = Array.from({ length: currentYear - 1999 }, (_, i) => currentYear - i);

// const initialForm = {
//   // Owner
//   ownerName: "", dob: "", gender: "", phone: "", altPhone: "",
//   email: "", address: "", city: "", state: "", pincode: "",
//   // Vehicle
//   vehicleType: "", vehicleCategory: "", carMake: "", carModel: "",
//   carYear: "", carColor: "", carNumber: "", seatingCapacity: "",
//   fuelType: "", acType: "", operatingCities: "",
//   // Documents
//   licenseNumber: "", licenseExpiry: "", aadhaar: "", panNumber: "",
//   rcNumber: "", rcExpiry: "", insuranceNumber: "", insuranceExpiry: "",
//   permitNumber: "", permitExpiry: "", fitnessExpiry: "", pollutionExpiry: "",
//   // Bank
//   accountHolder: "", bankName: "", accountType: "", accountNumber: "",
//   ifscCode: "", upiId: "",
//   // Emergency
//   emergencyName: "", emergencyPhone: "", emergencyRelation: "",
//   experience: "", languagesKnown: "", backgroundCheck: "", additionalNotes: "",
// };

// const REQUIRED = [
//   "ownerName","dob","gender","phone","email","address","city","state","pincode",
//   "vehicleType","vehicleCategory","carMake","carModel","carYear","carNumber","seatingCapacity","fuelType","operatingCities",
//   "licenseNumber","licenseExpiry","aadhaar","panNumber","rcNumber","rcExpiry",
//   "insuranceNumber","insuranceExpiry","permitNumber","permitExpiry","fitnessExpiry","pollutionExpiry",
//   "accountHolder","bankName","accountType","accountNumber","ifscCode",
//   "emergencyName","emergencyPhone","experience","backgroundCheck",
// ];

// const OPTIONAL = ["altPhone","carColor","acType","upiId","emergencyRelation","languagesKnown","additionalNotes"];

// function validate(name, value) {
//   if (OPTIONAL.includes(name)) return true;
//   if (!value || value.trim() === "") return false;
//   if (name === "phone" || name === "emergencyPhone") return /^[6-9]\d{9}$/.test(value.trim());
//   if (name === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
//   if (name === "aadhaar") return /^\d{12}$/.test(value.replace(/\s/g, ""));
//   if (name === "panNumber") return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value.trim().toUpperCase());
//   if (name === "ifscCode") return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(value.trim().toUpperCase());
//   if (name === "pincode") return /^\d{6}$/.test(value.trim());
//   return true;
// }

// // ─── Sub-components ────────────────────────────────────────────────

// function Field({ label, required, error, children }) {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//       <label style={{ fontSize: 12, fontWeight: 500, color: "#6b7280" }}>
//         {label} {required && <span style={{ color: MMT_RED }}>*</span>}
//       </label>
//       {children}
//       {error && (
//         <span style={{ fontSize: 11, color: "#dc2626" }}>{error}</span>
//       )}
//     </div>
//   );
// }

// const inputStyle = (hasError) => ({
//   background: "#f9fafb",
//   border: `1px solid ${hasError ? "#dc2626" : "#e5e7eb"}`,
//   borderRadius: 8,
//   padding: "9px 12px",
//   fontSize: 14,
//   color: "#111827",
//   fontFamily: "inherit",
//   width: "100%",
//   outline: "none",
//   boxSizing: "border-box",
//   transition: "border-color 0.15s",
// });

// function Input({ name, form, errors, onChange, placeholder, type = "text", maxLength, style = {} }) {
//   const [focused, setFocused] = useState(false);
//   return (
//     <input
//       type={type}
//       name={name}
//       value={form[name]}
//       onChange={onChange}
//       placeholder={placeholder}
//       maxLength={maxLength}
//       onFocus={() => setFocused(true)}
//       onBlur={() => setFocused(false)}
//       style={{
//         ...inputStyle(!!errors[name]),
//         borderColor: focused ? MMT_RED : errors[name] ? "#dc2626" : "#e5e7eb",
//         ...style,
//       }}
//     />
//   );
// }

// function Select({ name, form, errors, onChange, children }) {
//   const [focused, setFocused] = useState(false);
//   return (
//     <select
//       name={name}
//       value={form[name]}
//       onChange={onChange}
//       onFocus={() => setFocused(true)}
//       onBlur={() => setFocused(false)}
//       style={{
//         ...inputStyle(!!errors[name]),
//         borderColor: focused ? MMT_RED : errors[name] ? "#dc2626" : "#e5e7eb",
//         cursor: "pointer",
//       }}
//     >
//       {children}
//     </select>
//   );
// }

// function SectionCard({ icon, title, children }) {
//   return (
//     <div style={{
//       background: "#fff",
//       border: "1px solid #e5e7eb",
//       borderRadius: 12,
//       padding: "1.25rem 1.5rem",
//       marginBottom: "1rem",
//     }}>
//       <div style={{
//         display: "flex", alignItems: "center", gap: 10,
//         marginBottom: "1rem", paddingBottom: "0.75rem",
//         borderBottom: "1px solid #f3f4f6",
//       }}>
//         <div style={{
//           width: 30, height: 30, borderRadius: "50%",
//           background: MMT_RED, display: "flex",
//           alignItems: "center", justifyContent: "center", flexShrink: 0,
//         }}>
//           <span style={{ fontSize: 14 }}>{icon}</span>
//         </div>
//         <span style={{ fontSize: 13, fontWeight: 600, color: "#374151", letterSpacing: "0.4px", textTransform: "uppercase" }}>
//           {title}
//         </span>
//       </div>
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//         {children}
//       </div>
//     </div>
//   );
// }

// function FullWidth({ children }) {
//   return <div style={{ gridColumn: "1 / -1" }}>{children}</div>;
// }

// // ─── Main Component ────────────────────────────────────────────────

// export default function CabRegistration() {
//   const [form, setForm] = useState(initialForm);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [registrationId, setRegistrationId] = useState("");
//   const [progress, setProgress] = useState(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   useEffect(() => {
//     const filled = REQUIRED.filter((k) => form[k] && form[k].trim() !== "").length;
//     setProgress(Math.round((filled / REQUIRED.length) * 100));
//   }, [form]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     let firstErrorField = null;

//     REQUIRED.forEach((name) => {
//       if (!validate(name, form[name])) {
//         newErrors[name] = getErrorMsg(name);
//         if (!firstErrorField) firstErrorField = name;
//       }
//     });

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       const el = document.querySelector(`[name="${firstErrorField}"]`);
//       if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
//       return;
//     }

//     // Save to localStorage
//     const regId = `MMT-CAB-${Date.now().toString().slice(-8)}`;
//     localStorage.setItem("cab_registration", JSON.stringify({ ...form, registrationId: regId }));
//     setRegistrationId(regId);
//     setSubmitted(true);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   if (submitted) {
//     return (
//       <div style={{ minHeight: "100vh", background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
//         <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e5e7eb", padding: "2.5rem", maxWidth: 480, width: "100%", textAlign: "center" }}>
//           <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", fontSize: 28 }}>✓</div>
//           <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Registration Successful!</h2>
//           <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 1.5 + "rem" }}>Your cab partner application has been submitted to MakeMyTrip.</p>
//           <div style={{ background: "#f3f4f6", borderRadius: 8, padding: "12px 16px", marginBottom: "1.5rem" }}>
//             <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>Registration ID</div>
//             <div style={{ fontSize: 18, fontWeight: 700, color: MMT_RED, letterSpacing: 1 }}>{registrationId}</div>
//           </div>
//           <div style={{ textAlign: "left", background: "#fef2f2", borderRadius: 8, padding: "12px 16px", fontSize: 13, color: "#991b1b", lineHeight: 1.6, marginBottom: "1.5rem" }}>
//             <strong>Next Steps:</strong><br />
//             • Our team will verify your documents within 3-5 working days<br />
//             • You'll receive an SMS & email confirmation<br />
//             • Onboarding call will be scheduled post verification
//           </div>
//           <button
//             onClick={() => { setForm(initialForm); setSubmitted(false); setErrors({}); }}
//             style={{ background: MMT_RED, color: "#fff", border: "none", borderRadius: 8, padding: "11px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
//           >
//             Register Another Cab
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={{ minHeight: "100vh", background: "#f3f4f6", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
//       {/* Header */}
//       <div style={{ background: MMT_RED, padding: "0.9rem 1.5rem", position: "sticky", top: 0, zIndex: 10 }}>
//         <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//           <div>
//             <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: -0.5 }}>BirdMyrip</div>
//             <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", marginTop: 1 }}>Cab Partner Registration</div>
//           </div>
//           <div style={{ textAlign: "right" }}>
//             <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>Form completion</div>
//             <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{progress}%</div>
//           </div>
//         </div>
//         {/* Progress bar */}
//         <div style={{ maxWidth: 760, margin: "10px auto 0", height: 3, background: "rgba(255,255,255,0.25)", borderRadius: 99 }}>
//           <div style={{ height: "100%", width: `${progress}%`, background: "#fff", borderRadius: 99, transition: "width 0.3s" }} />
//         </div>
//       </div>

//       <div style={{ maxWidth: 760, margin: "0 auto", padding: "1.5rem 1rem 3rem" }}>

//         {/* Section 1 — Owner Details */}
//         <SectionCard icon="👤" title="Owner / Driver Details">
//           <Field label="Full Name" required error={errors.ownerName}>
//             <Input name="ownerName" form={form} errors={errors} onChange={handleChange} placeholder="As per Aadhaar card" />
//           </Field>
//           <Field label="Date of Birth" required error={errors.dob}>
//             <Input name="dob" type="date" form={form} errors={errors} onChange={handleChange} />
//           </Field>
//           <Field label="Gender" required error={errors.gender}>
//             <Select name="gender" form={form} errors={errors} onChange={handleChange}>
//               <option value="">Select gender</option>
//               <option>Male</option><option>Female</option><option>Other</option>
//             </Select>
//           </Field>
//           <Field label="Mobile Number" required error={errors.phone}>
//             <Input name="phone" type="tel" form={form} errors={errors} onChange={handleChange} placeholder="10-digit mobile" maxLength={10} />
//           </Field>
//           <Field label="Alternate Number" error={errors.altPhone}>
//             <Input name="altPhone" type="tel" form={form} errors={errors} onChange={handleChange} placeholder="Optional" maxLength={10} />
//           </Field>
//           <Field label="Email Address" required error={errors.email}>
//             <Input name="email" type="email" form={form} errors={errors} onChange={handleChange} placeholder="you@email.com" />
//           </Field>
//           <FullWidth>
//             <Field label="Permanent Address" required error={errors.address}>
//               <Input name="address" form={form} errors={errors} onChange={handleChange} placeholder="House no., Street, Area" />
//             </Field>
//           </FullWidth>
//           <Field label="City" required error={errors.city}>
//             <Input name="city" form={form} errors={errors} onChange={handleChange} placeholder="e.g. Delhi" />
//           </Field>
//           <Field label="State" required error={errors.state}>
//             <Select name="state" form={form} errors={errors} onChange={handleChange}>
//               <option value="">Select state</option>
//               {STATES.map((s) => <option key={s}>{s}</option>)}
//             </Select>
//           </Field>
//           <Field label="Pincode" required error={errors.pincode}>
//             <Input name="pincode" form={form} errors={errors} onChange={handleChange} placeholder="6-digit pincode" maxLength={6} />
//           </Field>
//         </SectionCard>

//         {/* Section 2 — Vehicle Details */}
//         <SectionCard icon="🚗" title="Vehicle Details">
//           <Field label="Vehicle Type" required error={errors.vehicleType}>
//             <Select name="vehicleType" form={form} errors={errors} onChange={handleChange}>
//               <option value="">Select type</option>
//               <option>Hatchback</option><option>Sedan</option><option>SUV</option>
//               <option>MUV / Van</option><option>Tempo Traveller</option><option>Luxury / Premium</option>
//             </Select>
//           </Field>
//           <Field label="Service Category" required error={errors.vehicleCategory}>
//             <Select name="vehicleCategory" form={form} errors={errors} onChange={handleChange}>
//               <option value="">Select category</option>
//               <option>One-Way Cab</option><option>Round Trip</option><option>Airport Transfer</option>
//               <option>Hourly / Local</option><option>Outstation</option><option>Self Drive</option>
//             </Select>
//           </Field>
//           <Field label="Car Brand / Make" required error={errors.carMake}>
//             <Select name="carMake" form={form} errors={errors} onChange={handleChange}>
//               <option value="">Select brand</option>
//               {CAR_BRANDS.map((b) => <option key={b}>{b}</option>)}
//             </Select>
//           </Field>
//           <Field label="Car Model" required error={errors.carModel}>
//             <Input name="carModel" form={form} errors={errors} onChange={handleChange} placeholder="e.g. Dzire, Creta, Innova" />
//           </Field>
//           <Field label="Manufacturing Year" required error={errors.carYear}>
//             <Select name="carYear" form={form} errors={errors} onChange={handleChange}>
//               <option value="">Select year</option>
//               {YEARS.map((y) => <option key={y}>{y}</option>)}
//             </Select>
//           </Field>
//           <Field label="Car Color" error={errors.carColor}>
//             <Input name="carColor" form={form} errors={errors} onChange={handleChange} placeholder="e.g. White, Silver" />
//           </Field>
//           <Field label="Vehicle Registration Number" required error={errors.carNumber}>
//             <Input name="carNumber" form={form} errors={errors} onChange={handleChange} placeholder="e.g. DL01AB1234" style={{ textTransform: "uppercase" }} />
//           </Field>
//           <Field label="Seating Capacity" required error={errors.seatingCapacity}>
//             <Select name="seatingCapacity" form={form} errors={errors} onChange={handleChange}>
//               <option value="">Select</option>
//               <option>4+1 (4 Seater)</option><option>6+1 (6 Seater)</option>
//               <option>7+1 (7 Seater)</option><option>12+1 (12 Seater)</option>
//               <option>17+1 (17 Seater)</option><option>20+ (Large)</option>
//             </Select>
//           </Field>
//           <Field label="Fuel Type" required error={errors.fuelType}>
//             <Select name="fuelType" form={form} errors={errors} onChange={handleChange}>
//               <option value="">Select</option>
//               <option>Petrol</option><option>Diesel</option><option>CNG</option>
//               <option>Electric (EV)</option><option>Hybrid</option>
//             </Select>
//           </Field>
//           <Field label="AC / Non-AC" error={errors.acType}>
//             <Select name="acType" form={form} errors={errors} onChange={handleChange}>
//               <option value="">Select</option>
//               <option>AC</option><option>Non-AC</option>
//             </Select>
//           </Field>
//           <FullWidth>
//             <Field label="Operating Cities" required error={errors.operatingCities}>
//               <Input name="operatingCities" form={form} errors={errors} onChange={handleChange} placeholder="e.g. Delhi, Gurgaon, Noida (comma-separated)" />
//             </Field>
//           </FullWidth>
//         </SectionCard>

//         {/* Section 3 — Documents */}
//         <SectionCard icon="📄" title="Documents & Licenses">
//           <Field label="Driving License Number" required error={errors.licenseNumber}>
//             <Input name="licenseNumber" form={form} errors={errors} onChange={handleChange} placeholder="e.g. DL-0120110149646" style={{ textTransform: "uppercase" }} />
//           </Field>
//           <Field label="License Expiry Date" required error={errors.licenseExpiry}>
//             <Input name="licenseExpiry" type="date" form={form} errors={errors} onChange={handleChange} />
//           </Field>
//           <Field label="Aadhaar Number" required error={errors.aadhaar}>
//             <Input name="aadhaar" form={form} errors={errors} onChange={handleChange} placeholder="12-digit Aadhaar" maxLength={12} />
//           </Field>
//           <Field label="PAN Number" required error={errors.panNumber}>
//             <Input name="panNumber" form={form} errors={errors} onChange={handleChange} placeholder="e.g. ABCDE1234F" maxLength={10} style={{ textTransform: "uppercase" }} />
//           </Field>
//           <Field label="RC Number" required error={errors.rcNumber}>
//             <Input name="rcNumber" form={form} errors={errors} onChange={handleChange} placeholder="Registration Certificate No." style={{ textTransform: "uppercase" }} />
//           </Field>
//           <Field label="RC Expiry Date" required error={errors.rcExpiry}>
//             <Input name="rcExpiry" type="date" form={form} errors={errors} onChange={handleChange} />
//           </Field>
//           <Field label="Insurance Policy Number" required error={errors.insuranceNumber}>
//             <Input name="insuranceNumber" form={form} errors={errors} onChange={handleChange} placeholder="Policy number" />
//           </Field>
//           <Field label="Insurance Expiry Date" required error={errors.insuranceExpiry}>
//             <Input name="insuranceExpiry" type="date" form={form} errors={errors} onChange={handleChange} />
//           </Field>
//           <Field label="Commercial Permit Number" required error={errors.permitNumber}>
//             <Input name="permitNumber" form={form} errors={errors} onChange={handleChange} placeholder="All India / State Permit" />
//           </Field>
//           <Field label="Permit Expiry Date" required error={errors.permitExpiry}>
//             <Input name="permitExpiry" type="date" form={form} errors={errors} onChange={handleChange} />
//           </Field>
//           <Field label="Fitness Certificate Expiry" required error={errors.fitnessExpiry}>
//             <Input name="fitnessExpiry" type="date" form={form} errors={errors} onChange={handleChange} />
//           </Field>
//           <Field label="PUC / Pollution Expiry" required error={errors.pollutionExpiry}>
//             <Input name="pollutionExpiry" type="date" form={form} errors={errors} onChange={handleChange} />
//           </Field>
//         </SectionCard>

//         {/* Section 4 — Bank Details */}
//         <SectionCard icon="🏦" title="Bank Account Details">
//           <FullWidth>
//             <Field label="Account Holder Name" required error={errors.accountHolder}>
//               <Input name="accountHolder" form={form} errors={errors} onChange={handleChange} placeholder="As per bank records" />
//             </Field>
//           </FullWidth>
//           <Field label="Bank Name" required error={errors.bankName}>
//             <Select name="bankName" form={form} errors={errors} onChange={handleChange}>
//               <option value="">Select bank</option>
//               {BANKS.map((b) => <option key={b}>{b}</option>)}
//             </Select>
//           </Field>
//           <Field label="Account Type" required error={errors.accountType}>
//             <Select name="accountType" form={form} errors={errors} onChange={handleChange}>
//               <option value="">Select</option>
//               <option>Savings</option><option>Current</option>
//             </Select>
//           </Field>
//           <Field label="Account Number" required error={errors.accountNumber}>
//             <Input name="accountNumber" form={form} errors={errors} onChange={handleChange} placeholder="Bank account number" />
//           </Field>
//           <Field label="IFSC Code" required error={errors.ifscCode}>
//             <Input name="ifscCode" form={form} errors={errors} onChange={handleChange} placeholder="e.g. SBIN0001234" maxLength={11} style={{ textTransform: "uppercase" }} />
//           </Field>
//           <Field label="UPI ID (Optional)" error={errors.upiId}>
//             <Input name="upiId" form={form} errors={errors} onChange={handleChange} placeholder="e.g. name@upi" />
//           </Field>
//         </SectionCard>

//         {/* Section 5 — Emergency & Additional */}
//         <SectionCard icon="🆘" title="Emergency Contact & Additional Info">
//           <Field label="Emergency Contact Name" required error={errors.emergencyName}>
//             <Input name="emergencyName" form={form} errors={errors} onChange={handleChange} placeholder="Contact person name" />
//           </Field>
//           <Field label="Emergency Contact Number" required error={errors.emergencyPhone}>
//             <Input name="emergencyPhone" type="tel" form={form} errors={errors} onChange={handleChange} placeholder="10-digit number" maxLength={10} />
//           </Field>
//           <Field label="Relation" error={errors.emergencyRelation}>
//             <Select name="emergencyRelation" form={form} errors={errors} onChange={handleChange}>
//               <option value="">Select</option>
//               <option>Spouse</option><option>Parent</option><option>Sibling</option>
//               <option>Friend</option><option>Other</option>
//             </Select>
//           </Field>
//           <Field label="Driving Experience" required error={errors.experience}>
//             <Select name="experience" form={form} errors={errors} onChange={handleChange}>
//               <option value="">Select</option>
//               <option>Less than 1 year</option><option>1–2 years</option>
//               <option>3–5 years</option><option>5–10 years</option><option>10+ years</option>
//             </Select>
//           </Field>
//           <Field label="Languages Known" error={errors.languagesKnown}>
//             <Input name="languagesKnown" form={form} errors={errors} onChange={handleChange} placeholder="e.g. Hindi, English, Punjabi" />
//           </Field>
//           <Field label="Background Verification Consent" required error={errors.backgroundCheck}>
//             <Select name="backgroundCheck" form={form} errors={errors} onChange={handleChange}>
//               <option value="">Select</option>
//               <option value="yes">Yes, I consent</option>
//               <option value="no">No</option>
//             </Select>
//           </Field>
//           <FullWidth>
//             <Field label="Additional Notes (Optional)" error={errors.additionalNotes}>
//               <textarea
//                 name="additionalNotes"
//                 value={form.additionalNotes}
//                 onChange={handleChange}
//                 placeholder="Special vehicle features, prior tour experience, etc."
//                 rows={3}
//                 style={{
//                   ...inputStyle(false),
//                   resize: "vertical",
//                   lineHeight: 1.6,
//                 }}
//               />
//             </Field>
//           </FullWidth>
//         </SectionCard>

//         {/* Terms */}
//         <div style={{
//           background: "#fff7ed", border: "1px solid #fed7aa",
//           borderRadius: 8, padding: "12px 16px",
//           fontSize: 12, color: "#92400e", lineHeight: 1.7, marginBottom: "1rem",
//         }}>
//           By submitting this form, I confirm that all details provided are accurate and I agree to
//           MakeMyTrip's cab partner terms & conditions. All fields marked{" "}
//           <span style={{ color: MMT_RED, fontWeight: 700 }}>*</span> are mandatory.
//         </div>

//         {/* Submit */}
//         <button
//           onClick={handleSubmit}
//           style={{
//             width: "100%", background: MMT_RED, color: "#fff",
//             border: "none", padding: "14px", fontSize: 16,
//             fontWeight: 600, borderRadius: 8, cursor: "pointer",
//             fontFamily: "inherit", letterSpacing: 0.3,
//             transition: "background 0.15s, transform 0.1s",
//           }}
//           onMouseEnter={(e) => (e.target.style.background = "#c41230")}
//           onMouseLeave={(e) => (e.target.style.background = MMT_RED)}
//           onMouseDown={(e) => (e.target.style.transform = "scale(0.99)")}
//           onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
//         >
//           Submit Registration
//         </button>
//       </div>
//     </div>
//   );
// }

// // ─── Error messages ────────────────────────────────────────────────

// function getErrorMsg(name) {
//   const msgs = {
//     ownerName: "Full name is required",
//     dob: "Date of birth is required",
//     gender: "Gender is required",
//     phone: "Valid 10-digit mobile number required",
//     email: "Valid email address required",
//     address: "Address is required",
//     city: "City is required",
//     state: "State is required",
//     pincode: "Valid 6-digit pincode required",
//     vehicleType: "Vehicle type is required",
//     vehicleCategory: "Service category is required",
//     carMake: "Car brand is required",
//     carModel: "Car model is required",
//     carYear: "Manufacturing year is required",
//     carNumber: "Registration number is required",
//     seatingCapacity: "Seating capacity is required",
//     fuelType: "Fuel type is required",
//     operatingCities: "Operating cities required",
//     licenseNumber: "License number is required",
//     licenseExpiry: "License expiry date required",
//     aadhaar: "Valid 12-digit Aadhaar required",
//     panNumber: "Valid PAN number required (e.g. ABCDE1234F)",
//     rcNumber: "RC number is required",
//     rcExpiry: "RC expiry date required",
//     insuranceNumber: "Insurance policy number required",
//     insuranceExpiry: "Insurance expiry date required",
//     permitNumber: "Commercial permit number required",
//     permitExpiry: "Permit expiry date required",
//     fitnessExpiry: "Fitness certificate expiry required",
//     pollutionExpiry: "PUC expiry date required",
//     accountHolder: "Account holder name required",
//     bankName: "Bank name is required",
//     accountType: "Account type is required",
//     accountNumber: "Account number is required",
//     ifscCode: "Valid IFSC code required (e.g. SBIN0001234)",
//     emergencyName: "Emergency contact name required",
//     emergencyPhone: "Valid 10-digit emergency number required",
//     experience: "Driving experience is required",
//     backgroundCheck: "Please select consent",
//   };
//   return msgs[name] || "This field is required";
// }
























import { useState, useEffect } from "react";

// const PRIMARY = "#1A56DB";
const PRIMARY = "#3B82F6"; // perfect light blue
// const PRIMARY_DARK = "#1344B8";
const PRIMARY_DARK = "#2563EB"; // softer dark blue
// const PRIMARY_LIGHT = "#EEF2FF";
const PRIMARY_LIGHT = "#F0F7FF";

const STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan",
  "Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Other",
];

const BANKS = [
  "State Bank of India","HDFC Bank","ICICI Bank","Axis Bank","Punjab National Bank",
  "Bank of Baroda","Kotak Mahindra Bank","Canara Bank","Union Bank of India","Yes Bank",
  "IndusInd Bank","IDFC First Bank","Federal Bank","Other",
];

const CAR_BRANDS = [
  "Maruti Suzuki","Hyundai","Tata","Honda","Toyota","Mahindra","Kia","Ford",
  "Renault","Skoda","Volkswagen","MG","Other",
];

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: currentYear - 1999 }, (_, i) => currentYear - i);

const initialForm = {
  ownerName: "", dob: "", gender: "", phone: "", altPhone: "",
  email: "", address: "", city: "", state: "", pincode: "",
  vehicleType: "", vehicleCategory: "", carMake: "", carModel: "",
  carYear: "", carColor: "", carNumber: "", seatingCapacity: "",
  fuelType: "", acType: "", operatingCities: "",
  licenseNumber: "", licenseExpiry: "", aadhaar: "", panNumber: "",
  rcNumber: "", rcExpiry: "", insuranceNumber: "", insuranceExpiry: "",
  permitNumber: "", permitExpiry: "", fitnessExpiry: "", pollutionExpiry: "",
  accountHolder: "", bankName: "", accountType: "", accountNumber: "",
  ifscCode: "", upiId: "",
  emergencyName: "", emergencyPhone: "", emergencyRelation: "",
  experience: "", languagesKnown: "", backgroundCheck: "", additionalNotes: "",
};

const REQUIRED = [
  "ownerName","dob","gender","phone","email","address","city","state","pincode",
  "vehicleType","vehicleCategory","carMake","carModel","carYear","carNumber","seatingCapacity","fuelType","operatingCities",
  "licenseNumber","licenseExpiry","aadhaar","panNumber","rcNumber","rcExpiry",
  "insuranceNumber","insuranceExpiry","permitNumber","permitExpiry","fitnessExpiry","pollutionExpiry",
  "accountHolder","bankName","accountType","accountNumber","ifscCode",
  "emergencyName","emergencyPhone","experience","backgroundCheck",
];

const OPTIONAL = ["altPhone","carColor","acType","upiId","emergencyRelation","languagesKnown","additionalNotes"];

function validate(name, value) {
  if (OPTIONAL.includes(name)) return true;
  if (!value || value.trim() === "") return false;
  if (name === "phone" || name === "emergencyPhone") return /^[6-9]\d{9}$/.test(value.trim());
  if (name === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  if (name === "aadhaar") return /^\d{12}$/.test(value.replace(/\s/g, ""));
  if (name === "panNumber") return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value.trim().toUpperCase());
  if (name === "ifscCode") return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(value.trim().toUpperCase());
  if (name === "pincode") return /^\d{6}$/.test(value.trim());
  return true;
}

function getErrorMsg(name) {
  const msgs = {
    ownerName: "Full name is required",
    dob: "Date of birth is required",
    gender: "Gender is required",
    phone: "Valid 10-digit mobile number required",
    email: "Valid email address required",
    address: "Address is required",
    city: "City is required",
    state: "State is required",
    pincode: "Valid 6-digit pincode required",
    vehicleType: "Vehicle type is required",
    vehicleCategory: "Service category is required",
    carMake: "Car brand is required",
    carModel: "Car model is required",
    carYear: "Manufacturing year is required",
    carNumber: "Registration number is required",
    seatingCapacity: "Seating capacity is required",
    fuelType: "Fuel type is required",
    operatingCities: "Operating cities required",
    licenseNumber: "License number is required",
    licenseExpiry: "License expiry date required",
    aadhaar: "Valid 12-digit Aadhaar required",
    panNumber: "Valid PAN number required (e.g. ABCDE1234F)",
    rcNumber: "RC number is required",
    rcExpiry: "RC expiry date required",
    insuranceNumber: "Insurance policy number required",
    insuranceExpiry: "Insurance expiry date required",
    permitNumber: "Commercial permit number required",
    permitExpiry: "Permit expiry date required",
    fitnessExpiry: "Fitness certificate expiry required",
    pollutionExpiry: "PUC expiry date required",
    accountHolder: "Account holder name required",
    bankName: "Bank name is required",
    accountType: "Account type is required",
    accountNumber: "Account number is required",
    ifscCode: "Valid IFSC code required (e.g. SBIN0001234)",
    emergencyName: "Emergency contact name required",
    emergencyPhone: "Valid 10-digit emergency number required",
    experience: "Driving experience is required",
    backgroundCheck: "Please select consent",
  };
  return msgs[name] || "This field is required";
}

// ─── Sub-components ────────────────────────────────────────────────

function Field({ label, required, error, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <label style={{ fontSize: 12, fontWeight: 500, color: "#6b7280" }}>
        {label}{required && <span style={{ color: PRIMARY, marginLeft: 2 }}>*</span>}
      </label>
      {children}
      {error && <span style={{ fontSize: 11, color: "#dc2626" }}>{error}</span>}
    </div>
  );
}

const baseInputStyle = (hasError, focused) => ({
  background: focused ? "#fff" : "#f9fafb",
  border: `1.5px solid ${hasError ? "#dc2626" : focused ? PRIMARY : "#e5e7eb"}`,
  borderRadius: 8,
  padding: "9px 12px",
  fontSize: 14,
  color: "#111827",
  fontFamily: "inherit",
  width: "100%",
  outline: "none",
  boxSizing: "border-box",
  transition: "all 0.15s",
  boxShadow: focused ? `0 0 0 3px ${PRIMARY}22` : "none",
});

function Input({ name, form, errors, onChange, placeholder, type = "text", maxLength, style = {} }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      name={name}
      value={form[name]}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ ...baseInputStyle(!!errors[name], focused), ...style }}
    />
  );
}

function Select({ name, form, errors, onChange, children }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      name={name}
      value={form[name]}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ ...baseInputStyle(!!errors[name], focused), cursor: "pointer" }}
    >
      {children}
    </select>
  );
}

function SectionCard({ icon, title, children, step }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: 14,
      padding: "1.5rem",
      marginBottom: "1rem",
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 12,
        marginBottom: "1.25rem", paddingBottom: "1rem",
        borderBottom: `2px solid ${PRIMARY_LIGHT}`,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: `linear-gradient(135deg, ${PRIMARY}, #3B82F6)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, boxShadow: `0 2px 8px ${PRIMARY}44`,
        }}>
          <span style={{ fontSize: 16 }}>{icon}</span>
        </div>
        <div>
          <div style={{ fontSize: 10, color: PRIMARY, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase" }}>
            Step {step} of 5
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>
            {title}
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {children}
      </div>
    </div>
  );
}

function FullWidth({ children }) {
  return <div style={{ gridColumn: "1 / -1" }}>{children}</div>;
}

// ─── Main Component ────────────────────────────────────────────────

export default function CabRegistration() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  useEffect(() => {
    const filled = REQUIRED.filter((k) => form[k] && form[k].trim() !== "").length;
    setProgress(Math.round((filled / REQUIRED.length) * 100));
  }, [form]);

  const handleSubmit = () => {
    const newErrors = {};
    let firstErrorField = null;
    REQUIRED.forEach((name) => {
      if (!validate(name, form[name])) {
        newErrors[name] = getErrorMsg(name);
        if (!firstErrorField) firstErrorField = name;
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const el = document.querySelector(`[name="${firstErrorField}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const regId = `CAB-${Date.now().toString().slice(-8)}`;
    localStorage.setItem("cab_registration", JSON.stringify({ ...form, registrationId: regId }));
    setRegistrationId(regId);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── Success Screen ──
  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
        <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #e5e7eb", padding: "2.5rem", maxWidth: 480, width: "100%", textAlign: "center", boxShadow: "0 8px 32px rgba(26,86,219,0.1)" }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: `linear-gradient(135deg, ${PRIMARY}, #3B82F6)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", fontSize: 32, boxShadow: `0 4px 16px ${PRIMARY}44` }}>✓</div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#111827", marginBottom: 8 }}>Registration Successful!</h2>
          <p style={{ fontSize: 14, color: "#6b7280", marginBottom: "1.5rem" }}>Your cab partner application has been submitted successfully.</p>
          <div style={{ background: PRIMARY_LIGHT, borderRadius: 10, padding: "14px 20px", marginBottom: "1.5rem", border: `1px solid ${PRIMARY}33` }}>
            <div style={{ fontSize: 11, color: PRIMARY, fontWeight: 600, letterSpacing: "0.8px", marginBottom: 4 }}>REGISTRATION ID</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: PRIMARY, letterSpacing: 2 }}>{registrationId}</div>
          </div>
          <div style={{ textAlign: "left", background: "#f0fdf4", borderRadius: 10, padding: "14px 16px", fontSize: 13, color: "#166534", lineHeight: 1.8, marginBottom: "1.5rem", border: "1px solid #bbf7d0" }}>
            <strong>Next Steps:</strong><br />
            • Documents verified within 3–5 working days<br />
            • SMS & email confirmation will be sent<br />
            • Onboarding call scheduled post verification
          </div>
          <button
            onClick={() => { setForm(initialForm); setSubmitted(false); setErrors({}); }}
            style={{ background: `linear-gradient(135deg, ${PRIMARY}, #3B82F6)`, color: "#fff", border: "none", borderRadius: 10, padding: "12px 32px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", boxShadow: `0 4px 12px ${PRIMARY}44` }}
          >
            Register Another Cab
          </button>
        </div>
      </div>
    );
  }

  // ── Main Form ──
  return (
    <div style={{ minHeight: "100vh", background: "#F1F5F9", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, #2563EB 60%, #3B82F6 100%)`, padding: "1rem 1.5rem", position: "sticky", top: 0, zIndex: 10, boxShadow: `0 2px 16px ${PRIMARY}55` }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🚕</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: -0.5 }}>CabPartner</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", marginTop: 1 }}>Driver & Cab Registration Portal</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>Completion</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>{progress}%</div>
            </div>
          </div>
          <div style={{ height: 4, background: "rgba(255,255,255,0.2)", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "#fff", borderRadius: 99, transition: "width 0.4s ease" }} />
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 8, justifyContent: "center", flexWrap: "wrap" }}>
            {["Owner", "Vehicle", "Docs", "Bank", "Emergency"].map((s, i) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: progress >= (i + 1) * 20 ? "#fff" : "rgba(255,255,255,0.35)", transition: "background 0.3s" }} />
                <span style={{ fontSize: 10, color: progress >= (i + 1) * 20 ? "#fff" : "rgba(255,255,255,0.5)", fontWeight: 500 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "1.5rem 1rem 3rem" }}>

        {/* Section 1 */}
        <SectionCard icon="👤" title="Owner / Driver Details" step={1}>
          <Field label="Full Name" required error={errors.ownerName}>
            <Input name="ownerName" form={form} errors={errors} onChange={handleChange} placeholder="As per Aadhaar card" />
          </Field>
          <Field label="Date of Birth" required error={errors.dob}>
            <Input name="dob" type="date" form={form} errors={errors} onChange={handleChange} />
          </Field>
          <Field label="Gender" required error={errors.gender}>
            <Select name="gender" form={form} errors={errors} onChange={handleChange}>
              <option value="">Select gender</option>
              <option>Male</option><option>Female</option><option>Other</option>
            </Select>
          </Field>
          <Field label="Mobile Number" required error={errors.phone}>
            <Input name="phone" type="tel" form={form} errors={errors} onChange={handleChange} placeholder="10-digit mobile" maxLength={10} />
          </Field>
          <Field label="Alternate Number" error={errors.altPhone}>
            <Input name="altPhone" type="tel" form={form} errors={errors} onChange={handleChange} placeholder="Optional" maxLength={10} />
          </Field>
          <Field label="Email Address" required error={errors.email}>
            <Input name="email" type="email" form={form} errors={errors} onChange={handleChange} placeholder="you@email.com" />
          </Field>
          <FullWidth>
            <Field label="Permanent Address" required error={errors.address}>
              <Input name="address" form={form} errors={errors} onChange={handleChange} placeholder="House no., Street, Area" />
            </Field>
          </FullWidth>
          <Field label="City" required error={errors.city}>
            <Input name="city" form={form} errors={errors} onChange={handleChange} placeholder="e.g. Delhi" />
          </Field>
          <Field label="State" required error={errors.state}>
            <Select name="state" form={form} errors={errors} onChange={handleChange}>
              <option value="">Select state</option>
              {STATES.map((s) => <option key={s}>{s}</option>)}
            </Select>
          </Field>
          <Field label="Pincode" required error={errors.pincode}>
            <Input name="pincode" form={form} errors={errors} onChange={handleChange} placeholder="6-digit pincode" maxLength={6} />
          </Field>
        </SectionCard>

        {/* Section 2 */}
        <SectionCard icon="🚗" title="Vehicle Details" step={2}>
          <Field label="Vehicle Type" required error={errors.vehicleType}>
            <Select name="vehicleType" form={form} errors={errors} onChange={handleChange}>
              <option value="">Select type</option>
              <option>Hatchback</option><option>Sedan</option><option>SUV</option>
              <option>MUV / Van</option><option>Tempo Traveller</option><option>Luxury / Premium</option>
            </Select>
          </Field>
          <Field label="Service Category" required error={errors.vehicleCategory}>
            <Select name="vehicleCategory" form={form} errors={errors} onChange={handleChange}>
              <option value="">Select category</option>
              <option>One-Way Cab</option><option>Round Trip</option><option>Airport Transfer</option>
              <option>Hourly / Local</option><option>Outstation</option><option>Self Drive</option>
            </Select>
          </Field>
          <Field label="Car Brand / Make" required error={errors.carMake}>
            <Select name="carMake" form={form} errors={errors} onChange={handleChange}>
              <option value="">Select brand</option>
              {CAR_BRANDS.map((b) => <option key={b}>{b}</option>)}
            </Select>
          </Field>
          <Field label="Car Model" required error={errors.carModel}>
            <Input name="carModel" form={form} errors={errors} onChange={handleChange} placeholder="e.g. Dzire, Creta, Innova" />
          </Field>
          <Field label="Manufacturing Year" required error={errors.carYear}>
            <Select name="carYear" form={form} errors={errors} onChange={handleChange}>
              <option value="">Select year</option>
              {YEARS.map((y) => <option key={y}>{y}</option>)}
            </Select>
          </Field>
          <Field label="Car Color" error={errors.carColor}>
            <Input name="carColor" form={form} errors={errors} onChange={handleChange} placeholder="e.g. White, Silver" />
          </Field>
          <Field label="Vehicle Registration Number" required error={errors.carNumber}>
            <Input name="carNumber" form={form} errors={errors} onChange={handleChange} placeholder="e.g. DL01AB1234" style={{ textTransform: "uppercase" }} />
          </Field>
          <Field label="Seating Capacity" required error={errors.seatingCapacity}>
            <Select name="seatingCapacity" form={form} errors={errors} onChange={handleChange}>
              <option value="">Select</option>
              <option>4+1 (4 Seater)</option><option>6+1 (6 Seater)</option>
              <option>7+1 (7 Seater)</option><option>12+1 (12 Seater)</option>
              <option>17+1 (17 Seater)</option><option>20+ (Large)</option>
            </Select>
          </Field>
          <Field label="Fuel Type" required error={errors.fuelType}>
            <Select name="fuelType" form={form} errors={errors} onChange={handleChange}>
              <option value="">Select</option>
              <option>Petrol</option><option>Diesel</option><option>CNG</option>
              <option>Electric (EV)</option><option>Hybrid</option>
            </Select>
          </Field>
          <Field label="AC / Non-AC" error={errors.acType}>
            <Select name="acType" form={form} errors={errors} onChange={handleChange}>
              <option value="">Select</option>
              <option>AC</option><option>Non-AC</option>
            </Select>
          </Field>
          <FullWidth>
            <Field label="Operating Cities" required error={errors.operatingCities}>
              <Input name="operatingCities" form={form} errors={errors} onChange={handleChange} placeholder="e.g. Delhi, Gurgaon, Noida (comma-separated)" />
            </Field>
          </FullWidth>
        </SectionCard>

        {/* Section 3 */}
        <SectionCard icon="📄" title="Documents & Licenses" step={3}>
          <Field label="Driving License Number" required error={errors.licenseNumber}>
            <Input name="licenseNumber" form={form} errors={errors} onChange={handleChange} placeholder="e.g. DL-0120110149646" style={{ textTransform: "uppercase" }} />
          </Field>
          <Field label="License Expiry Date" required error={errors.licenseExpiry}>
            <Input name="licenseExpiry" type="date" form={form} errors={errors} onChange={handleChange} />
          </Field>
          <Field label="Aadhaar Number" required error={errors.aadhaar}>
            <Input name="aadhaar" form={form} errors={errors} onChange={handleChange} placeholder="12-digit Aadhaar" maxLength={12} />
          </Field>
          <Field label="PAN Number" required error={errors.panNumber}>
            <Input name="panNumber" form={form} errors={errors} onChange={handleChange} placeholder="e.g. ABCDE1234F" maxLength={10} style={{ textTransform: "uppercase" }} />
          </Field>
          <Field label="RC Number" required error={errors.rcNumber}>
            <Input name="rcNumber" form={form} errors={errors} onChange={handleChange} placeholder="Registration Certificate No." style={{ textTransform: "uppercase" }} />
          </Field>
          <Field label="RC Expiry Date" required error={errors.rcExpiry}>
            <Input name="rcExpiry" type="date" form={form} errors={errors} onChange={handleChange} />
          </Field>
          <Field label="Insurance Policy Number" required error={errors.insuranceNumber}>
            <Input name="insuranceNumber" form={form} errors={errors} onChange={handleChange} placeholder="Policy number" />
          </Field>
          <Field label="Insurance Expiry Date" required error={errors.insuranceExpiry}>
            <Input name="insuranceExpiry" type="date" form={form} errors={errors} onChange={handleChange} />
          </Field>
          <Field label="Commercial Permit Number" required error={errors.permitNumber}>
            <Input name="permitNumber" form={form} errors={errors} onChange={handleChange} placeholder="All India / State Permit" />
          </Field>
          <Field label="Permit Expiry Date" required error={errors.permitExpiry}>
            <Input name="permitExpiry" type="date" form={form} errors={errors} onChange={handleChange} />
          </Field>
          <Field label="Fitness Certificate Expiry" required error={errors.fitnessExpiry}>
            <Input name="fitnessExpiry" type="date" form={form} errors={errors} onChange={handleChange} />
          </Field>
          <Field label="PUC / Pollution Expiry" required error={errors.pollutionExpiry}>
            <Input name="pollutionExpiry" type="date" form={form} errors={errors} onChange={handleChange} />
          </Field>
        </SectionCard>

        {/* Section 4 */}
        <SectionCard icon="🏦" title="Bank Account Details" step={4}>
          <FullWidth>
            <Field label="Account Holder Name" required error={errors.accountHolder}>
              <Input name="accountHolder" form={form} errors={errors} onChange={handleChange} placeholder="As per bank records" />
            </Field>
          </FullWidth>
          <Field label="Bank Name" required error={errors.bankName}>
            <Select name="bankName" form={form} errors={errors} onChange={handleChange}>
              <option value="">Select bank</option>
              {BANKS.map((b) => <option key={b}>{b}</option>)}
            </Select>
          </Field>
          <Field label="Account Type" required error={errors.accountType}>
            <Select name="accountType" form={form} errors={errors} onChange={handleChange}>
              <option value="">Select</option>
              <option>Savings</option><option>Current</option>
            </Select>
          </Field>
          <Field label="Account Number" required error={errors.accountNumber}>
            <Input name="accountNumber" form={form} errors={errors} onChange={handleChange} placeholder="Bank account number" />
          </Field>
          <Field label="IFSC Code" required error={errors.ifscCode}>
            <Input name="ifscCode" form={form} errors={errors} onChange={handleChange} placeholder="e.g. SBIN0001234" maxLength={11} style={{ textTransform: "uppercase" }} />
          </Field>
          <Field label="UPI ID (Optional)" error={errors.upiId}>
            <Input name="upiId" form={form} errors={errors} onChange={handleChange} placeholder="e.g. name@upi" />
          </Field>
        </SectionCard>

        {/* Section 5 */}
        <SectionCard icon="🆘" title="Emergency Contact & Additional Info" step={5}>
          <Field label="Emergency Contact Name" required error={errors.emergencyName}>
            <Input name="emergencyName" form={form} errors={errors} onChange={handleChange} placeholder="Contact person name" />
          </Field>
          <Field label="Emergency Contact Number" required error={errors.emergencyPhone}>
            <Input name="emergencyPhone" type="tel" form={form} errors={errors} onChange={handleChange} placeholder="10-digit number" maxLength={10} />
          </Field>
          <Field label="Relation" error={errors.emergencyRelation}>
            <Select name="emergencyRelation" form={form} errors={errors} onChange={handleChange}>
              <option value="">Select</option>
              <option>Spouse</option><option>Parent</option><option>Sibling</option>
              <option>Friend</option><option>Other</option>
            </Select>
          </Field>
          <Field label="Driving Experience" required error={errors.experience}>
            <Select name="experience" form={form} errors={errors} onChange={handleChange}>
              <option value="">Select</option>
              <option>Less than 1 year</option><option>1–2 years</option>
              <option>3–5 years</option><option>5–10 years</option><option>10+ years</option>
            </Select>
          </Field>
          <Field label="Languages Known" error={errors.languagesKnown}>
            <Input name="languagesKnown" form={form} errors={errors} onChange={handleChange} placeholder="e.g. Hindi, English, Punjabi" />
          </Field>
          <Field label="Background Verification Consent" required error={errors.backgroundCheck}>
            <Select name="backgroundCheck" form={form} errors={errors} onChange={handleChange}>
              <option value="">Select</option>
              <option value="yes">Yes, I consent</option>
              <option value="no">No</option>
            </Select>
          </Field>
          <FullWidth>
            <Field label="Additional Notes (Optional)" error={errors.additionalNotes}>
              <textarea
                name="additionalNotes"
                value={form.additionalNotes}
                onChange={handleChange}
                placeholder="Special vehicle features, prior tour experience, etc."
                rows={3}
                style={{
                  background: "#f9fafb",
                  border: "1.5px solid #e5e7eb",
                  borderRadius: 8,
                  padding: "9px 12px",
                  fontSize: 14,
                  color: "#111827",
                  fontFamily: "inherit",
                  width: "100%",
                  outline: "none",
                  boxSizing: "border-box",
                  resize: "vertical",
                  lineHeight: 1.6,
                }}
                onFocus={(e) => { e.target.style.borderColor = PRIMARY; e.target.style.boxShadow = `0 0 0 3px ${PRIMARY}22`; e.target.style.background = "#fff"; }}
                onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none"; e.target.style.background = "#f9fafb"; }}
              />
            </Field>
          </FullWidth>
        </SectionCard>

        {/* Terms */}
        <div style={{
          background: PRIMARY_LIGHT, border: `1px solid ${PRIMARY}33`,
          borderRadius: 10, padding: "12px 16px",
          fontSize: 12, color: "#1e40af", lineHeight: 1.8, marginBottom: "1.25rem",
        }}>
          By submitting this form, I confirm that all details are accurate and I agree to the cab partner terms & conditions.
          Fields marked <span style={{ color: PRIMARY, fontWeight: 700 }}>*</span> are mandatory.
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            background: `linear-gradient(135deg, ${PRIMARY} 0%, #2563EB 60%, #3B82F6 100%)`,
            color: "#fff",
            border: "none",
            padding: "15px",
            fontSize: 16,
            fontWeight: 700,
            borderRadius: 10,
            cursor: "pointer",
            fontFamily: "inherit",
            letterSpacing: 0.3,
            boxShadow: `0 4px 14px ${PRIMARY}55`,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.target.style.background = `linear-gradient(135deg, ${PRIMARY_DARK}, #1D4ED8)`; e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = `0 6px 20px ${PRIMARY}66`; }}
          onMouseLeave={(e) => { e.target.style.background = `linear-gradient(135deg, ${PRIMARY} 0%, #2563EB 60%, #3B82F6 100%)`; e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = `0 4px 14px ${PRIMARY}55`; }}
          onMouseDown={(e) => { e.target.style.transform = "scale(0.99)"; }}
          onMouseUp={(e) => { e.target.style.transform = "translateY(-1px)"; }}
        >
          🚀 Submit Registration
        </button>

        <div style={{ textAlign: "center", fontSize: 12, color: "#9ca3af", marginTop: 12 }}>
          🔒 Your data is encrypted and stored securely
        </div>
      </div>
    </div>
  );
}