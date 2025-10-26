"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

type ApplicationFormData = {
  // Student Information
  studentName: string;
  studentAge: number;
  studentGrade: string;
  studentSchool: string;

  // Guardian/Parent Information
  guardianName: string;
  guardianRelation: string;
  guardianEmail: string;
  guardianPhone: string;

  // Address
  address: string;
  parish: string;

  // Educational Needs
  educationalNeeds: string;
  futureGoals: string;

  // Additional Information
  additionalInfo?: string;
};

export default function Apply() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationFormData>();

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      setSubmitError(
        "There was an error submitting your application. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const parishes = [
    "Kingston",
    "St. Andrew",
    "St. Thomas",
    "Portland",
    "St. Mary",
    "St. Ann",
    "Trelawny",
    "St. James",
    "Hanover",
    "Westmoreland",
    "St. Elizabeth",
    "Manchester",
    "Clarendon",
    "St. Catherine",
  ];

  if (submitSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-primary-green via-earth-forest to-primary-black flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container mx-auto px-4 max-w-2xl text-center text-white relative z-10"
        >
          <motion.div
            className="text-6xl mb-6"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.6 }}
          >
            ✅
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
            Application Submitted!
          </h1>
          <p className="text-xl mb-8">
            Thank you for applying to the Talawa scholarship program. We have
            received your application and will review it carefully. We'll be in
            touch soon!
          </p>
          <motion.button
            onClick={() => {
              setSubmitSuccess(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-gradient-to-r from-primary-gold to-yellow-400 hover:from-yellow-400 hover:to-primary-gold text-primary-black px-8 py-3 rounded-full font-semibold transition-all shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Another Application
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-accent-ocean to-primary-green text-white overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 font-poppins"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
            >
              Apply for a <span className="text-primary-gold">Scholarship</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Take the first step toward a brighter educational future
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-earth-sand/30 to-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-gold/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-green/20 to-transparent rounded-tr-full" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-green font-poppins">
                  Scholarship Application Form
                </h2>
                <p className="text-gray-700 mb-8">
                  Please fill out this form completely. All fields marked with *
                  are required. We review each application carefully and will
                  contact you within 2-3 weeks.
                </p>

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border-2 border-red-500 text-red-700 p-4 rounded-lg mb-6"
                  >
                    {submitError}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Student Information */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-primary-green">
                      Student Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Full Name *
                        </label>
                        <input
                          {...register("studentName", {
                            required: "Student name is required",
                          })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="Student's full name"
                        />
                        {errors.studentName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.studentName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Age *
                        </label>
                        <input
                          type="number"
                          {...register("studentAge", {
                            required: "Age is required",
                            min: { value: 5, message: "Age must be at least 5" },
                            max: { value: 25, message: "Age must be under 25" },
                          })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="Age"
                        />
                        {errors.studentAge && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.studentAge.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Current Grade/Form *
                        </label>
                        <input
                          {...register("studentGrade", {
                            required: "Grade is required",
                          })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="e.g., Grade 6, Form 3"
                        />
                        {errors.studentGrade && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.studentGrade.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          School Name *
                        </label>
                        <input
                          {...register("studentSchool", {
                            required: "School name is required",
                          })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="Current or intended school"
                        />
                        {errors.studentSchool && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.studentSchool.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Guardian Information */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-primary-green">
                      Parent/Guardian Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Guardian Name *
                        </label>
                        <input
                          {...register("guardianName", {
                            required: "Guardian name is required",
                          })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="Parent/Guardian full name"
                        />
                        {errors.guardianName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.guardianName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Relationship *
                        </label>
                        <input
                          {...register("guardianRelation", {
                            required: "Relationship is required",
                          })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="e.g., Mother, Father, Grandmother"
                        />
                        {errors.guardianRelation && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.guardianRelation.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          {...register("guardianEmail", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="email@example.com"
                        />
                        {errors.guardianEmail && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.guardianEmail.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          {...register("guardianPhone", {
                            required: "Phone number is required",
                          })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="Contact number"
                        />
                        {errors.guardianPhone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.guardianPhone.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Address */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-primary-green">
                      Address
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Street Address *
                        </label>
                        <input
                          {...register("address", {
                            required: "Address is required",
                          })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="Street address"
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.address.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Parish *
                        </label>
                        <select
                          {...register("parish", {
                            required: "Parish is required",
                          })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                        >
                          <option value="">Select a parish</option>
                          {parishes.map((parish) => (
                            <option key={parish} value={parish}>
                              {parish}
                            </option>
                          ))}
                        </select>
                        {errors.parish && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.parish.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Educational Needs and Goals */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-primary-green">
                      Educational Information
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          What are your educational needs? *
                        </label>
                        <p className="text-sm text-gray-600 mb-2">
                          Tell us what support you need (tuition, books, supplies,
                          technology, etc.)
                        </p>
                        <textarea
                          {...register("educationalNeeds", {
                            required: "Educational needs are required",
                            minLength: {
                              value: 50,
                              message: "Please provide more detail (at least 50 characters)",
                            },
                          })}
                          rows={4}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="Describe your current educational needs..."
                        />
                        {errors.educationalNeeds && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.educationalNeeds.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          What are your future goals? *
                        </label>
                        <p className="text-sm text-gray-600 mb-2">
                          Share your dreams and what you hope to achieve through
                          education
                        </p>
                        <textarea
                          {...register("futureGoals", {
                            required: "Future goals are required",
                            minLength: {
                              value: 50,
                              message: "Please provide more detail (at least 50 characters)",
                            },
                          })}
                          rows={4}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="Tell us about your dreams and aspirations..."
                        />
                        {errors.futureGoals && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.futureGoals.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Additional Information
                        </label>
                        <p className="text-sm text-gray-600 mb-2">
                          Anything else you'd like us to know about your situation
                          or application
                        </p>
                        <textarea
                          {...register("additionalInfo")}
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="Optional additional information..."
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary-green to-earth-forest hover:from-earth-forest hover:to-primary-green text-white px-8 py-4 rounded-full font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>

            {/* Help Section */}
            <motion.div
              className="mt-8 bg-primary-gold/10 border-2 border-primary-gold rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="font-bold text-lg mb-2 text-primary-green">
                Need Help?
              </h3>
              <p className="text-gray-700">
                If you have questions about the application process or need
                assistance filling out this form, please{" "}
                <a
                  href="/contact"
                  className="text-primary-green hover:text-earth-forest font-semibold underline"
                >
                  contact us
                </a>
                . We're here to help!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
