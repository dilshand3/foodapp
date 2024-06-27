import Image from "next/image";
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link href="" className="text-primary font-semibold">3EIGHT</Link>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          <Link href={''}>HOME</Link>
          <Link href={''}>ABOUT</Link>
          <Link href={''}>MENU</Link>
          <Link href={''}>CONTACT</Link>
          <Link href={''} className="bg-primary text-white px-6 py-2">LOGIN</Link>
        </nav>
      </header>
    </>
  );
}
