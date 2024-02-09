<script setup>
import { ref } from "vue";
import Alert from "@/components/Alert.vue";
import useTeacher from "@/composables/useTeacher";
import { useAlertStore } from "@/stores/AlertStore";
const alertStore = useAlertStore();

const onCloseModal = (show) => {
  alertStore.show = show;
};

const { addTeacher } = useTeacher;

const teacher = ref({
  email: null,
  password: null,
  name: null,
  birthdate: null,
  isAdmin: true,
});

const submit = () => {
  addTeacher(teacher.value);
  teacher.value = {
    email: null,
    password: null,
    name: null,
    birthdate: null,
    isAdmin: false,
  };
};
</script>

<template>
  <!-- component -->
  <div class="bg-white">
    <div class="flex justify-center h-screen">
      <div
        class="hidden bg-cover lg:block lg:w-2/3"
        style="
          background-image: linear-gradient(
            to right top,
            #ffffff,
            #b9b9b9,
            #777777,
            #3b3b3b,
            #000000
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
              Registro
            </h2>

            <p class="mt-3 text-gray-500">
              Registrate para iniciar sesion
            </p>
          </div>

          <div class="mt-8">
            <form @submit.prevent="submit">
              <!-- INPUT EMAIL -->
              <div>
                <label for="email" class="block mb-2 text-sm text-gray-600"
                  >Correo electronico</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ejemplo@correo.com"
                  maxlength="50"
                  required
                  v-model="teacher.email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <!-- INPUT NAME -->
              <div class="mt-6">
                <label for="name" class="block mb-2 text-sm text-gray-600"
                  >Nombre completo</label
                >
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Tu nombre completo"
                  maxlength="100"
                  pattern="^[a-zA-Z\s]+$"
                  required
                  v-model="teacher.name"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-m focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <!-- INPUT BIRTHDATE -->
              <div class="mt-6">
                <label
                  for="birthdate"
                  class="block mb-2 text-sm text-gray-600"
                  >Fecha de nacimiento</label
                >
                <input
                  type="date"
                  name="birthdate"
                  id="birthdate"
                  required
                  v-model="teacher.birthdate"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-m focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <!-- INPUT PASSWORD -->
              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600"
                    >Contraseña</label
                  >
                </div>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Tu contraseña"
                  maxlength="100"
                  required
                  v-model="teacher.password"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md 0 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <button
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Registrarse
                </button>
              </div>

              <p class="mt-8">
                Tienes una cuenta?
                <RouterLink to="/">
                  <span class="cursor-pointer text-sm text-blue-600">
                    Inicia sesión</span
                  >
                </RouterLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Alert
    :show-modal="alertStore.show"
    :success="alertStore.success"
    :title="alertStore.title"
    :message="alertStore.message"
    @on-update-modal="onCloseModal"
  />
</template>
