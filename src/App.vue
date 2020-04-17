<template>
  <div id="app" class="bg-gray-100 tracking-wider">
    <nav class="fixed w-full z-10 top-0 bg-white border-b border-gray-400">
      <div
        class="w-full container mx-auto flex flex-wrap items-center justify-between py-4"
      >
        <div class="pl-4">
          <font-awesome-icon
            :icon="['fab', 'black-tie']"
            size="lg"
            class="text-purple-400 mr-3"
          />
          <router-link
            to="/"
            class="text-gray-700 font-extrabold hover:text-black"
          >
            Home
          </router-link>
        </div>

        <div class="block lg:hidden pr4">
          <button
            class="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-900 hover:border-purple-500 focus:outline-none"
          >
            <font-awesome-icon
              :icon="['fas', 'bars']"
              size="lg"
              class="text-small"
              style="font-size: medium"
            />
          </button>
        </div>

        <div
          class="w-full flex-grow lg:flex lg:justify-end lg:items-center lg:w-auto hidden lg:block z-20"
        >
          <!-- <div
            class="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0"
          >
            <div class="relative pl-4 pr-4 md:pr-0">
              <input
                type="search"
                placeholder="Search"
                class="w-full bg-gray-100 text-gray-800 border focus:outline-none focus:border-purple-500 rounded py-1 px-2 pl-10"
              />
              <font-awesome-icon
                :icon="['fas', 'search']"
                size="lg"
                class="absolute"
                style="top: 0.5rem; left: 1.75rem; font-size: medium"
              />
            </div>
          </div> -->

          <ul class="lg:flex justify-end items-center">
            <li class="mr-3 py-2 lg:py-0">
              <router-link
                to="/"
                class="inline-block py-2 px-4 text-gray-900"
                active-class="font-bold"
                exact
              >
                Login
              </router-link>
            </li>
            <li class="mr-3 py-2 lg:py-0">
              <router-link
                to="/about"
                class="inline-block py-2 px-4 text-gray-900"
                active-class="font-bold"
              >
                Register
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div
      class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16"
    >
      <div class="w-full lg:w-1/5 lg:px-6 text-gray-800">
        <!-- <p class="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p> -->
        <div class="block lg:hidden sticky inset-0">
          <button
            class="flex w-full justify-end px-3 py-3 bg-white border rounded border-gray-600 hover:border-purple-500 focus:outline-none"
          >
            <font-awesome-icon
              :icon="['fas', 'chevron-down']"
              size="lg"
              class="text-small"
              style="font-size: medium"
            />
          </button>
        </div>
        <div
          class="w-full sticky inset-0 hidden lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-x-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"
        >
          <ul>
            <li
              class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent"
            >
              <router-link
                to="/"
                class="block pl-4 align-middle text-gray-700 hover:text-purple-500 border-l-4 border-transparent lg:hover:border-purple-400"
                active-class="lg:border-purple-500 text-gray-900 font-bold"
                exact
              >
                Home
              </router-link>
            </li>
            <li
              class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent"
            >
              <router-link
                to="/about"
                class="block pl-4 align-middle text-gray-700 hover:text-purple-500 border-l-4 border-transparent lg:hover:border-purple-400"
                active-class="lg:border-purple-500 text-gray-900 font-bold"
                exact
              >
                About
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 bg-white border border-gray-400"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>
