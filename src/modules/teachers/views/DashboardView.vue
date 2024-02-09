<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <!-- component -->
  <div>
    <div
      class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white"
    >
      <!-- Header -->
      <div
        class="fixed w-full flex items-center justify-between h-14 text-white z-10"
      >
        <div
          class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none"
        >
          <img
            class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
            src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
          />
          <span class="hidden md:block">ADMIN</span>
        </div>
        <div
          class="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right"
        >
          <div
            class="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200"
          >
            <button class="outline-none focus:outline-none">
              <svg
                class="w-5 text-gray-600 h-5 cursor-pointer"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              class="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
            />
          </div>
          <ul class="flex items-center">
            <li>
              <div
                class="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"
              ></div>
            </li>
            <li>
              <RouterLink to="/">
                <a
                  href="#"
                  class="flex items-center mr-4 hover:text-blue-100"
                >
                  <span class="inline-flex mr-1">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </span>
                  Salir
                </a>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- ./Header -->

      <!-- Sidebar -->
      <div
        class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar"
      >
        <div
          class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow"
        >
          <ul class="flex flex-col py-4 space-y-1">
            <li class="px-5 hidden md:block">
              <div class="flex flex-row items-center h-8">
                <div
                  class="text-sm font-light tracking-wide text-gray-400 uppercase"
                >
                  Opciones
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate"
                  >Panel principal</span
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    height="64px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate"
                  >Materias</span
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span
                  class="w-5 h-5 inline-flex justify-center items-center ml-4"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="stroke-current text-white dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate"
                  >Alumnos</span
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate"
                  >Notificaciones</span
                >
                <span
                  class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full"
                  >1.2k</span
                >
              </a>
            </li>
            <li class="px-5 hidden md:block">
              <div class="flex flex-row items-center mt-5 h-8">
                <div
                  class="text-sm font-light tracking-wide text-gray-400 uppercase"
                >
                  Configuracion
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate"
                  >Perfil</span
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate"
                  >Configuracion</span
                >
              </a>
            </li>
          </ul>
          <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">
            Copyright @2024
          </p>
        </div>
      </div>
      <!-- ./Sidebar -->

      <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
        <!-- Create Cards -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-4 gap-4"
        >
          <div
            class="cursor-pointer bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group"
          >
            <div
              class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
                    stroke="#1E40AF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">Crear</p>
              <p>Materia</p>
            </div>
          </div>
          <div
            class="cursor-pointer bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group"
          >
            <div
              class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M13 20V18C13 15.2386 10.7614 13 8 13C5.23858 13 3 15.2386 3 18V20H13ZM13 20H21V19C21 16.0545 18.7614 14 16 14C14.5867 14 13.3103 14.6255 12.4009 15.6311M11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z"
                    stroke="#1E40AF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">Registrar</p>
              <p>Alumno</p>
            </div>
          </div>
        </div>
        <!-- Informacion Cards -->

        <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
          <!-- Materias Registradas -->
          <div
            class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded"
          >
            <div class="rounded-t mb-0 px-0 border-0">
              <div class="flex flex-wrap items-center px-4 py-2">
                <div class="relative w-full max-w-full flex-grow flex-1">
                  <h3
                    class="font-semibold text-base text-gray-900 dark:text-gray-50"
                  >
                    Materias
                  </h3>
                </div>
                <div
                  class="relative w-full max-w-full flex-grow flex-1 text-right"
                >
                  <button
                    class="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Ver todo
                  </button>
                </div>
              </div>
              <div class="block w-full overflow-x-auto">
                <table
                  class="items-center w-full bg-transparent border-collapse"
                >
                  <thead>
                    <tr>
                      <th
                        class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                      >
                        Materia
                      </th>
                      <th
                        class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                      >
                        Alumnos
                      </th>
                      <th
                        class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                      >
                        Cupo
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th
                        class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                      >
                        Materia(ejemplo)
                      </th>
                      <td
                        class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        0
                      </td>
                      <td
                        class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        <div class="flex items-center">
                          <span class="mr-2">0 de 0</span>
                          <div class="relative w-full">
                            <div
                              class="overflow-hidden h-2 text-xs flex rounded bg-blue-200"
                            >
                              <div
                                style="width: 0%"
                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Alumnos registrados -->
          <div
            class="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded"
          >
            <div
              class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded"
            >
              <div class="rounded-t mb-0 px-0 border-0">
                <div class="flex flex-wrap items-center px-4 py-2">
                  <div class="relative w-full max-w-full flex-grow flex-1">
                    <h3
                      class="font-semibold text-base text-gray-900 dark:text-gray-50"
                    >
                      Alumnos
                    </h3>
                  </div>
                  <div
                    class="relative w-full max-w-full flex-grow flex-1 text-right"
                  >
                    <button
                      class="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Ver todo
                    </button>
                  </div>
                </div>
                <div class="block w-full overflow-x-auto">
                  <table
                    class="items-center w-full bg-transparent border-collapse"
                  >
                    <thead>
                      <tr>
                        <th
                          class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                        >
                          Correo
                        </th>
                        <th
                          class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                        >
                          Materias inscrito
                        </th>
                        <th
                          class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                        >
                          ?????????
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="text-gray-700 dark:text-gray-100">
                        <th
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                        >
                          fulanito@aloba.mx
                        </th>
                        <td
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                          0
                        </td>
                        <td
                          class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                          <div class="flex items-center">
                            <span class="mr-2">0 de 0</span>
                            <div class="relative w-full">
                              <div
                                class="overflow-hidden h-2 text-xs flex rounded bg-blue-200"
                              >
                                <div
                                  style="width: 0%"
                                  class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Compiled dark classes from Tailwind */
