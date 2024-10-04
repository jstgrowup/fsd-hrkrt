import { useState } from "react";
import { User, LogOut } from "lucide-react";
interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin?: any;
  onSignout?: any;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex justify-center items-center">
            <img
              src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg"
              alt="paytm"
              className="w-52"
            />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={user ? onSignout : onSignin}
              className="rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-md font-medium px-14 py-3"
            >
              {user ? "Logout" : "Login"}
            </button>

            <div className="ml-3 relative">
              {user && (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span className="sr-only">Open user menu</span>
                  <User className="h-8 w-8 rounded-full" />
                </button>
              )}

              {isOpen && (
                <div className="rounded origin-top-right absolute right-0 mt-2 w-48  shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <User className="inline-block mr-2 h-5 w-5" /> Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut className="inline-block mr-2 h-5 w-5" /> Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
