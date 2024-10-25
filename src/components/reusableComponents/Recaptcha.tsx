"use client";

import ReCAPTCHA from "react-google-recaptcha";

type RecaptchaProps = {
  onChange: ((token: string | null) => void) | undefined;
};

export function Recaptcha({ onChange }: RecaptchaProps) {
  return (
    <ReCAPTCHA
      onChange={onChange}
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      className="mx-auto"
    />
  );
}
