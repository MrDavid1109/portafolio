import { defineConfig } from 'vite';

// base: './' -> rutas relativas en el build, así la web funciona tanto en
// la raíz de un dominio como en una subcarpeta de GitHub Pages (/usuario/repo/).
export default defineConfig({
  base: './'
});
