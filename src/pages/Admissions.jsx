import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function Admissions() {
  const [formData, setFormData] = useState({
    student_name: '',
    date_of_birth: '',
    gender: 'Male',
    class_applying: 'Early Child Education',
    program: 'Academic',
    previous_school: '',
    address: '',
    parent_name: '',
    relationship: 'Father',
    phone: '',
    whatsapp: '',
    email: '',
    additional_information: '',
  });

  const [loading, setLoading] = useState(false);
  const [successRef, setSuccessRef] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const generateRef = () => {
    const random = Math.floor(100000 + Math.random() * 900000);
    return `GKA-${new Date().getFullYear()}-${random}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessRef(null);

    const referenceNumber = generateRef();

    try {
      const { data, error } = await supabase.from('applications').insert([
        {
          ...formData,
          application_reference: referenceNumber,
          status: 'pending',
        },
      ]);

      if (error) throw error;

      setSuccessRef(referenceNumber);
      setFormData({
        student_name: '',
        date_of_birth: '',
        gender: 'Male',
        class_applying: 'Early Child Education',
        program: 'Academic',
        previous_school: '',
        address: '',
        parent_name: '',
        relationship: 'Father',
        phone: '',
        whatsapp: '',
        email: '',
        additional_information: '',
      });
    } catch (err) {
      setErrorMessage(
        'Something went wrong while submitting your application. Please check your internet connection and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 bg-brand-lightBg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-10">
          <span className="text-xs font-bold text-brand-red uppercase tracking-wider">Registration Is Now Open</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-darkBlue uppercase">Enroll Your Child Today</h1>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Admission Process Steps */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 mb-10 shadow-sm">
          <h2 className="font-extrabold text-brand-darkBlue text-base uppercase mb-4 text-center">Admission Process</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center text-xs font-semibold">
            <div className="p-3 bg-blue-50 rounded border border-blue-100">STEP 1<br/><span className="font-normal text-gray-600">Choose Program</span></div>
            <div className="p-3 bg-blue-50 rounded border border-blue-100">STEP 2<br/><span className="font-normal text-gray-600">Fill Application</span></div>
            <div className="p-3 bg-blue-50 rounded border border-blue-100">STEP 3<br/><span className="font-normal text-gray-600">Submit Online</span></div>
            <div className="p-3 bg-blue-50 rounded border border-blue-100">STEP 4<br/><span className="font-normal text-gray-600">School Review</span></div>
            <div className="p-3 bg-blue-50 rounded border border-blue-100">STEP 5<br/><span className="font-normal text-gray-600">Contact Parent</span></div>
            <div className="p-3 bg-blue-50 rounded border border-blue-100">STEP 6<br/><span className="font-normal text-gray-600">Registration</span></div>
          </div>
        </div>

        {/* Success Modal/Notice */}
        {successRef && (
          <div className="mb-8 p-6 bg-emerald-50 border border-emerald-300 rounded-xl space-y-3">
            <div className="flex items-center gap-3 text-emerald-800">
              <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-600" />
              <h3 className="font-bold text-lg">Application Submitted Successfully</h3>
            </div>
            <p className="text-sm text-emerald-700">
              Thank you for applying to Great King Academy. Our admissions team will contact you using the information provided.
            </p>
            <div className="p-3 bg-white rounded border border-emerald-200 inline-block font-mono text-xs text-gray-800">
              Reference Number: <strong className="text-brand-darkBlue">{successRef}</strong>
            </div>
          </div>
        )}

        {/* Error Notice */}
        {errorMessage && (
          <div className="mb-8 p-4 bg-red-50 border border-red-300 rounded-xl flex items-center gap-3 text-red-800 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Online Application Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md space-y-8">
          
          {/* Section 1: Student Information */}
          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-brand-darkBlue border-b border-gray-200 pb-2 uppercase tracking-wide">
              1. Student Information
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Student Full Name *</label>
                <input
                  type="text"
                  name="student_name"
                  required
                  value={formData.student_name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-brand-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Date of Birth *</label>
                <input
                  type="date"
                  name="date_of_birth"
                  required
                  value={formData.date_of_birth}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-brand-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-brand-blue"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Class / Grade Applying For *</label>
                <select
                  name="class_applying"
                  value={formData.class_applying}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-brand-blue"
                >
                  <option value="Early Child Education">Early Child Education</option>
                  <option value="Pre-Primary">Pre-Primary</option>
                  <option value="Junior High School">Junior High School</option>
                  <option value="Senior High School">Senior High School</option>
                  <option value="Vocational / Technical">Vocational / Technical</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Program Track *</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-brand-blue"
                >
                  <option value="Academic">Academic Education</option>
                  <option value="Technical/Vocational">Technical & Vocational</option>
                  <option value="Combined">Combined Academic + Technical</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Previous School Attended</label>
                <input
                  type="text"
                  name="previous_school"
                  value={formData.previous_school}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-brand-blue"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Residential Address *</label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-brand-blue"
              />
            </div>
          </div>

          {/* Section 2: Parent / Guardian Details */}
          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-brand-darkBlue border-b border-gray-200 pb-2 uppercase tracking-wide">
              2. Parent / Guardian Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Parent/Guardian Name *</label>
                <input
                  type="text"
                  name="parent_name"
                  required
                  value={formData.parent_name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-brand-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Relationship *</label>
                <input
                  type="text"
                  name="relationship"
                  required
                  value={formData.relationship}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-brand-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-brand-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">WhatsApp Number</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-brand-blue"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-brand-blue"
              />
            </div>
          </div>

          {/* Section 3: Additional Notes */}
          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-brand-darkBlue border-b border-gray-200 pb-2 uppercase tracking-wide">
              3. Additional Information
            </h3>
            <textarea
              name="additional_information"
              rows={3}
              value={formData.additional_information}
              onChange={handleChange}
              placeholder="Any additional notes or health requirements..."
              className="w-full p-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:border-brand-blue"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-red hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider py-4 rounded-md shadow-md transition-colors flex items-center justify-center gap-2"
          >
            {loading ? 'Submitting Application...' : 'SUBMIT APPLICATION'}
          </button>

        </form>

      </div>
    </div>
  );
    }
