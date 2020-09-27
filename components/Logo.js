export default function Logo ({children}) {
  return (
    <>
      <a className="logo" href="/">
        {children}
      </a>
      <style jsx>{`
    .logo {
      font-size: 1.2rem;
      font-weight: bold;
    }
    `}</style>
    </>
  );
}

