import { useEffect, useState } from 'react';

const images = [
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function Hero() {
  const [currentImageSet, setCurrentImageSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageSet((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-16 bg-gradient-to-b from-[#0a1628] via-[#0d1d3a] to-[#0a1628]">
      <div className="w-full px-6 py-20">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-white leading-none tracking-tight">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 drop-shadow-2xl">
                Vision
              </span>
            </h1>
            <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-blue-400 to-blue-600 -z-0"></div>
          </div>
          <div className="flex justify-center items-baseline gap-12 text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 tracking-wide inline-block leading-[1.2]">Inspire</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 tracking-wide inline-block leading-[1.2] pb-2">Ignite</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 tracking-wide inline-block leading-[1.2]">Impact</span>
          </div>
        </div>

        <div className="relative h-[400px] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent z-10"></div>
          <div className="flex gap-4 h-full animate-scroll">
            {[...images, ...images].map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-80 h-full rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={`Student ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center" id="about">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About The Vision
          </h2>
          <div className="w-full text-gray-300 text-lg leading-relaxed space-y-4">
            <p>
              The Vision is a comprehensive educational platform dedicated to supporting students
              in their academic endeavors. We believe that every student deserves access to quality
              education resources, regardless of their background or circumstances.
            </p>
            <p>
              Our platform brings together scholarships, carefully curated study materials, extensive
              collections of previous year questions, and engaging quizzes to create a holistic
              learning experience. We're committed to making education accessible, engaging, and
              effective for students at every level.
            </p>
            <p>
              Join thousands of students who have already discovered the power of organized learning
              and smart preparation. Whether you're preparing for competitive exams, regular coursework,
              or exploring scholarship opportunities, The Vision is your trusted companion on the path
              to academic success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
