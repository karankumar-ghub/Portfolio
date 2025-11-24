import React, { useState, useRef } from 'react';
import { Phone, Github, Linkedin, Instagram, PenTool, Calendar, MessageSquare, Send, Plus, Minus, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

// ... (Keep FAQItem component the same) ...
const FAQItem = ({ q, a, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border-b ${isDark ? 'border-white/10' : 'border-black/10'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full py-6 flex justify-between items-center text-left hover:opacity-70 transition-opacity interactive
          ${isDark ? 'text-white' : 'text-black'}
        `}
      >
        <span className="text-xl font-medium">{q}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className={`text-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{a}</p>
      </div>
    </div>
  );
};

const Contact = ({ isDark }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', inquiryType: 'Project Inquiry', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const result = await emailjs.send(
        'service_3qpixfr',     // Paste your Service ID
        'template_4afytcq',    // Paste your Template ID
        {
          from_name: formData.name,
          to_name: "Karan",
          from_email: formData.email,
          to_email: "contact@karan.com",
          message: formData.message,
          type: formData.inquiryType
        },
        '-a5MWKfR-f91IOKP_'      // Paste your Public Key
      );
  
      console.log('SUCCESS!', result.text);
      alert("Thank you. I will get back to you as soon as possible.");
      setFormData({ name: '', email: '', inquiryType: 'Project Inquiry', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      alert(`Error: ${error.text || "Failed to send. Check console for details."}`);
    } finally {
      setLoading(false);
    }
  };

  // ... (Return statement is largely the same, just update the <form> and button) ...
  return (
    <PageTransition>
      <Helmet>
        <title>Karan Kumar | Creative Developer</title>
        <meta name="description" content="Portfolio of Karan Kumar, a Creative Developer specializing in React, GSAP, and UI/UX Design." />
      </Helmet>
      <section className="min-h-screen flex flex-col px-6 md:px-20 pt-32 pb-20">
         {/* ... (Header section same) ... */}
         <div className="text-center max-w-4xl mx-auto mb-20">
           <h2 className={`text-6xl md:text-9xl font-black mb-12 tracking-tighter
              ${isDark ? 'text-white' : 'text-zinc-900'}
           `}>
             LET'S TALK
           </h2>
           <p className={`text-xl md:text-3xl mb-16
              ${isDark ? 'text-zinc-400' : 'text-zinc-600'}
           `}>
             Have a project in mind? Fill out the form below.
           </p>
         </div>

         {/* Form */}
         <div className={`max-w-3xl mx-auto w-full mb-32 p-8 md:p-12 rounded-3xl border ${isDark ? 'border-white/10 bg-zinc-900/50' : 'border-black/10 bg-white shadow-xl'}`}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
               {/* ... (Inputs same as before) ... */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">

                     <label htmlFor="name" className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Your Name</label>
                     <input 
                        id="name"
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-6 py-4 rounded-xl outline-none border transition-all interactive
                           ${isDark 
                              ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400 focus:bg-white/10' 
                              : 'bg-zinc-50 border-black/10 text-black focus:border-cyan-600 focus:bg-white'}
                        `}
                     />
                  </div>
                  <div className="space-y-2">
                     <label htmlFor="email" className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Your Email</label>
                     <input 
                        id="email"
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-6 py-4 rounded-xl outline-none border transition-all interactive
                           ${isDark 
                              ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400 focus:bg-white/10' 
                              : 'bg-zinc-50 border-black/10 text-black focus:border-cyan-600 focus:bg-white'}
                        `}
                     />
                  </div>
               </div>

               {/* ... (Inquiry Type buttons same as before) ... */}
               <div className="space-y-2">
                  <label className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>What are you interested in?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                     {['Project Inquiry', 'Book a Call', 'Just Saying Hi'].map((type) => (
                        <button
                           type="button"
                           key={type}
                           onClick={() => setFormData(prev => ({ ...prev, inquiryType: type }))}
                           className={`px-4 py-3 rounded-xl border text-sm font-bold transition-all interactive
                              ${formData.inquiryType === type 
                                 ? (isDark ? 'bg-cyan-500 text-black border-cyan-500' : 'bg-cyan-600 text-white border-cyan-600')
                                 : (isDark ? 'bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10' : 'bg-zinc-50 border-black/10 text-zinc-600 hover:bg-zinc-100')
                              }
                           `}
                        >
                           {type === 'Project Inquiry' && <PenTool size={16} className="inline mr-2" />}
                           {type === 'Book a Call' && <Calendar size={16} className="inline mr-2" />}
                           {type === 'Just Saying Hi' && <MessageSquare size={16} className="inline mr-2" />}
                           {type}
                        </button>
                     ))}
                  </div>
               </div>

               {/* Message Area */}
               <div className="space-y-2">
                  <label htmlFor="message" className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Message</label>
                  <textarea 
                     id="message"
                     rows="5"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     required
                     className={`w-full px-6 py-4 rounded-xl outline-none border transition-all resize-none interactive
                        ${isDark 
                           ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400 focus:bg-white/10' 
                           : 'bg-zinc-50 border-black/10 text-black focus:border-cyan-600 focus:bg-white'}
                     `}
                  ></textarea>
               </div>

               <button 
                  type="submit"
                  disabled={loading}
                  className={`w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all interactive transform hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0
                     ${isDark 
                        ? 'bg-white text-black hover:bg-cyan-400' 
                        : 'bg-black text-white hover:bg-cyan-600'}
                  `}
               >
                  {loading ? 'Sending...' : 'Send Message'} 
                  {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
               </button>
            </form>
         </div>
         
         {/* ... (Keep the rest: Socials, FAQ, Footer) ... */}
         <div className="flex flex-wrap justify-center gap-8 mb-20">
            {/* (Social links code) */}
             {[
              { icon: <Phone />, label: "Call", href: "tel:+918958073763" },
              { icon: <Github />, label: "Github", href: "#" },
              { icon: <Linkedin />, label: "LinkedIn", href: "#" },
              { icon: <Instagram />, label: "Instagram", href: "#" },
            ].map((link, i) => (
              <a 
                key={i} 
                href={link.href}
                className={`flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold transition-all interactive
                  ${isDark 
                    ? 'bg-white/5 hover:bg-white text-white hover:text-black' 
                    : 'bg-zinc-100 hover:bg-black text-black hover:text-white'}
                `}
              >
                {link.icon} {link.label}
              </a>
            ))}
         </div>

         <div className="max-w-3xl mx-auto w-full">
            <h3 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-black'}`}>Frequently Asked Questions</h3>
            <div className="space-y-2">
              {[
                { q: "Are you available for freelance?", a: "Yes, I take on selected freelance projects that align with my skills. Feel free to reach out!" },
                { q: "What is your tech stack?", a: "I primarily work with the MERN stack (MongoDB, Express, React, Node.js) alongside Next.js and Tailwind CSS." },
                { q: "Do you do UI design?", a: "Absolutely. I believe design and development go hand in hand. I can design your site in Figma before coding it." },
                { q: "Where are you located?", a: "I am based on Uttarpradesh, India, but I work remotely with clients worldwide." },
              ].map((item, i) => (
                 <FAQItem key={i} q={item.q} a={item.a} isDark={isDark} />
              ))}
            </div>
         </div>
         <Footer isDark={isDark} />
      </section>
    </PageTransition>
  );
};

export default Contact;