export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 border-t border-black/5">
      <div className="max-w-section mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary text-sm">
            &copy; {currentYear} ClearMotion. All rights reserved.
          </p>
          <p className="text-secondary text-sm">
            Done-for-you revenue recovery for auto shops.
          </p>
        </div>
      </div>
    </footer>
  );
}
