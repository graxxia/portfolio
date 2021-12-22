let date = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <a
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="text-xs font-semibold">
          GRACIA MORALES{" "}
          {/* <img src="/heart.gif" alt="crown" className="h-4 ml-2" /> */}
          {date}
        </h2>
      </a>
    </footer>
  );
}
