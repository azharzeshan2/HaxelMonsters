import React from "react";
function NavBar({ toggle }) {
  return (
    <div>
      <nav class="bg-navigation-pattern bg-cover shadow ">
        <div class="md:max-w-4xl 2xl:max-w-full 2xl:mx-96 2xl:px-72 md:px-10 xl:mx-auto xl:px-8">
          <div class="flex items-center justify-between h-16">
            <div class=" flex items-center">
              <a class="flex-shrink-0" href="/">
                <img
                  class="h-32 w-32 2xl:w-44 pt-6"
                  src="/images/logogo2.png"
                  alt="Workflow"
                />
              </a>
              <div class="hidden md:block  ">
                <div class="ml-10  flex items-baseline space-x-4">
                  <a
                    class=" text-xl xl:text-xl md:text-xl lg:text-xl 2xl:text-2xl text-white pr-8"
                    href="/#"
                  >
                    Home
                  </a>
                  <a
                    class="text-xl  xl:text-xl md:text-xl lg:text-xl 2xl:text-2xl text-white pr-8 "
                    href="/#"
                  >
                    Gallery
                  </a>
                  <a
                    class="text-xl  xl:text-xl md:text-xl lg:text-xl 2xl:text-2xl text-white pr-8"
                    href="/#"
                  >
                    Content
                  </a>
                  <a
                    class="text-xl  xl:text-xl md:text-xl lg:text-xl 2xl:text-2xl text-white pr-8"
                    href="/#"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button class="text-gray-800 dark:text-white pr-8 hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  onClick={toggle}
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="sm:hidden hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white pr-8 block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Home
            </a>
            <a
              class="text-gray-800 dark:text-white pr-8 block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Gallery
            </a>
            <a
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white pr-8 block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Content
            </a>
            <a
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white pr-8 block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
