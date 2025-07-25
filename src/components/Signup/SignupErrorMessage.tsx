export default function SignupErrorMessage({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div className="px-4 w-full mx-auto">
      <p className="text-caption1 text-error pt-1">{message}</p>
    </div>
  );
}
