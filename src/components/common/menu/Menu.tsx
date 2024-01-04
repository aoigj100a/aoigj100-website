export const Menu = () => {
  return (
    <ul className="lg:flex lg:w-unset lg:relative lg:top-[8px] flex-wrap items-center mb-6 absolute right-0 top-[40px] block">
      <li>
        <a
          href="#"
          className="mr-4 text-sm text-sky-200 hover:underline md:mr-6"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          className="mr-4 text-sm text-sky-200 hover:underline md:mr-6"
        >
          Privacy Policy
        </a>
      </li>
      <li>
        <a
          href="#"
          className="mr-4 text-sm text-sky-200 hover:underline md:mr-6"
        >
          Licensing
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-sm text-sky-200 hover:underline"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};
