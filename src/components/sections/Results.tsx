export function Results() {
  const outcomes = [
    {
      title: 'Booked bays',
      description:
        'Jobs that would have been forgotten are now on your schedule. Your technicians stay busy.',
    },
    {
      title: 'Recovered revenue',
      description:
        'Money that was already sitting in your system, finally captured. No new marketing spend required.',
    },
    {
      title: 'Less stress',
      description:
        'Your advisors focus on what\'s in front of them. The follow-up happens without their effort.',
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-surface-muted">
      <div className="max-w-section mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary text-center mb-6 md:mb-8">
          What you actually get
        </h2>

        <p className="text-lg md:text-xl text-secondary text-center max-w-2xl mx-auto mb-12 md:mb-16">
          Not features. Not dashboards. Results.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
                {outcome.title}
              </h3>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
