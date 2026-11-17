import ButtonLink from '@/app/components/button-link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <ButtonLink href="/">Go back home</ButtonLink>
    </div>
  )
}
