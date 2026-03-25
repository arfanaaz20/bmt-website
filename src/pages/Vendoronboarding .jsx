import { useState, useRef } from "react";

// ── Validation ─────────────────────────────────────────────
function validate(step, form) {
  const e = {};
  if (step === 0) {
    if (!form.fullName.trim()) e.fullName = "Full name required hai.";
    if (!form.mobile.trim()) e.mobile = "Mobile number required hai.";
    else if (!/^\d{10}$/.test(form.mobile)) e.mobile = "Valid 10-digit mobile number enter karein.";
    if (!form.email.trim()) e.email = "Email required hai.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email enter karein.";
    if (!form.dob.trim()) e.dob = "Date of birth required hai.";
    if (!form.gender) e.gender = "Gender select karein.";
    if (!form.address.trim()) e.address = "Address required hai.";
    if (!form.city.trim()) e.city = "City required hai.";
    if (!form.state) e.state = "State select karein.";
    if (!form.pincode.trim()) e.pincode = "Pincode required hai.";
    else if (!/^\d{6}$/.test(form.pincode)) e.pincode = "Valid 6-digit pincode enter karein.";
    if (!form.panNumber.trim()) e.panNumber = "PAN number required hai.";
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(form.panNumber.toUpperCase())) e.panNumber = "Valid PAN number enter karein (e.g. ABCDE1234F).";
    if (!form.aadhar.trim()) e.aadhar = "Aadhar number required hai.";
    else if (!/^\d{12}$/.test(form.aadhar)) e.aadhar = "Valid 12-digit Aadhar number enter karein.";
  }
  if (step === 1) {
    if (!form.accountHolder.trim()) e.accountHolder = "Account holder naam required hai.";
    if (!form.accountNumber.trim()) e.accountNumber = "Account number required hai.";
    else if (!/^\d{9,18}$/.test(form.accountNumber)) e.accountNumber = "Valid account number enter karein.";
    if (!form.confirmAccount.trim()) e.confirmAccount = "Confirm account number required hai.";
    else if (form.accountNumber !== form.confirmAccount) e.confirmAccount = "Account numbers match nahi kar rahe.";
    if (!form.ifsc.trim()) e.ifsc = "IFSC code required hai.";
    else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(form.ifsc.toUpperCase())) e.ifsc = "Valid IFSC code enter karein (e.g. SBIN0001234).";
    if (!form.bankName.trim()) e.bankName = "Bank naam required hai.";
    if (!form.branchName.trim()) e.branchName = "Branch naam required hai.";
    if (!form.accountType) e.accountType = "Account type select karein.";
  }
  if (step === 2) {
    if (!form.gstNumber.trim()) e.gstNumber = "GST number required hai.";
    else if (!/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test(form.gstNumber.toUpperCase())) e.gstNumber = "Valid GST number enter karein.";
    if (!form.businessName.trim()) e.businessName = "Business naam required hai.";
    if (!form.businessType) e.businessType = "Business type select karein.";
    if (!form.businessAddress.trim()) e.businessAddress = "Business address required hai.";
    if (!form.gstRegDate.trim()) e.gstRegDate = "GST registration date required hai.";
  }
  if (step === 3) {
    if (!form.panDoc) e.panDoc = "PAN card upload karein.";
    if (!form.aadharDoc) e.aadharDoc = "Aadhar card upload karein.";
    if (!form.bankDoc) e.bankDoc = "Bank passbook/cancelled cheque upload karein.";
    if (!form.gstDoc) e.gstDoc = "GST certificate upload karein.";
  }
  return e;
}

const STATES = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Delhi","Jammu & Kashmir","Ladakh","Puducherry","Chandigarh"];

const STEPS = [
  { id: 0, label: "Personal Details", icon: "👤", short: "Personal" },
  { id: 1, label: "Bank Details", icon: "🏦", short: "Bank" },
  { id: 2, label: "GST Details", icon: "🧾", short: "GST" },
  { id: 3, label: "Documents", icon: "📁", short: "Docs" },
  { id: 4, label: "Success", icon: "✅", short: "Done" },
];

function Field({ label, required, error, hint, children }) {
  return (
    <div className="vo-field">
      <label className="vo-label">
        {label} {required && <span className="vo-req">*</span>}
        {hint && <span className="vo-hint-inline"> ({hint})</span>}
      </label>
      {children}
      {error && <div className="vo-err"><span>⚠</span> {error}</div>}
    </div>
  );
}