.dark .dark\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
  border-color: rgba(55, 65, 81);
}
.dark .dark\:bg-gray-50 {
  background-color: rgba(249, 250, 251);
}
.dark .dark\:bg-gray-100 {
  background-color: rgba(243, 244, 246);
}
.dark .dark\:bg-gray-600 {
  background-color: rgba(75, 85, 99);
}
.dark .dark\:bg-gray-700 {
  background-color: rgba(55, 65, 81);
}
.dark .dark\:bg-gray-800 {
  background-color: rgba(31, 41, 55);
}
.dark .dark\:bg-gray-900 {
  background-color: rgba(17, 24, 39);
}
.dark .dark\:bg-red-700 {
  background-color: rgba(185, 28, 28);
}
.dark .dark\:bg-green-700 {
  background-color: rgba(4, 120, 87);
}
.dark .dark\:hover\:bg-gray-200:hover {
  background-color: rgba(229, 231, 235);
}
.dark .dark\:hover\:bg-gray-600:hover {
  background-color: rgba(75, 85, 99);
}
.dark .dark\:hover\:bg-gray-700:hover {
  background-color: rgba(55, 65, 81);
}
.dark .dark\:hover\:bg-gray-900:hover {
  background-color: rgba(17, 24, 39);
}
.dark .dark\:border-gray-100 {
  border-color: rgba(243, 244, 246);
}
.dark .dark\:border-gray-400 {
  border-color: rgba(156, 163, 175);
}
.dark .dark\:border-gray-500 {
  border-color: rgba(107, 114, 128);
}
.dark .dark\:border-gray-600 {
  border-color: rgba(75, 85, 99);
}
.dark .dark\:border-gray-700 {
  border-color: rgba(55, 65, 81);
}
.dark .dark\:border-gray-900 {
  border-color: rgba(17, 24, 39);
}
.dark .dark\:hover\:border-gray-800:hover {
  border-color: rgba(31, 41, 55);
}
.dark .dark\:text-white {
  color: rgba(255, 255, 255);
}
.dark .dark\:text-gray-50 {
  color: rgba(249, 250, 251);
}
.dark .dark\:text-gray-100 {
  color: rgba(243, 244, 246);
}
.dark .dark\:text-gray-200 {
  color: rgba(229, 231, 235);
}
.dark .dark\:text-gray-400 {
  color: rgba(156, 163, 175);
}
.dark .dark\:text-gray-500 {
  color: rgba(107, 114, 128);
}
.dark .dark\:text-gray-700 {
  color: rgba(55, 65, 81);
}
.dark .dark\:text-gray-800 {
  color: rgba(31, 41, 55);
}
.dark .dark\:text-red-100 {
  color: rgba(254, 226, 226);
}
.dark .dark\:text-green-100 {
  color: rgba(209, 250, 229);
}
.dark .dark\:text-blue-400 {
  color: rgba(96, 165, 250);
}
.dark .group:hover .dark\:group-hover\:text-gray-500 {
  color: rgba(107, 114, 128);
}
.dark .group:focus .dark\:group-focus\:text-gray-700 {
  color: rgba(55, 65, 81);
}
.dark .dark\:hover\:text-gray-100:hover {
  color: rgba(243, 244, 246);
}
.dark .dark\:hover\:text-blue-500:hover {
  color: rgba(59, 130, 246);
}

/* Custom style */
.header-right {
  width: calc(100% - 3.5rem);
}
.sidebar:hover {
  width: 16rem;
}
@media only screen and (min-width: 768px) {
  .header-right {
    width: calc(100% - 16rem);
  }
}
</style>
