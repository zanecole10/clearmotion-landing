export function Problem() {
  const problems = [
    {
      title: 'Your advisors are busy',
      description: 'They\'re focused on closing today\'s work. Following up on old estimates? That\'s not happening.',
    },
    {
      title: 'Jobs pile up',
      description: 'Declined work, deferred maintenance, forgotten estimates. They sit in your system collecting dust.',
    },
    {
      title: 'Revenue sits uncaptured',
      description: 'That money is already there. Your customers already said they\'d come back. But no one follows up.',
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-surface-dark text-white">
      <div className="max-w-section mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-6 md:mb-8">
          Revenue is slipping through the cracks
        </h2>

        <p className="text-lg md:text-xl text-white/70 text-center max-w-2xl mx-auto mb-12 md:mb-16">
          Every shop has it. Work that was quoted but never closed. Customers who said &quot;not today&quot; but never came back.
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {problems.map((problem, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                {problem.title}
              </h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
