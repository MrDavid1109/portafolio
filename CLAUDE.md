# Portafolio de David Melo Boullon

## Qué es
Web personal de David Melo Boullon, profesor y coordinador de Informática en el Colegio Santa Gema Galgani (Formación Profesional) y programador de aplicaciones web y de escritorio. Idioma principal: español. Objetivo: que sea una de las webs de portafolio más visuales posibles, con animaciones cuidadas.

## Concepto
El portafolio es un repositorio de git. Tres ramas (programador, profesor, coordinador) salen del mismo autor. El máster, que David está cursando, aparece como "en curso" ("rama sin fusionar").

## Estado actual (v0.2)
Prototipo hecho con Vite, JavaScript y CSS sin frameworks. Funciona, pero el contenido es en parte de ejemplo.

Animaciones ya implementadas (inspiradas en sadestudio.design): loader con contador, menú overlay circular, titular apilado con revelado por líneas, cursor propio con etiquetas, símbolos con parallax de puntero, terminal con tilt, marquees, contadores que ruedan, tarjetas de ramas apiladas con `position: sticky`, línea de formación que se dibuja con el scroll, tilt 3D en el stack, botones magnéticos, scramble de texto, cambio de color de acento con la tecla C.

## Diseño
- Tema oscuro y tech. Fondo `#0a0d14`, paneles `#111624`, líneas `#222b40`.
- Colores de rama: programador `#4cc9f0`, profesor `#ffb454`, coordinador `#7be0a4`. El acento global cambia con la tecla C.
- Tipografías: Bricolage Grotesque (títulos), IBM Plex Sans (texto), JetBrains Mono (detalles de código).
- Evitar: degradados morado-azul, tarjetas idénticas por todas partes, emojis como marcadores.
- Respetar `prefers-reduced-motion` y mantener foco visible.

## Contenido real conocido
- Imparte desde hace 2 años: Aplicaciones Web (SMR); Acceso a Datos, Sistemas de Gestión Empresarial y Desarrollo de Interfaces (DAM); optativa nueva "Python para IA" en 2º de ASIR y 2º de DAM, por proyectos.
- Coordinador de Informática desde hace 1 año: departamento de SMR, ASIR, DAM y DAW, prácticas en empresa (FCT), Premio Nacional Don Bosco 2026-2027 junto a Sanidad.
- Correo: david.melo@colegio-santagema.es

## Pendiente de rellenar (David lo aportará)
- Titulaciones con año y centro (el máster, con nombre, en curso).
- 2 o 3 proyectos de programación destacados con capturas y enlaces.
- Foto, LinkedIn, GitHub.
- Revisar con David si el correo del centro debe ser el de contacto público.

## Hoja de ruta
1. Sustituir contenido de ejemplo en `src/data.js`.
2. Añadir secciones de proyectos con capturas y páginas de detalle.
3. Migrar animaciones de scroll a GSAP + ScrollTrigger y scroll suave con Lenis.
4. Versión móvil de las ramas apiladas (hoy son tarjetas normales en pantallas pequeñas).
5. Versión en inglés (como la web de referencia, con selector de idioma).
6. SEO básico (metadatos, Open Graph, sitemap) y rendimiento de imágenes.
7. Desplegar (GitHub Pages, Vercel o Netlify) y conectar dominio.
8. Iniciar repositorio git y hacer el primer commit.

## Convenciones
- Todo el contenido vive en `src/data.js`; no escribir textos dentro de `main.js`.
- Marcar el contenido provisional con la palabra "ejemplo" hasta sustituirlo.
- Textos en español, tono directo y en voz activa.
