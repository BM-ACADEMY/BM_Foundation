import React from 'react';

const NextSteps = () => {
  const steps = [
    {
      number: "01",
      title: "WhatsApp Contact",
      description: "Namma team WhatsApp-la contact pannuvanga (48 hours-ku ullae)",
      icon: "📱"
    },
    {
      number: "02",
      title: "Onboarding Kit",
      description: "Onboarding kit, welcome call, upcoming events info ellam kudukkalaam",
      icon: "🎁"
    },
    {
      number: "03",
      title: "Start Your Journey",
      description: "Nalla vibes, no pressure – unga pace-le start pannunga!",
      icon: "✨"
    }
  ];

  return (
    <section className="enrollment-steps py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="md:w-1/2">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="p-1 bg-orange-100 rounded-full">🧡</span> Next Steps After Enrollment
            </span>
            <h2 className="text-4xl font-serif font-bold mt-3 text-gray-900">
              What happens next?
            </h2>
          </div>
          <p className="md:w-1/3 text-gray-500 mt-4 md:mt-0 italic">
            Your journey with BM Foundation starts here. We make sure you have everything you need to succeed.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="step-card group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-6xl font-bold text-gray-50 group-hover:text-orange-50 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
