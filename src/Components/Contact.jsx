// import React, { useState } from 'react';
// import db  from '../firebase';

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData); 
//     try {
//       const contactsRef = db.ref('contacts');
//       await contactsRef.push(formData);
//       alert('Message sent successfully!');
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       console.error('Error sending message: ', error);
//       alert('Failed to send message. Please try again later.');
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center"
//       style={{ backgroundImage: "url('https://i.pinimg.com/originals/fb/a0/ba/fba0ba2c33fde3822352fdee5fce1c9b.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >
//       <div className="container mx-auto px-6 py-12 bg-white bg-opacity-80 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-gray-700">Name</label>
//             <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-gray-700">Email</label>
//             <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Email" />
//           </div>
//           <div>
//             <label htmlFor="message" className="block text-gray-700">Message</label>
//             <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Message" rows="5"></textarea>
//           </div>
//           <div className="text-center">
//             <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
