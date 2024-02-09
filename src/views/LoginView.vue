<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useAuthenticate } from "@/composables/useAuth";

const user = ref({
  email: null,
  password: null,
});

const onSubmit = () => {
  const userAuth = useAuthenticate(user.value);
  if (!userAuth) {
    console.log("Contraseña o correo incorrecto");
  } else {
    console.log("Sesion iniciada tio");
  }
};
</script>

<template>
  <!-- component -->
  <div class="bg-whit">
    <div class="flex justify-center h-screen">
      <div
        class="hidden bg-cover lg:block lg:w-2/3"
        style="
          background-image: linear-gradient(
            to right top,
            #000000,
            #3b3b3b,
            #777777,
            #b9b9b9,
            #ffffff
          );
        "
      >
        <div
          class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40"
        >
          <div>
            <h2 class="text-5xl font-bold text-white">
              Plataforma escolar
            </h2>

            <p class="max-w-xl mt-3 text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
              autem ipsa, nulla laboriosam dolores, repellendus perferendis
              libero suscipit nam temporibus molestiae
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="flex-1">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-center text-gray-700">
              Inicio de sesion
            </h2>

            <p class="mt-3 text-gray-500">
              Inicia sesión para acceder a tu cuenta
            </p>
          </div>
          <!-- FORM -->
          <div class="mt-8">
            <form @submit.prevent="onSubmit">
              <div>
                <label for="email" class="block mb-2 text-sm text-gray-600"
                  >Correo electronico</label
                >
                <input
                  type="user"
                  name="email"
                  id="email"
                  placeholder="ejemplo@correo.com"
                  maxlength="50"
                  required
                  v-model="user.email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600"
                    >Contraseña</label
                  >
                  <a
                    href="#"
                    class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >Forgot password?</a
                  >
                </div>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Tu contraseña"
                  maxlength="100"
                  required
                  v-model="user.password"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <button
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Iniciar sesion
                </button>
              </div>
              <p class="mt-8">
                No tienes una cuenta?
                <RouterLink to="register">
                  <span class="cursor-pointer text-sm text-blue-600">
                    Registrate</span
                  >
                </RouterLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
