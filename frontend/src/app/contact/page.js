// "use client";

// import { Mail, Phone, MapPin, Clock } from "lucide-react";

// export default function ContactPage() {
//   return (
//     <main className="min-h-screen pt-40 bg-lightsection">

//       {/* Header */}
//       <section className="px-6 mb-24">
//         <div className="max-w-5xl mx-auto text-center">

//           <div className="inline-block mb-6 text-xs tracking-widest uppercase text-action">
//             Corporate Office
//           </div>

//           <h1 className="text-5xl md:text-6xl font-semibold text-primary mb-8">
//             Contact & Location
//           </h1>

//           <p className="text-primary/60 max-w-3xl mx-auto leading-relaxed">
//             For general inquiries, partnership discussions, or documentation requests,
//             reach out through the channels below or visit our registered office location.
//           </p>

//         </div>
//       </section>

//       {/* Contact Details + Map */}
//       <section className="px-6 pb-32">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

//           {/* Left - Contact Details */}
//           <div className="space-y-12">

//             <div className="flex items-start gap-6">
//               <MapPin className="text-action mt-1" size={24} />
//               <div>
//                 <h3 className="text-lg font-semibold text-primary mb-2">
//                   Registered Office
//                 </h3>
//                 <p className="text-primary/60 leading-relaxed">
//                   Mumbai, Maharashtra, India <br />
//                   (Full address to be updated)
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-6">
//               <Mail className="text-action mt-1" size={24} />
//               <div>
//                 <h3 className="text-lg font-semibold text-primary mb-2">
//                   Email
//                 </h3>
//                 <p className="text-primary/60">
//                   exports@eximname.com
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-6">
//               <Phone className="text-action mt-1" size={24} />
//               <div>
//                 <h3 className="text-lg font-semibold text-primary mb-2">
//                   Phone
//                 </h3>
//                 <p className="text-primary/60">
//                   +91 XXXXX XXXXX
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-6">
//               <Clock className="text-action mt-1" size={24} />
//               <div>
//                 <h3 className="text-lg font-semibold text-primary mb-2">
//                   Business Hours
//                 </h3>
//                 <p className="text-primary/60">
//                   Monday – Saturday <br />
//                   09:00 – 18:00 IST
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* Right - Map */}
//           <div className="rounded-xl overflow-hidden border border-primary/10 shadow-sm">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.33272729115342!2d72.86453612314259!3d19.255807744243455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0efe6a8a3a7%3A0xedcd53abb975714a!2sUNIT%20I-A2%2C%20RMMS%20SOCIETY%2C%20CS%20Rd%2C%20Avdhut%20Nagar%2C%20Dahisar%20East%2C%20Mumbai%2C%20Maharashtra%20400068!5e1!3m2!1sen!2sin!4v1772622966013!5m2!1sen!2sin" 
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>

//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }













"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-40 bg-lightsection">

      {/* Header */}
      <section className="px-6 mb-24">
        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-block mb-6 text-xs tracking-widest uppercase text-action">
            Corporate & Sourcing Offices
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold text-primary mb-8">
            Contact & Locations
          </h1>

          <p className="text-primary/60 max-w-3xl mx-auto leading-relaxed">
            For trade inquiries, sourcing coordination, or documentation,
            connect with our offices across India handling export execution
            and procurement operations.
          </p>

        </div>
      </section>

      {/* Contact Details + Map */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

          {/* ===== LEFT ===== */}
          <div className="space-y-14">

            {/* Mumbai */}
            <div className="flex items-start gap-6">
              <MapPin className="text-action mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Mumbai 
                </h3>
                <p className="text-primary/60 leading-relaxed">
                  Mumbai, Maharashtra, India <br />
                  
                </p>
              </div>
            </div>

            {/* Gujarat */}
            <div className="flex items-start gap-6">
              <MapPin className="text-action mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Gujarat 
                </h3>
                <p className="text-primary/60 leading-relaxed">
                  Ahemdabad, Gujarat, India <br />
                  
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-6">
              <Mail className="text-action mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Email
                </h3>
                <p className="text-primary/60">
                  info@zashorganic.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-6">
              <Phone className="text-action mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Phone
                </h3>
                <p className="text-primary/60">
                  +91 7400197131 / +91 7014935973
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-6">
              <Clock className="text-action mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Business Hours
                </h3>
                <p className="text-primary/60">
                  Monday – Saturday <br />
                  09:00 – 18:00 IST
                </p>
              </div>
            </div>

          </div>

          {/* ===== RIGHT (MAP) ===== */}
          <div className="rounded-xl overflow-hidden border border-primary/10 shadow-sm">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.33272729115342!2d72.86453612314259!3d19.255807744243455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0efe6a8a3a7%3A0xedcd53abb975714a!2sUNIT%20I-A2%2C%20RMMS%20SOCIETY%2C%20CS%20Rd%2C%20Avdhut%20Nagar%2C%20Dahisar%20East%2C%20Mumbai%2C%20Maharashtra%20400068!5e1!3m2!1sen!2sin!4v1772622966013!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            />

          </div>

        </div>
      </section>

    </main>
  );
}