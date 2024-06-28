import Link from 'next/link';

export default function Header(){
    return (
        <header className="flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href="/" className="text-primary font-semibold">3EIGHT</Link>
          <Link href={'/'}>HOME</Link>
          <Link href={''}>ABOUT</Link>
          <Link href={''}>MENU</Link>
          <Link href={''}>CONTACT</Link>
        </nav>
        <nav className='font-semibold flex items-center gap-4 text-gray-500'>
          <Link href={'/login'}>Login</Link>
        <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2">Register</Link>
        </nav>
      </header>
    );
}