// // "use client";

// // export default function WhatsAppButton() {
// //   const phoneNumber = "917400197131"; // replace with your real number

// //   const message = encodeURIComponent(
// //     "Hello, I would like to discuss agricultural export supply."
// //   );

// //   const url = `https://wa.me/${phoneNumber}?text=${message}`;

// //   return (
// //     <a
// //       href={url}
// //       target="_blank"
// //       rel="noopener noreferrer"
// //       className="fixed bottom-8 left-8 z-[99999]
// //                  bg-[#25D366]
// //                  text-white
// //                  px-4 py-3
// //                  rounded-full
// //                  shadow-xl
// //                  hover:scale-110
// //                  transition-all duration-300"
// //     >
// //       WhatsApp
// //     </a>
// //   );
// // }

// "use client";

// import { FaWhatsapp } from "react-icons/fa";

// export default function WhatsAppButton() {
//   const phoneNumber = "917400197131"; // replace with your number

//   const message = encodeURIComponent(
//     "Hello, I would like to discuss agricultural export supply."
//   );

//   const url = `https://wa.me/${phoneNumber}?text=${message}`;

//   return (
//     <div className="fixed bottom-8 right-8 z-[99999]">

//       {/* Animated Border Ring */}
//       <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-60"></div>

//       {/* Main Button */}
//       <a
//         href={url}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat on WhatsApp"
//         className="relative bg-[#25D366] text-white
//                    p-4 rounded-full
//                    shadow-xl
//                    flex items-center justify-center
//                    hover:scale-105
//                    transition-all duration-300"
//       >
//         <FaWhatsapp size={26} />
//       </a>
//     </div>
//   );
// }













"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "917400197131";

  const message = encodeURIComponent(
    "Hello, I would like to discuss agricultural export supply."
  );

  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-8 right-8 z-[9999]">

      {/* Animated Ring */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-40"></span>

      {/* Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-xl transition-transform duration-300 hover:scale-110"
      >
        <FaWhatsapp size={24} />
      </a>

    </div>
  );
}