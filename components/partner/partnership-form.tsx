"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";

interface FormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  partnershipType: string;
  message: string;
}

const INITIAL_DATA: FormData = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  partnershipType: "",
  message: "",
};

const PARTNERSHIP_TYPES = [
  "Government",
  "School / Institution",
  "Industry",
  "CSR / Social Impact",
  "Other",
];

export function PartnershipForm() {
  const [formData, setFormData] = React.useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific error on input
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Please enter your organization name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your work email.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid work email address.";
      }
    }

    if (!formData.partnershipType) {
      newErrors.partnershipType = "Please select a partnership type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us how you'd like to work with NTARA.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(
          errorData?.error || "Something went wrong. Please try again."
        );
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_DATA);
    setErrors({});
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section
      id="partner-form"
      aria-labelledby="partner-form-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32"
    >
      <Container size="default">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center space-y-4 mb-12 sm:mb-14">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-subtle border border-brand-blue/20">
              <span className="size-2 rounded-full bg-brand-blue" aria-hidden="true" />
              <span className="font-heading font-semibold text-xs tracking-widest uppercase text-brand-blue">
                LET&apos;S CONNECT
              </span>
            </div>

            {/* Headline */}
            <h2
              id="partner-form-heading"
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.65rem] text-brand-navy leading-tight tracking-tight"
            >
              Start a conversation.
            </h2>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
              Tell us about your organization and how you&apos;d like to work with NTARA.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-10 lg:p-12 shadow-[0_4px_24px_-4px_rgba(11,19,43,0.04)]">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                /* Success State */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center py-8 sm:py-12 space-y-5"
                >
                  <div
                    className="size-16 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shadow-xs"
                    aria-hidden="true"
                  >
                    <CheckCircle2 className="size-8" />
                  </div>

                  <div className="space-y-2 max-w-md">
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight">
                      Thank you. Your partnership request has been received.
                    </h3>
                    <p className="font-sans text-base text-neutral-600 leading-relaxed">
                      NTARA will get back to you soon.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center h-11 px-6 rounded-full text-sm font-semibold text-brand-navy bg-neutral-100 hover:bg-neutral-200/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                    >
                      Send Another Request
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Form Fields */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >
                  {/* General Error Banner */}
                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 p-4 rounded-xl bg-red-50/90 border border-red-200 text-red-800 text-sm font-sans"
                    >
                      <AlertCircle className="size-5 shrink-0 text-red-600 mt-0.5" />
                      <div>
                        <p className="font-semibold">
                          Something went wrong. Please try again.
                        </p>
                        {errorMessage && (
                          <p className="text-xs text-red-700 mt-0.5">
                            {errorMessage}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Row 1: Full Name & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col space-y-2">
                      <label
                        htmlFor="fullName"
                        className="font-heading font-semibold text-xs uppercase tracking-wider text-neutral-700"
                      >
                        Full Name <span className="text-brand-blue">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Priya Sharma"
                        aria-invalid={errors.fullName ? "true" : "false"}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        className={`w-full h-11 px-3.5 rounded-lg font-sans text-sm text-brand-navy bg-white border transition-colors duration-150 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue ${
                          errors.fullName
                            ? "border-red-500 bg-red-50/20"
                            : "border-neutral-300 hover:border-neutral-400"
                        }`}
                      />
                      {errors.fullName && (
                        <p
                          id="fullName-error"
                          className="font-sans text-xs text-red-600"
                        >
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Organization */}
                    <div className="flex flex-col space-y-2">
                      <label
                        htmlFor="organization"
                        className="font-heading font-semibold text-xs uppercase tracking-wider text-neutral-700"
                      >
                        Organization <span className="text-brand-blue">*</span>
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        required
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. State Skill Mission / Tech University"
                        aria-invalid={errors.organization ? "true" : "false"}
                        aria-describedby={
                          errors.organization ? "organization-error" : undefined
                        }
                        className={`w-full h-11 px-3.5 rounded-lg font-sans text-sm text-brand-navy bg-white border transition-colors duration-150 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue ${
                          errors.organization
                            ? "border-red-500 bg-red-50/20"
                            : "border-neutral-300 hover:border-neutral-400"
                        }`}
                      />
                      {errors.organization && (
                        <p
                          id="organization-error"
                          className="font-sans text-xs text-red-600"
                        >
                          {errors.organization}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Work Email & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Work Email */}
                    <div className="flex flex-col space-y-2">
                      <label
                        htmlFor="email"
                        className="font-heading font-semibold text-xs uppercase tracking-wider text-neutral-700"
                      >
                        Work Email <span className="text-brand-blue">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@organization.gov.in"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full h-11 px-3.5 rounded-lg font-sans text-sm text-brand-navy bg-white border transition-colors duration-150 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue ${
                          errors.email
                            ? "border-red-500 bg-red-50/20"
                            : "border-neutral-300 hover:border-neutral-400"
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="font-sans text-xs text-red-600"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col space-y-2">
                      <label
                        htmlFor="phone"
                        className="font-heading font-semibold text-xs uppercase tracking-wider text-neutral-700"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full h-11 px-3.5 rounded-lg font-sans text-sm text-brand-navy bg-white border border-neutral-300 hover:border-neutral-400 transition-colors duration-150 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  {/* Row 3: Partnership Type Dropdown */}
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="partnershipType"
                      className="font-heading font-semibold text-xs uppercase tracking-wider text-neutral-700"
                    >
                      Partnership Type <span className="text-brand-blue">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="partnershipType"
                        name="partnershipType"
                        required
                        value={formData.partnershipType}
                        onChange={handleChange}
                        aria-invalid={errors.partnershipType ? "true" : "false"}
                        aria-describedby={
                          errors.partnershipType
                            ? "partnershipType-error"
                            : undefined
                        }
                        className={`w-full h-11 px-3.5 rounded-lg font-sans text-sm text-brand-navy bg-white border transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue appearance-none cursor-pointer ${
                          !formData.partnershipType ? "text-neutral-400" : ""
                        } ${
                          errors.partnershipType
                            ? "border-red-500 bg-red-50/20"
                            : "border-neutral-300 hover:border-neutral-400"
                        }`}
                      >
                        <option value="" disabled>
                          Select partnership type...
                        </option>
                        {PARTNERSHIP_TYPES.map((type) => (
                          <option key={type} value={type} className="text-brand-navy">
                            {type}
                          </option>
                        ))}
                      </select>
                      {/* Down caret indicator */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-neutral-500">
                        <svg
                          className="size-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.partnershipType && (
                      <p
                        id="partnershipType-error"
                        className="font-sans text-xs text-red-600"
                      >
                        {errors.partnershipType}
                      </p>
                    )}
                  </div>

                  {/* Row 4: Message */}
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="message"
                      className="font-heading font-semibold text-xs uppercase tracking-wider text-neutral-700"
                    >
                      Message <span className="text-brand-blue">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your mandate, target cohort, and how you envision collaborating with NTARA..."
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full p-3.5 rounded-lg font-sans text-sm text-brand-navy bg-white border transition-colors duration-150 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue resize-y ${
                        errors.message
                          ? "border-red-500 bg-red-50/20"
                          : "border-neutral-300 hover:border-neutral-400"
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="font-sans text-xs text-red-600"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full text-sm sm:text-base font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-[0_4px_16px_rgba(29,99,255,0.22)] transition-all duration-200 active:scale-[0.99] disabled:opacity-65 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 group"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="mr-2 size-4 animate-spin" />
                          <span>Sending Partnership Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Partnership Request</span>
                          <ArrowRight
                            className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-150 motion-reduce:transform-none"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
