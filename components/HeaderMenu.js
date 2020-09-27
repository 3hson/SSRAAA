export default function HeaderMenu() {
  return (
    <>
      <ul className="header-menu">
        <li><a href="/">خانه</a></li>
        <li><a href="/user/login">ورود</a></li>
        <li><a href="/user/register">ثبت نام</a></li>
      </ul>
      <style jsx>{`
        .header-menu {
          list-style: none;
          display: flex;
        }

        .header-menu > li {
          padding: 0.5rem 1rem;
        }
        .header-menu a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
