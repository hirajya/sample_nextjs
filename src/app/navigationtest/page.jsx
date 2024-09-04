"use client";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  // Client side navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");
  console.log(q);

  console.log("NavigationTestPage", pathname);

  const handleClick = () => {
    console.log("Clicked");
    router.push("/");
    // router.refresh();
    // router.replace("/");
    // router.back();
    // router.forward();
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write adn Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
