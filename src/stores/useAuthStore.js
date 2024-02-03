import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    }),

    actions: {
        login() {
            // Lógica de inicio de sesión (puedes ajustar según tus necesidades)
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true');
        },

        logout() {
            // Lógica de cierre de sesión (puedes ajustar según tus necesidades)
            this.isLoggedIn = false;
            localStorage.removeItem('isLoggedIn');
        },
    },



    // state: () => ({
    //     isLoggedIn: false,
    // }),

    // actions: {
    //     login() {
    //         // Lógica de inicio de sesión (puedes ajustar según tus necesidades)
    //         this.isLoggedIn = true;
    //     },

    //     logout() {
    //         // Lógica de cierre de sesión (puedes ajustar según tus necesidades)
    //         this.isLoggedIn = false;
    //     },
    // },
});