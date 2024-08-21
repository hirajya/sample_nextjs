import Link from "next/link";

const NotFound = () => {
  return (
    <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound