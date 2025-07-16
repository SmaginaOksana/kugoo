import Footer from "../components/Footer/Footer";
import Button from "../components/common/Button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-red-600">wefWRgfre</h1>
        <button className="btn-instagram p-10">hkvkvjblkjblkvh</button>
        <p className="font-(family-name:--font-sf-display) text-purple">
          Lorem ipsum dolor sit amet...
        </p>
        <p className="text-red-600">Lorem ipsum dolor sit amet...</p>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
      </main>

      <div className="bg-white rounded-full w-[50px] h-[50px] hover:bg-purple">
        <Button typeOfButton="playButton"></Button>
      </div>
      <Button typeOfButton="instagramButton"></Button>
      <Footer />
    </div>
  );
}
