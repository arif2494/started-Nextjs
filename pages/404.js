import Link from "next/link";

const NotFound = () => {
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
