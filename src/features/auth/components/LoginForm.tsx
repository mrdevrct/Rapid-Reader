"use client";

import { useState } from "react";
import PhoneForm from "./PhoneForm";
import OtpForm from "./OtpForm";

export default function LoginForm() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  return showOtpForm ? (
    <OtpForm phoneNumber={phoneNumber} setShowOtpForm={setShowOtpForm} />
  ) : (
    <PhoneForm
      value={value}
      error={error}
      setValue={setValue}
      setError={setError}
      setPhoneNumber={setPhoneNumber}
      setShowOtpForm={setShowOtpForm}
    />
  );
}