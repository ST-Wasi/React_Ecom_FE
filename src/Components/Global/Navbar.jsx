import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

const navigation = [
  { name: 'Product', to: '/product' },
  { name: 'Features', to: '/features' },
  { name: 'Marketplace', to: '/marketplace' },
  { name: 'Company', to: '/company' },
  { name: 'New', to: '/new' }
];

function Navbar() {
  const navigate = useNavigate();
  const [loginButton, setLoginButton] = useState("");
  const [user, setUser] = useState(null)
  // const [loginButtonHref, setLoginButtonHref] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const { user } = jwtDecode(token);
      setUser(user);
      setLoginButton("Logout")
      // setLoginButtonHref('/logout')
    }
    else {
      setLoginButton("Login")
      // setLoginButtonHref('/logout')
    }
  }, [])

  const handleLoginClick = (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      navigate('/');
      setLoginButton('Login')
      toast.success("Logged Out")
    } else {
      navigate('/login')
    }
  }

  return (
    <header className="inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Wasi</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <RxHamburgerMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => {
            if (item.name === 'New' && (!user || (user && user.role !== 'seller'))) {
              return null;
            }
            return (
              <Link key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {loginButton && (<button to="#" onClick={handleLoginClick} className="text-sm font-semibold leading-6 text-gray-900">
            {loginButton} <span aria-hidden="true">&rarr;</span>
          </button>)}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <RxCross2 className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  if (item.name === 'New' && (!user || (user && user.role !== 'seller'))) {
                    return null;
                  }
                  return (
                    <Link
                      key={item.name}
                      href={item.to}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <div className="py-6">
                {loginButton && (<Link
                  to='#'
                  onClick={handleLoginClick}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {loginButton}
                </Link>)}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;