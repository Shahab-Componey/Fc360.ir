"use client";

export default function GlobalError({
  error,
}: {
  error: Error & {digest?: string};
}) {
  return (
    <div className="flex flex-col gap-1 text-Regular justify-center items-center w-full h-full text-center">
      <h1 className="text-red-600 text-2xl">خطای سیستمی</h1>
      <h1 className="text-regular text-xl">لطفا بعد دوباره امتحان کنید</h1>
      {error.message}
    </div>
  );
}
