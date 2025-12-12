export function WhyDifferent() {
  const points = [
    'Not a CRM you have to learn',
    'Not another inbox to check',
    'Not more work for your team',
    'Not software that sits unused',
  ];

  return (
    <section className="py-20 md:py-28 lg:py-36">
      <div className="max-w-section mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary text-center mb-12 md:mb-16">
            This isn&apos;t another thing to manage
          </h2>

          <div className="space-y-4 md:space-y-6 mb-12 md:mb-16">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-lg md:text-xl"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
                <span className="text-secondary">{point}</span>
              </div>
            ))}
          </div>

          <div className="bg-surface-muted rounded-2xl p-8 md:p-12 text-center">
            <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed">
              Just booked jobs appearing on your schedule.
              <br />
              <span className="text-secondary font-normal">
                That&apos;s what we deliver.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
