import React from "react";

const testimonials = [
  { name: "John Doe", text: "This platform helped me land my dream job!" },
  { name: "Jane Smith", text: "Easy to use and full of great opportunities." },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <h3 className="mt-4 font-semibold text-blue-600">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
