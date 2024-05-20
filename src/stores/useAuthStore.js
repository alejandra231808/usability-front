import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
        role: localStorage.getItem('role') || 'role',
        username: localStorage.getItem('username') || 'usurname',
        experience: localStorage.getItem('experince') || 'experience', 
    }),

    actions: {
        login(role, username,experience) { 
            this.isLoggedIn = true;
            this.role = role;
            this.username = username;
            this.experience = experience; 
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('role', role);
            localStorage.setItem('username', username);
            localStorage.setItem('experience', experience); 
        },

        logout() {
            this.isLoggedIn = false;
            this.role = 'user';
            this.experience = ''; // Limpiar la experiencia al cerrar sesión
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('role');
            localStorage.removeItem('username');
            localStorage.removeItem('experience'); // Eliminar la experiencia del localStorage
        },
    },
});

