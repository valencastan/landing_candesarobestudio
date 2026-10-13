# Cande Sarobe Studio — Maquetado Web UI/UX Landing Page

Maquetado web y aplicación interactiva para la landing page de **Cande Sarobe Studio**, fiel a la composición de la maqueta de escritorio (UI/UX) presentada en `image_1.png`.

---

## 🎨 Especificaciones de Diseño Implementadas

### 1. Entorno de Navegador de Escritorio (`BrowserChrome`)
- **Pestaña activa**: Icono monograma 'C' en rosa suave sobre blanco, título `"Cande Sarobe Studio"`, botón de cierre `×` y pestaña nueva `+`.
- **Controles de ventana**: Minimizar (`—`), Maximizar (`□`) y Cerrar (`✕`).
- **Barra de navegación**: Flechas de retroceso, avance, recarga y barra de direcciones (omnibox) estilizada con icono de ajustes, URL activa `candesarobestudio.com` y estrella de favoritos.
- **Acciones**: Icono de extensiones, avatar de usuario con monograma CS y menú desplegable.

### 2. Barra de Navegación Superior (`Header`)
- **Logotipo de autor**: Tipografía serif delicada clásica ("Cande Sarobe" y "Studio").
- **Menú de navegación central**: `"Inicio" • "Sobre mí" • "Servicios" • "Cursos" • "Galería" • "Contacto" • "Preguntas Frecuentes"`, con sutil subrayado rosa activo bajo "Inicio" y puntos separadores en color rosa marca (`#df3b68`).
- **Lado derecho**: Botón `"RESERVAR TURNO"` con borde rosa fino e interactividad, junto al icono de menú hamburguesa (tres líneas horizontales en negro).

### 3. Sección Principal (`Hero Section`)
- **Fondo**: Suave degradado rosa pastel luminoso y etéreo (`from-[#fff3f5] via-[#ffeff2] to-[#fdeef2]`).
- **Lado izquierdo (Texto & CTA)**:
  - Título estilizado en tipografía serif de alto impacto:
    ```
    DISFRUTÁ DE
    TRATAMIENTOS DE
    UÑAS EXCLUSIVOS
    ```
  - Tag de marca: `@ Cande Sarobe Studio` en fuente sans-serif ligera.
  - Botón llamativo en fucsia/rosa vibrante con esquinas redondeadas: `"VER SERVICIOS ↗"`.
- **Lado derecho (Fotografía de Impacto)**:
  - Fotografía en primer plano de manos con diseño de uñas artísticas en tonos violetas, fucsias, micro-pintura floral y strass/caviar.
  - Procesada y optimizada en formato `.webp` de alta resolución (estándar y `@2x` para pantallas Retina) con recorte suave que se funde con el fondo degradado.

### 4. Secciones Adicionales Completas
- **Sobre mí**: Biografía de Cande Sarobe, acreditaciones, protocolos de bioseguridad en autoclave e insumos descartables.
- **Servicios**: Detalle de Kapping Gel, Soft Gel Extensions, Manicura Rusa Combinada, Nail Art de Autor y Belleza de Pies.
- **Cursos**: Formación profesional y masterclasses presenciales en grupos reducidos.
- **Galería**: Portfolio filtrable por categorías con zoom lightbox.
- **Preguntas Frecuentes**: Acordeón interactivo con dudas habituales (duración, cuidados, señas, medios de pago).
- **Contacto & Ubicación**: Horarios, información de estudio privado, botón directo a WhatsApp y perfil de Instagram.
- **Modal de Reservas**: Formulario interactivo para agendar turnos y enviar la solicitud pre-formateada vía WhatsApp.

---

## 🛠️ Tecnologías y Tipografías

- **Framework**: React 18 + TypeScript + Vite 6
- **Estilos**: Tailwind CSS 3.4
- **Iconografía**: Lucide React
- **Tipografías**:
  - Títulos principales (Serif): *Playfair Display*, *Cinzel*, *Cormorant Garamond*
  - Textos y navegación (Sans-serif): *Montserrat*, *Inter*
- **Optimización de imágenes**: Formato `.webp` optimizado a 95% de calidad con versiones estándar y Retina 2x.

---

## 🚀 Comandos de Ejecución

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

Para generar la compilación de producción:
```bash
npm run build
```

Para previsualizar la compilación:
```bash
npm run preview
```
