function Footer() {
  return (
    <footer className="mt-16 py-8 px-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 max-md:py-6 max-md:px-4 max-md:mt-12">
      <div className="max-w-[800px] mx-auto text-center">
        <p className="text-base text-gray-900 dark:text-gray-100 mb-2 max-md:text-[0.9375rem]">
          Created by <strong className="font-semibold">Frank Sellhausen</strong>
        </p>
        <p className="text-[0.9375rem] text-gray-600 dark:text-gray-300 mb-4 max-md:text-sm">
          Product Manager, Dell Technologies | AI/ML Products
        </p>
        <div className="flex items-center justify-center gap-3 text-sm max-md:text-sm">
          <a
            href="https://www.linkedin.com/in/frank-sellhausen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.9375rem] text-primary dark:text-primary-light no-underline transition-opacity duration-200 hover:opacity-70 hover:underline"
          >
            LinkedIn
          </a>
          <span className="text-gray-400 dark:text-gray-500 text-sm">•</span>
          <a
            href="https://github.com/FrankS36/ai-pm-cards"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.9375rem] text-primary dark:text-primary-light no-underline transition-opacity duration-200 hover:opacity-70 hover:underline"
          >
            GitHub
          </a>
          <span className="text-gray-400 dark:text-gray-500 text-sm">•</span>
          <a
            href="/collaborate"
            className="text-[0.9375rem] text-primary dark:text-primary-light no-underline transition-opacity duration-200 hover:opacity-70 hover:underline"
          >
            Collaborate
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
