import { GraduationCap, BookOpen, FileText, Brain } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Scholarships',
    description: 'Access a comprehensive database of scholarships tailored to your academic profile. Discover funding opportunities from top institutions and organizations worldwide. Get timely notifications about deadlines and application requirements.',
  },
  {
    icon: BookOpen,
    title: 'Study Materials',
    description: 'Curated collection of high-quality study materials covering diverse subjects and topics. Access notes, reference books, and learning resources prepared by experts. Download materials anytime and study at your own pace.',
  },
  {
    icon: FileText,
    title: 'Previous Year Questions (PYQ)',
    description: 'Extensive archive of previous year examination papers and solutions. Practice with authentic questions to understand exam patterns and difficulty levels. Improve your preparation strategy with detailed answer explanations.',
  },
  {
    icon: Brain,
    title: 'Quiz',
    description: 'Interactive quizzes to test your knowledge and track progress. Multiple difficulty levels and topics to match your learning needs. Instant feedback and detailed explanations help reinforce concepts and identify areas for improvement.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-[#1e3a5f]/60 via-[#2563eb]/40 to-[#06b6d4]/60">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Features
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to succeed in your academic journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#0d1d3a] to-[#0a1628] p-8 rounded-2xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

