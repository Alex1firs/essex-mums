import Link from "next/link";

const Links = () => {
  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "What On",
      path: "/whaton",
    },
    {
      title: "Award",
      path: "/award",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Local List",
      path: "/locallist",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
