export const Menu = () => {
  return (
    <ul className="lg:flex lg:w-unset lg:relative lg:top-[8px] flex-wrap items-center mb-6 absolute right-0 top-[40px] block">
      <li>
        <a
          href="#"
          className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
        >
          Privacy Policy
        </a>
      </li>
      <li>
        <a
          href="#"
          className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
        >
          Licensing
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-sm text-gray-500 hover:underline dark:text-gray-400"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};
