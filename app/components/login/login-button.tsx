'use client';
import {login} from '@/lib/actions/auth';

export const LoginButton = () => {
  return (
    <button onClick={() => login()} className="mt-8 rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
        LOGIN
    </button>
  );
}