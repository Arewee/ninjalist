import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1) är detsamma som backa ett steg i browsern
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooops..</h1>
      <h2>That page can not be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/" className="test">
          Homepage
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
