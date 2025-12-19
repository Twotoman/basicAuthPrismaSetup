'use server';

import {auth} from '@/auth';
import {LoginButton} from '@/app/components/login/login-button';

export default async function Home() {

  const session = await auth();
  console.log('Session:', session);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-full">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            Welcome to <span className="text-blue-600">NextAuth.js</span>
          </h1>
          <LoginButton />
        </div>
      </main>
    </div>
  );
}
