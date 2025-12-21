# Sin Rodeos - Web

Web minimalista y moderna construida con **Next.js 14**, **Tailwind CSS** y **Framer Motion**.

## 🚀 Cómo empezar

Dado que la generación automática falló por falta de entorno, sigue estos pasos:

1.  **Instalar dependencias**:
    Abre tu terminal en la carpeta del proyecto y ejecuta:
    ```bash
    npm install
    ```

2.  **Iniciar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    Visita `http://localhost:3000` en tu navegador.

## 🛠 Configuración

Todo el contenido y diseño es editable sin tocar código complejo.

### Cambiar Textos
Edita el archivo `src/content/siteCopy.ts`.
Aquí encontrarás todo el texto de la web: Hero, Formulario, Beneficios, FAQ, etc.

### Cambiar Colores / Marca
Edita el archivo `src/config/brand.ts`.
Aquí puedes ajustar la paleta de colores (Graphite, Red, etc.) y los radios de los bordes.

### Conectar Email Marketing
El backend actual (`src/app/api/lead/route.ts`) guarda los leads en un archivo local `leads-db.json` (solo en modo desarrollo) y valida los datos.
Para conectar herramientas reales (Brevo, ConvertKit), edita la sección "Production" de ese archivo.

## 📂 Estructura

- `src/app`: Páginas y Layout principal.
- `src/components/ui`: Componentes base (Botones, Inputs, Cards).
- `src/components/LeadForm.tsx`: Lógica del formulario de registro.
