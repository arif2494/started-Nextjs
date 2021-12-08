import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });
  return (
    <div>
      <div className='not-found'>
        <h1>Ooooopssss....</h1>
        <h2>That is not exist</h2>
        <p>
          Go back to the
          <Link href='/'>
            <a>HOme PAge</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
