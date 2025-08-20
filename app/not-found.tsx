import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-3xl font-semibold mb-4">404 — Page Not Found</h1>
      <p className="mb-6 text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
      >
        Go back home
      </Link>
    </div>
  )
}