function Input({ error, uppercase, ...props }) {
  return (
    <input
      className={`vo-input${error ? " vo-input-err" : ""}`}
      onChange={e => {
        if (uppercase && props.onChange) {
          e.target.value = e.target.value.toUpperCase();
        }
        if (props.onChange) props.onChange(e);
      }}
      {...props}
    />
  );
}

function Select({ error, children, ...props }) {
  return (
    <select className={`vo-input${error ? " vo-input-err" : ""}`} {...props}>
      {children}
    </select>
  );
}

function FileUpload({ label, value, onChange, error, accept = "image/*,.pdf" }) {
  const ref = useRef();
  return (
    <div
      className={`vo-file-zone${error ? " vo-file-err" : ""}${value ? " vo-file-done" : ""}`}
      onClick={() => ref.current?.click()}
    >
      <input ref={ref} type="file" accept={accept} style={{ display: "none" }} onChange={e => onChange(e.target.files[0])} />
      {value ? (
        <div className="vo-file-selected">
          <span className="vo-file-check">✅</span>
          <div>
            <div className="vo-file-name">{value.name}</div>
            <div className="vo-file-size">{(value.size / 1024).toFixed(1)} KB — Click to change</div>
          </div>
        </div>
      ) : (
        <div className="vo-file-empty">
          <div className="vo-file-icon">📎</div>
          <div className="vo-file-text">
            <strong>Click to upload</strong> or drag & drop
            <div className="vo-file-sub">PDF, JPG, PNG (max 5MB)</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function VendorOnboarding() {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const [form, setForm] = useState({
    // Personal
    fullName: "", mobile: "", email: "", dob: "", gender: "",
    address: "", city: "", state: "", pincode: "",
    panNumber: "", aadhar: "",
    // Bank
    accountHolder: "", accountNumber: "", confirmAccount: "",
    ifsc: "", bankName: "", branchName: "", accountType: "",
    // GST
    gstNumber: "", businessName: "", businessType: "",
    businessAddress: "", gstRegDate: "",
    // Docs
    panDoc: null, aadharDoc: null, bankDoc: null, gstDoc: null,
  });

  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleNext = () => {
    const errs = validate(step, form);
    setTouched(true);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setErrors({});
      setTouched(false);
      setStep(s => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(".vo-form-body")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBack = () => {
    setErrors({});
    setTouched(false);
    setStep(s => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const errCount = Object.keys(errors).length;

  return (
    <div className="vo-wrap">
      <style>{CSS}</style>

      {/* Header */}
      {/* <header className="vo-header">
        <div className="vo-header-inner">
          <div className="vo-logo">
            <span className="vo-logo-bird">🐦</span>
            <span className="vo-logo-text">BirdMy<strong>Trip</strong></span>
          </div>
          <div className="vo-header-tag">Vendor Onboarding Portal</div>
        </div>
      </header> */}

      {/* Progress Stepper */}
      <div className="vo-stepper-wrap">
        <div className="vo-stepper">
          {STEPS.map((s, i) => (
            <div key={s.id} className={`vo-step${step === i ? " active" : ""}${step > i ? " done" : ""}`}>
              <div className="vo-step-circle">
                {step > i ? "✓" : s.icon}
              </div>
              <div className="vo-step-label">{s.label}</div>
              {i < STEPS.length - 1 && <div className={`vo-step-line${step > i ? " done" : ""}`} />}
            </div>
          ))}
        </div>
        <div className="vo-progress-bar">
          <div className="vo-progress-fill" style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }} />
        </div>
      </div>

      <main className="vo-main">
        <div className="vo-card">

          {/* Error Banner */}
          {errCount > 0 && touched && (
            <div className="vo-error-banner">
              <span className="vo-error-icon">⚠️</span>
              <div>
                <strong>{errCount} error{errCount > 1 ? "s" : ""} found</strong>
                <div>Please fill all required fields to continue.</div>
              </div>
            </div>
          )}

          <div className="vo-form-body">

            {/* ── STEP 0: Personal Details ── */}
            {step === 0 && (
              <>
                <div className="vo-section-header">
                  <span className="vo-section-icon">👤</span>
                  <div>
                    <h2 className="vo-section-title">Personal Details</h2>
                    {/* <p className="vo-section-sub">Apni personal information fill karein</p> */}
                  </div>
                </div>

                <div className="vo-divider" />

                <div className="vo-section-group">
                  <div className="vo-group-label">Basic Information</div>
                  <div className="vo-grid-2">
                    <Field label="Full Name" required error={errors.fullName}>
                      <Input placeholder="Apna poora naam likhein" value={form.fullName} error={errors.fullName} onChange={e => upd("fullName", e.target.value)} />
                    </Field>
                    <Field label="Mobile Number" required error={errors.mobile}>
                      <div className="vo-phone-row">
                        <span className="vo-country-code">🇮🇳 +91</span>
                        <Input placeholder="10-digit mobile number" value={form.mobile} error={errors.mobile} maxLength={10} onChange={e => upd("mobile", e.target.value.replace(/\D/g, ""))} />
                      </div>
                    </Field>
                    <Field label="Email Address" required error={errors.email}>
                      <Input type="email" placeholder="example@email.com" value={form.email} error={errors.email} onChange={e => upd("email", e.target.value)} />
                    </Field>
                    <Field label="Date of Birth" required error={errors.dob}>
                      <Input type="date" value={form.dob} error={errors.dob} onChange={e => upd("dob", e.target.value)} />
                    </Field>
                    <Field label="Gender" required error={errors.gender}>
                      <Select value={form.gender} error={errors.gender} onChange={e => upd("gender", e.target.value)}>
                        <option value="">Select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </Select>
                    </Field>
                  </div>
                </div>

                <div className="vo-section-group">
                  <div className="vo-group-label">Address Details</div>
                  <Field label="Full Address" required error={errors.address}>
                    <textarea className={`vo-input vo-textarea${errors.address ? " vo-input-err" : ""}`} placeholder="House/Flat no., Street, Area..." value={form.address} onChange={e => upd("address", e.target.value)} rows={3} />
                  </Field>
                  <div className="vo-grid-3">
                    <Field label="City" required error={errors.city}>
                      <Input placeholder="City" value={form.city} error={errors.city} onChange={e => upd("city", e.target.value)} />
                    </Field>
                    <Field label="State" required error={errors.state}>
                      <Select value={form.state} error={errors.state} onChange={e => upd("state", e.target.value)}>
                        <option value="">Select State</option>
                        {STATES.map(s => <option key={s}>{s}</option>)}
                      </Select>
                    </Field>
                    <Field label="PIN Code" required error={errors.pincode}>
                      <Input placeholder="6-digit PIN" value={form.pincode} error={errors.pincode} maxLength={6} onChange={e => upd("pincode", e.target.value.replace(/\D/g, ""))} />
                    </Field>
                  </div>
                </div>

                <div className="vo-section-group">
                  <div className="vo-group-label">Identity Details</div>
                  <div className="vo-grid-2">
                    <Field label="PAN Number" required hint="e.g. ABCDE1234F" error={errors.panNumber}>
                      <Input placeholder="ABCDE1234F" value={form.panNumber} error={errors.panNumber} maxLength={10} uppercase onChange={e => upd("panNumber", e.target.value.toUpperCase())} />
                    </Field>
                    <Field label="Aadhar Number" required hint="12 digits" error={errors.aadhar}>
                      <Input placeholder="XXXX XXXX XXXX" value={form.aadhar} error={errors.aadhar} maxLength={12} onChange={e => upd("aadhar", e.target.value.replace(/\D/g, ""))} />
                    </Field>
                  </div>
                </div>
              </>
            )}

            {/* ── STEP 1: Bank Details ── */}
            {step === 1 && (
              <>
                <div className="vo-section-header">
                  <span className="vo-section-icon">🏦</span>
                  <div>
                    <h2 className="vo-section-title">Bank Details</h2>
                    {/* <p className="vo-section-sub">Payment ke liye apna bank account add karein</p> */}
                  </div>
                </div>
                <div className="vo-divider" />
{/* 
                <div className="vo-info-box">
                  <span>ℹ️</span>
                  <span>Yeh information aapke payments process karne ke liye use hogi. Sahi details bharein.</span>
                </div> */}

                <div className="vo-section-group">
                  <div className="vo-group-label">Account Information</div>
                  <div className="vo-grid-2">
                    <Field label="Account Holder Name" required error={errors.accountHolder}>
                      <Input placeholder="As per bank records" value={form.accountHolder} error={errors.accountHolder} onChange={e => upd("accountHolder", e.target.value)} />
                    </Field>
                    <Field label="Account Type" required error={errors.accountType}>
                      <Select value={form.accountType} error={errors.accountType} onChange={e => upd("accountType", e.target.value)}>
                        <option value="">Select account type</option>
                        <option>Savings Account</option>
                        <option>Current Account</option>
                        <option>Salary Account</option>
                        <option>OD Account</option>
                      </Select>
                    </Field>
                    <Field label="Account Number" required error={errors.accountNumber}>
                      <Input placeholder="Enter account number" value={form.accountNumber} error={errors.accountNumber} onChange={e => upd("accountNumber", e.target.value.replace(/\D/g, ""))} />
                    </Field>
                    <Field label="Confirm Account Number" required error={errors.confirmAccount}>
                      <Input placeholder="Re-enter account number" value={form.confirmAccount} error={errors.confirmAccount} onPaste={e => e.preventDefault()} onChange={e => upd("confirmAccount", e.target.value.replace(/\D/g, ""))} />
                    </Field>
                  </div>
                </div>

                <div className="vo-section-group">
                  <div className="vo-group-label">Bank Information</div>
                  <div className="vo-grid-2">
                    <Field label="IFSC Code" required hint="e.g. SBIN0001234" error={errors.ifsc}>
                      <Input placeholder="SBIN0001234" value={form.ifsc} error={errors.ifsc} maxLength={11} uppercase onChange={e => upd("ifsc", e.target.value.toUpperCase())} />
                    </Field>
                    <Field label="Bank Name" required error={errors.bankName}>
                      <Input placeholder="e.g. State Bank of India" value={form.bankName} error={errors.bankName} onChange={e => upd("bankName", e.target.value)} />
                    </Field>
                    <Field label="Branch Name" required error={errors.branchName}>
                      <Input placeholder="e.g. Connaught Place, New Delhi" value={form.branchName} error={errors.branchName} onChange={e => upd("branchName", e.target.value)} />
                    </Field>
                  </div>
                </div>
              </>
            )}

            {/* ── STEP 2: GST Details ── */}
            {step === 2 && (
              <>
                <div className="vo-section-header">
                  <span className="vo-section-icon">🧾</span>
                  <div>
                    <h2 className="vo-section-title">GST Details</h2>
                    {/* <p className="vo-section-sub">Apna GST registration information provide karein</p> */}
                  </div>
                </div>
                <div className="vo-divider" />

                <div className="vo-section-group">
                  <div className="vo-group-label">GST Registration</div>
                  <div className="vo-grid-2">
                    <Field label="GSTIN Number" required hint="15-character GST number" error={errors.gstNumber}>
                      <Input placeholder="22AAAAA0000A1Z5" value={form.gstNumber} error={errors.gstNumber} maxLength={15} uppercase onChange={e => upd("gstNumber", e.target.value.toUpperCase())} />
                    </Field>
                    <Field label="GST Registration Date" required error={errors.gstRegDate}>
                      <Input type="date" value={form.gstRegDate} error={errors.gstRegDate} onChange={e => upd("gstRegDate", e.target.value)} />
                    </Field>
                  </div>
                </div>

                <div className="vo-section-group">
                  <div className="vo-group-label">Business Information</div>
                  <div className="vo-grid-2">
                    <Field label="Registered Business Name" required error={errors.businessName}>
                      <Input placeholder="As per GST certificate" value={form.businessName} error={errors.businessName} onChange={e => upd("businessName", e.target.value)} />
                    </Field>
                    <Field label="Business Type" required error={errors.businessType}>
                      <Select value={form.businessType} error={errors.businessType} onChange={e => upd("businessType", e.target.value)}>
                        <option value="">Select business type</option>
                        <option>Sole Proprietorship</option>
                        <option>Partnership Firm</option>
                        <option>Private Limited Company</option>
                        <option>Public Limited Company</option>
                        <option>LLP</option>
                        <option>Trust / Society</option>
                        <option>HUF</option>
                        <option>Other</option>
                      </Select>
                    </Field>
                  </div>
                  <Field label="Registered Business Address" required error={errors.businessAddress}>
                    <textarea className={`vo-input vo-textarea${errors.businessAddress ? " vo-input-err" : ""}`} placeholder="As per GST registration..." value={form.businessAddress} onChange={e => upd("businessAddress", e.target.value)} rows={3} />
                  </Field>
                </div>
              </>
            )}

            {/* ── STEP 3: Documents ── */}
            {step === 3 && (
              <>
                <div className="vo-section-header">
                  <span className="vo-section-icon">📁</span>
                  <div>
                    <h2 className="vo-section-title">Upload Documents</h2>
                    {/* <p className="vo-section-sub">Verification ke liye required documents upload karein</p> */}
                  </div>
                </div>
                <div className="vo-divider" />

                {/* <div className="vo-info-box">
                  <span>ℹ️</span>
                  <span>Sabhi documents clearly readable hone chahiye. Accepted formats: JPG, PNG, PDF. Max size: 5MB each.</span>
                </div> */}

                <div className="vo-docs-grid">
                  <div className="vo-doc-card">
                    <div className="vo-doc-header">
                      <span className="vo-doc-icon">🪪</span>
                      <div>
                        <div className="vo-doc-title">PAN Card <span className="vo-req">*</span></div>
                       
                      </div>
                    </div>
                    <FileUpload value={form.panDoc} onChange={v => upd("panDoc", v)} error={errors.panDoc} />
                    {errors.panDoc && <div className="vo-err"><span>⚠</span> {errors.panDoc}</div>}
                  </div>

                  <div className="vo-doc-card">
                    <div className="vo-doc-header">
                      <span className="vo-doc-icon">🆔</span>
                      <div>
                        <div className="vo-doc-title">Aadhar Card <span className="vo-req">*</span></div>
                        
                      </div>
                    </div>
                    <FileUpload value={form.aadharDoc} onChange={v => upd("aadharDoc", v)} error={errors.aadharDoc} />
                    {errors.aadharDoc && <div className="vo-err"><span>⚠</span> {errors.aadharDoc}</div>}
                  </div>

                  <div className="vo-doc-card">
                    <div className="vo-doc-header">
                      <span className="vo-doc-icon">🏦</span>
                      <div>
                        <div className="vo-doc-title">Bank Passbook / Cancelled Cheque <span className="vo-req">*</span></div>
                        
                      </div>
                    </div>
                    <FileUpload value={form.bankDoc} onChange={v => upd("bankDoc", v)} error={errors.bankDoc} />
                    {errors.bankDoc && <div className="vo-err"><span>⚠</span> {errors.bankDoc}</div>}
                  </div>

                  <div className="vo-doc-card">
                    <div className="vo-doc-header">
                      <span className="vo-doc-icon">🧾</span>
                      <div>
                        <div className="vo-doc-title">GST Certificate <span className="vo-req">*</span></div>
                        
                      </div>
                    </div>
                    <FileUpload value={form.gstDoc} onChange={v => upd("gstDoc", v)} error={errors.gstDoc} />
                    {errors.gstDoc && <div className="vo-err"><span>⚠</span> {errors.gstDoc}</div>}
                  </div>
                </div>
              </>
            )}

            {/* ── STEP 4: Success ── */}
            {step === 4 && (
              <div className="vo-success">
                <div className="vo-success-anim">
                  <div className="vo-success-ring" />
                  <div className="vo-success-check">✓</div>
                </div>
                <h2 className="vo-success-title">Registration Successful!</h2>
                <p className="vo-success-msg">
                  
                 
                </p>

                <div className="vo-success-summary">
                  <div className="vo-summary-row"><span>👤 Name</span><strong>{form.fullName}</strong></div>
                  <div className="vo-summary-row"><span>📱 Mobile</span><strong>+91 {form.mobile}</strong></div>
                  <div className="vo-summary-row"><span>✉️ Email</span><strong>{form.email}</strong></div>
                  <div className="vo-summary-row"><span>🏦 Bank</span><strong>{form.bankName} — {form.accountType}</strong></div>
                  <div className="vo-summary-row"><span>🧾 GSTIN</span><strong>{form.gstNumber}</strong></div>
                </div>

                <div className="vo-success-steps">
                  <div className="vo-next-step"><span className="vo-ns-num">1</span><div><strong>Email Confirmation</strong></div></div>
                  <div className="vo-next-step"><span className="vo-ns-num">2</span><div><strong>Document Verification</strong></div></div>
                  <div className="vo-next-step"><span className="vo-ns-num">3</span><div><strong>Account Activation</strong></div></div>
                </div>

                <button className="vo-btn-primary" style={{ marginTop: 32 }} onClick={() => { setStep(0); setForm({ fullName:"",mobile:"",email:"",dob:"",gender:"",address:"",city:"",state:"",pincode:"",panNumber:"",aadhar:"",accountHolder:"",accountNumber:"",confirmAccount:"",ifsc:"",bankName:"",branchName:"",accountType:"",gstNumber:"",businessName:"",businessType:"",businessAddress:"",gstRegDate:"",panDoc:null,aadharDoc:null,bankDoc:null,gstDoc:null }); }}>
                  🔄 New Registration
                </button>
              </div>
            )}

          </div>

          {/* Footer Buttons */}
          {step < 4 && (
            <div className="vo-footer">
              <div className="vo-footer-left">
                {step > 0 && (
                  <button className="vo-btn-back" onClick={handleBack}>← Back</button>
                )}
              </div>
              <div className="vo-footer-center">
                <span className="vo-step-indicator">Step {step + 1} of {STEPS.length - 1}</span>
              </div>
              <div className="vo-footer-right">
                <button className="vo-btn-primary" onClick={handleNext}>
                  {step === 3 ? "Submit Application ✓" : "Next →"}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .vo-wrap {
    min-height: 100vh;
    background: #f0f4f9;
    font-family: 'DM Sans', sans-serif;
    color: #1a2332;
  }

  /* ── Header ── */
  .vo-header {
    background: linear-gradient(135deg, #0f2444 0%, #1a3a6b 60%, #0d5c8a 100%);
    padding: 0;
    box-shadow: 0 2px 20px rgba(0,0,0,0.25);
  }
  .vo-header-inner {
    max-width: 960px;
    margin: 0 auto;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .vo-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Sora', sans-serif;
    font-size: 22px;
    color: #fff;
  }
  .vo-logo-bird { font-size: 28px; }
  .vo-logo-text strong { color: #38bdf8; }
  .vo-header-tag {
    font-size: 12px;
    color: rgba(255,255,255,0.6);
    background: rgba(255,255,255,0.1);
    padding: 4px 12px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.15);
    letter-spacing: 0.04em;
  }

  /* ── Stepper ── */
  .vo-stepper-wrap {
    background: #fff;
    border-bottom: 1px solid #e2e8f0;
    box-shadow: 0 1px 8px rgba(0,0,0,0.06);
  }
  .vo-stepper {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px 24px 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
  }
  .vo-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    flex: 1;
    position: relative;
    cursor: default;
  }
  .vo-step-circle {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #f1f5f9;
    border: 2px solid #cbd5e1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #94a3b8;
    transition: all 0.3s;
    z-index: 2;
  }
  .vo-step.active .vo-step-circle {
    background: linear-gradient(135deg, #1a3a6b, #0d5c8a);
    border-color: #1a3a6b;
    color: #fff;
    box-shadow: 0 4px 14px rgba(26,58,107,0.35);
    transform: scale(1.1);
  }
  .vo-step.done .vo-step-circle {
    background: #16a34a;
    border-color: #16a34a;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
  .vo-step-label {
    font-size: 11px;
    font-weight: 600;
    color: #94a3b8;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .vo-step.active .vo-step-label { color: #1a3a6b; }
  .vo-step.done .vo-step-label { color: #16a34a; }
  .vo-step-line {
    position: absolute;
    top: 22px;
    left: calc(50% + 22px);
    right: calc(-50% + 22px);
    height: 2px;
    background: #e2e8f0;
    z-index: 1;
  }
  .vo-step-line.done { background: linear-gradient(90deg, #16a34a, #16a34a); }
  .vo-progress-bar {
    max-width: 960px;
    margin: 12px auto 0;
    height: 3px;
    background: #e2e8f0;
    border-radius: 2px;
  }
  .vo-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #1a3a6b, #0d5c8a, #38bdf8);
    border-radius: 2px;
    transition: width 0.5s cubic-bezier(.4,0,.2,1);
  }

  /* ── Main ── */
  .vo-main {
    max-width: 960px;
    margin: 0 auto;
    padding: 32px 20px 80px;
  }
  .vo-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    overflow: hidden;
  }

  /* ── Error Banner ── */
  .vo-error-banner {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 16px 32px;
    background: #fef2f2;
    border-bottom: 2px solid #fca5a5;
    color: #991b1b;
    font-size: 14px;
  }
  .vo-error-icon { font-size: 20px; flex-shrink: 0; }
  .vo-error-banner strong { display: block; margin-bottom: 2px; font-size: 15px; }

  /* ── Form Body ── */
  .vo-form-body { padding: 32px 40px 24px; }

  .vo-section-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }
  .vo-section-icon {
    font-size: 36px;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #eff6ff, #dbeafe);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid #bfdbfe;
  }
  .vo-section-title {
    font-family: 'Sora', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #0f2444;
  }
  .vo-section-sub { font-size: 13px; color: #64748b; margin-top: 3px; }

  .vo-divider { height: 1px; background: #f1f5f9; margin-bottom: 28px; }

  .vo-section-group { margin-bottom: 28px; }
  .vo-group-label {
    font-size: 12px;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid #f1f5f9;
  }

  .vo-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .vo-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }

  .vo-field { display: flex; flex-direction: column; }
  .vo-label {
    font-size: 13px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 7px;
    display: block;
  }
  .vo-hint-inline { font-size: 11px; color: #94a3b8; font-weight: 400; }
  .vo-req { color: #ef4444; font-weight: 700; }

  .vo-input {
    width: 100%;
    padding: 11px 14px;
    border: 1.5px solid #e2e8f0;
    border-radius: 8px;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    color: #1a2332;
    background: #fff;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .vo-input:focus {
    border-color: #1a3a6b;
    box-shadow: 0 0 0 3px rgba(26,58,107,0.1);
  }
  .vo-input-err {
    border-color: #ef4444 !important;
    background: #fff8f8 !important;
  }
  .vo-input-err:focus { box-shadow: 0 0 0 3px rgba(239,68,68,0.12) !important; }
  .vo-textarea { resize: vertical; min-height: 80px; }

  .vo-phone-row {
    display: flex;
    align-items: center;
    border: 1.5px solid #e2e8f0;
    border-radius: 8px;
    overflow: hidden;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .vo-phone-row:focus-within {
    border-color: #1a3a6b;
    box-shadow: 0 0 0 3px rgba(26,58,107,0.1);
  }
  .vo-country-code {
    padding: 11px 12px;
    background: #f8fafc;
    border-right: 1.5px solid #e2e8f0;
    font-size: 13px;
    color: #475569;
    white-space: nowrap;
    flex-shrink: 0;
    font-weight: 600;
  }
  .vo-phone-row .vo-input {
    border: none;
    border-radius: 0;
    box-shadow: none !important;
  }

  .vo-err {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    color: #dc2626;
    font-weight: 500;
    margin-top: 5px;
  }

  .vo-info-box {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 16px;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 8px;
    font-size: 13px;
    color: #1e40af;
    margin-bottom: 24px;
  }

  /* ── Document Upload ── */
  .vo-docs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .vo-doc-card {
    border: 1.5px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
    background: #fafbfc;
    transition: border-color 0.2s;
  }
  .vo-doc-card:hover { border-color: #93c5fd; }
  .vo-doc-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }
  .vo-doc-icon {
    font-size: 28px;
    width: 48px;
    height: 48px;
    background: #eff6ff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .vo-doc-title { font-size: 14px; font-weight: 700; color: #1a2332; }
  .vo-doc-sub { font-size: 12px; color: #64748b; margin-top: 2px; }

  .vo-file-zone {
    border: 2px dashed #cbd5e1;
    border-radius: 8px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.2s;
    background: #fff;
  }
  .vo-file-zone:hover { border-color: #1a3a6b; background: #eff6ff; }
  .vo-file-err { border-color: #ef4444 !important; background: #fff8f8 !important; }
  .vo-file-done { border-color: #16a34a; background: #f0fdf4; border-style: solid; }
  .vo-file-empty { display: flex; align-items: center; gap: 12px; }
  .vo-file-icon { font-size: 24px; }
  .vo-file-text { font-size: 13px; color: #64748b; }
  .vo-file-text strong { color: #1a3a6b; }
  .vo-file-sub { font-size: 11px; color: #94a3b8; margin-top: 2px; }
  .vo-file-selected { display: flex; align-items: center; gap: 12px; }
  .vo-file-check { font-size: 22px; }
  .vo-file-name { font-size: 13px; font-weight: 600; color: #16a34a; }
  .vo-file-size { font-size: 11px; color: #94a3b8; margin-top: 2px; }

  /* ── Footer ── */
  .vo-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    border-top: 1px solid #f1f5f9;
    background: #fafbfc;
  }
  .vo-footer-left, .vo-footer-right { flex: 1; }
  .vo-footer-right { display: flex; justify-content: flex-end; }
  .vo-footer-center {
    flex: 1;
    text-align: center;
  }
  .vo-step-indicator {
    font-size: 12px;
    color: #94a3b8;
    font-weight: 600;
    background: #f1f5f9;
    padding: 4px 12px;
    border-radius: 20px;
  }
  .vo-btn-back {
    padding: 11px 24px;
    background: #fff;
    border: 1.5px solid #e2e8f0;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #475569;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.2s;
  }
  .vo-btn-back:hover { background: #f1f5f9; border-color: #cbd5e1; }
  .vo-btn-primary {
    padding: 12px 32px;
    background: linear-gradient(135deg, #1a3a6b, #0d5c8a);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.2s;
    box-shadow: 0 4px 12px rgba(26,58,107,0.3);
  }
  .vo-btn-primary:hover {
    background: linear-gradient(135deg, #0f2444, #1a3a6b);
    box-shadow: 0 6px 18px rgba(26,58,107,0.4);
    transform: translateY(-1px);
  }

  /* ── Success ── */
  .vo-success {
    padding: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .vo-success-anim {
    position: relative;
    width: 100px;
    height: 100px;
    margin-bottom: 24px;
  }
  .vo-success-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 3px solid #16a34a;
    animation: vo-ring-pop 0.5s ease-out forwards;
    opacity: 0;
  }
  @keyframes vo-ring-pop {
    0% { transform: scale(0.5); opacity: 0; }
    60% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
  .vo-success-check {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 44px;
    color: #16a34a;
    font-weight: 800;
    animation: vo-check-in 0.4s 0.2s ease-out both;
  }
  @keyframes vo-check-in {
    from { transform: scale(0); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  .vo-success-title {
    font-family: 'Sora', sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: #0f2444;
    margin-bottom: 12px;
  }
  .vo-success-msg {
    font-size: 15px;
    color: #475569;
    line-height: 1.7;
    max-width: 500px;
    margin-bottom: 32px;
  }
  .vo-success-summary {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px 28px;
    width: 100%;
    max-width: 480px;
    margin-bottom: 32px;
    text-align: left;
  }
  .vo-summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #f1f5f9;
    font-size: 14px;
  }
  .vo-summary-row:last-child { border-bottom: none; }
  .vo-summary-row span { color: #64748b; }
  .vo-summary-row strong { color: #1a2332; }
  .vo-success-steps {
    width: 100%;
    max-width: 480px;
    text-align: left;
  }
  .vo-next-step {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 12px 0;
    border-bottom: 1px solid #f1f5f9;
  }
  .vo-next-step:last-child { border-bottom: none; }
  .vo-ns-num {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1a3a6b, #0d5c8a);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
    flex-shrink: 0;
  }
  .vo-next-step strong { font-size: 14px; color: #1a2332; display: block; margin-bottom: 3px; }
  .vo-next-step p { font-size: 13px; color: #64748b; }

  @media (max-width: 680px) {
    .vo-form-body { padding: 24px 20px; }
    .vo-grid-2, .vo-grid-3, .vo-docs-grid { grid-template-columns: 1fr; }
    .vo-footer { padding: 16px 20px; flex-wrap: wrap; gap: 12px; }
    .vo-footer-center { order: -1; width: 100%; }
    .vo-step-label { display: none; }
    .vo-success { padding: 24px 20px; }
  }
`;