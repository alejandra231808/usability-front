import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
        role: localStorage.getItem('role') ||'role', 
        
    }),

    actions: {
        login(role) {
           
            //  de inicio de sesión 
            this.isLoggedIn = true;
            this.role = role;
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('role', role);
        },

        logout() {
            // Lógica de cierre de sesión 
            this.isLoggedIn = false;
            this.role = 'user';
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('role');
        },
    },

});