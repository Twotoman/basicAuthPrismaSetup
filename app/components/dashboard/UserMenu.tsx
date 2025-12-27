'use client'

import { useEffect, useState } from 'react'
import { Menu } from '@headlessui/react'
import { ChevronDown, LogOut, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react";
import { logout } from '@/lib/actions/auth'

export default function UserMenu() {
const router = useRouter()
const { data: session } = useSession();

  const [user, setUser] = useState<{ email: string; name?: string } | null>(null)

  useEffect(() => {
    const getUser = () => {

      if (session?.user) {
        setUser({
          email: user?.email ?? '',
          name:
            user?.name ||
            user?.email?.split('@')[0] || 'Benutzer',
        })
      }
    }

    getUser()
  }, [])

const handleLogout = () => {
  logout();
}
  console.log("user: ", session?.user?.name);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100">
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <User className="w-5 h-5 text-gray-700" />
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
        <div className="px-4 py-3">
          <p className="text-sm font-medium text-gray-900">{user ? session?.user?.name : '...'}</p>
          <p className="text-sm text-gray-500">{user ? session?.user?.email : '...'}</p>
        </div>

        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="/account"
                className={`${
                  active ? 'bg-gray-100' : ''
                } block px-4 py-2 text-sm text-gray-700`}
              >
                Account preferences
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/features"
                className={`${
                  active ? 'bg-gray-100' : ''
                } block px-4 py-2 text-sm text-gray-700`}
              >
                Feature previews
              </a>
            )}
          </Menu.Item>
        </div>

        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
            <button
              onClick={handleLogout}
              className={`${
                active ? 'bg-gray-100' : ''
              } flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600`}
            >
              <LogOut className="w-4 h-4" />
              Log out
            </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  )
}
