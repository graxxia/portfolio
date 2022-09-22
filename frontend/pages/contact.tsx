function Contact() {
  return (
    <div className="grid place-items-center place-self-center mb-5 ">
      <h1 className="text-6xl font-bold uppercase py-10">CONTACT</h1>

      <p className=" font-semibold  tracking-widest  hover:text-primary-focus underline underline-offset-4 decoration-2 decoration-primary-focus p-10">
        <span className="inline-block  pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </span>
        <a href="mailto:info@graciamorales.com?subject=Mail from https://www.gracia.works/">
          E-MAIL ME
        </a>
      </p>
    </div>
  );
}
export default Contact;
