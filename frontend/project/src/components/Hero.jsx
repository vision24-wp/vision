const images = [
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function Hero({ onGetStarted }) {
  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    } else {
      // Fallback: scroll to top and trigger login
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-[#1e3a5f]/50 via-[#2563eb]/30 to-[#06b6d4]/50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Vision</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Empowering students with comprehensive resources, scholarships, and innovative learning tools.
            Transform your academic journey with our curated study materials, previous year questions,
            and interactive quizzes designed to help you excel.
          </p>
          <button
            onClick={handleGetStarted}
            className="px-8 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-white text-lg font-semibold rounded-lg hover:from-teal-500 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Moving photos carousel */}
      <div className="relative h-[400px] overflow-hidden w-full">
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
    </section>
  );
}

