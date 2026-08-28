import { useState, useEffect } from 'react';
import { useUser } from '@clerk/react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, GraduationCap, Languages, Calendar, Users, Sparkles, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const UserProfileForm = ({ onProfileSaved }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    standard_class: '',
    age: '',
    preferred_language: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Pre-fill user data from Clerk if available
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: prev.name || user.fullName || `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        email: prev.email || user.primaryEmailAddress?.emailAddress || '',
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      clerk_id: user?.id || null,
      name: formData.name,
      email: formData.email,
      gender: formData.gender,
      standard_class: formData.standard_class,
      age: parseInt(formData.age, 10),
      preferred_language: formData.preferred_language,
    };

    try {
      const response = await fetch('http://localhost:3000/api/users/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to save user profile');
      }

      setSuccess(true);

      setTimeout(() => {
        if (onProfileSaved) {
          onProfileSaved(data.user);
        } else {
          navigate('/get-started');
        }
      }, 1200);

    } catch (err) {
      console.error('Error submitting profile form:', err);
      setError(err.message || 'Something went wrong while saving your details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] py-8 sm:py-12 bg-slate-950 text-slate-100 flex items-center justify-center">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[130px]" />
        <div className="absolute top-[30%] right-[15%] w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-purple-950/20">
          
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Complete Your Profile
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tell us about yourself
            </h1>
            <p className="text-slate-400 text-sm mt-2">
              Please complete your details to personalize your learning assessment.
            </p>
          </div>

          {/* Success Banner */}
          {success && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-sm font-medium">Profile saved successfully! Redirecting...</span>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
              <span className="text-sm font-medium">{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-slate-500 text-sm transition-all outline-none"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-slate-500 text-sm transition-all outline-none"
                />
              </div>
            </div>

            {/* Grid for Gender & Standard Class */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Gender */}
              <div>
                <label htmlFor="gender" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Gender
                </label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  <select
                    id="gender"
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white text-sm transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-slate-900 text-slate-400">Select Gender</option>
                    <option value="Male" className="bg-slate-900">Male</option>
                    <option value="Female" className="bg-slate-900">Female</option>
                    <option value="Non-Binary" className="bg-slate-900">Non-Binary</option>
                    <option value="Prefer not to say" className="bg-slate-900">Prefer not to say</option>
                  </select>
                </div>
              </div>

              {/* Standard Class */}
              <div>
                <label htmlFor="standard_class" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Standard / Class
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  <select
                    id="standard_class"
                    name="standard_class"
                    required
                    value={formData.standard_class}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white text-sm transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-slate-900 text-slate-400">Select Standard</option>
                    <option value="Class 1 - 5" className="bg-slate-900">Class 1 - 5</option>
                    <option value="Class 6 - 8" className="bg-slate-900">Class 6 - 8</option>
                    <option value="Class 9 - 10" className="bg-slate-900">Class 9 - 10</option>
                    <option value="Class 11 - 12" className="bg-slate-900">Class 11 - 12</option>
                    <option value="Undergraduate" className="bg-slate-900">Undergraduate</option>
                    <option value="Postgraduate" className="bg-slate-900">Postgraduate</option>
                    <option value="Other" className="bg-slate-900">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Grid for Age & Preferred Language */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Age */}
              <div>
                <label htmlFor="age" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Age
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    min="5"
                    max="100"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="e.g. 18"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-slate-500 text-sm transition-all outline-none"
                  />
                </div>
              </div>

              {/* Preferred Language */}
              <div>
                <label htmlFor="preferred_language" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Preferred Language
                </label>
                <div className="relative">
                  <Languages className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  <select
                    id="preferred_language"
                    name="preferred_language"
                    required
                    value={formData.preferred_language}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white text-sm transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-slate-900 text-slate-400">Select Language</option>
                    <option value="English" className="bg-slate-900">English</option>
                    <option value="Hindi" className="bg-slate-900">Hindi</option>
                    <option value="Spanish" className="bg-slate-900">Spanish</option>
                    <option value="French" className="bg-slate-900">French</option>
                    <option value="German" className="bg-slate-900">German</option>
                    <option value="Mandarin" className="bg-slate-900">Mandarin</option>
                    <option value="Other" className="bg-slate-900">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading || success}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-200 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Saving Profile...</span>
                  </>
                ) : (
                  <span>Submit Profile & Continue</span>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfileForm;
