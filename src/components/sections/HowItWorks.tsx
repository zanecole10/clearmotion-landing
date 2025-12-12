export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Identify',
      description:
        'We connect to your existing systems and find every declined job, old estimate, and overdue service.',
    },
    {
      number: '02',
      title: 'Follow up',
      description:
        'Our team reaches out to your customers directly. Real conversations. Real objection handling.',
    },
    {
      number: '03',
      title: 'Book',
      description:
        'Approved work lands back on your schedule. Handled. No extra effort from your staff.',
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-surface-muted">
      <div className="max-w-section mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary text-center mb-12 md:mb-16">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <span className="text-6xl md:text-7xl font-bold text-accent/10 absolute -top-4 -left-2">
                {step.number}
              </span>
              <div className="relative pt-8 md:pt-10">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-3 md:mb-4">
                  {step.title}
                </h3>
                <p className="text-secondary text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-black/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
