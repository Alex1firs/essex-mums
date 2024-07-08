import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h3>Not Found</h3>
      <p>Sorry, the page you are looking for dose not exist</p>
      <Link href="/.">Return Home</Link>
    </div>
  );
};

export default NotFound;
