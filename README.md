# drarancibia.cl — Sitio web completo

Ecosistema web del Dr. Ignacio Arancibia (Clínica de Odontología Digital
e Implantes, Viña del Mar).

## Estructura del sitio

```
/
├── index.html             ← Landing principal (drarancibia.cl)
├── implantes.html         ← drarancibia.cl/implantes.html
├── casos.html             ← drarancibia.cl/casos.html
├── testimonios.html       ← drarancibia.cl/testimonios.html
└── images/                ← Todos los recursos visuales
```

## Cómo subir al hosting

1. Descomprime este ZIP.
2. Sube TODOS los archivos y carpetas al directorio raíz del hosting
   (donde actualmente está tu `index.html`). Sobrescribe los existentes.
3. Listo. Las URLs quedan:
   - https://drarancibia.cl/                    → landing
   - https://drarancibia.cl/implantes.html      → implantes
   - https://drarancibia.cl/casos.html          → casos clínicos
   - https://drarancibia.cl/testimonios.html    → testimonios

## Sobre las imágenes

La carpeta `images/` incluye TODOS los recursos nuevos (logos, diagramas
de implantes, fotos antes/después, etc.). Si en tu hosting actual ya
tienes la carpeta `images/` con las fotos originales del doctor, la foto
familiar, íconos de tratamientos y logos de aseguradoras, ESOS ARCHIVOS
SE CONSERVAN — el ZIP solo añade los nuevos sin tocar los existentes.

Archivos que la landing espera encontrar en `images/` y que NO vienen
en este ZIP (porque deberían existir ya en tu hosting):

- dr-arancibia.jpg            (foto del doctor)
- sobre-mi.jpeg               (foto familiar)
- cerec.png                   (ícono CEREC)
- implantes.png               (ícono implantes)
- tercerosmolares.png         (ícono terceros molares)
- odogeneral.png              (ícono odontología general)
- Botox.png                   (ícono botox)
- bciseguros.png, chilenaconsolidada.png, consorcio.jpeg,
  sura.png, vidasecurity.png, vidacamara.png, metlifew.png
  (logos de aseguradoras)

Si alguno NO está en el hosting, los íconos de tratamientos tienen
fallback automático (se muestra un SVG genérico), pero las fotos del
doctor y aseguradoras solo aparecerán cuando subas las imágenes.

## Páginas y enlaces internos

La navegación está pre-configurada:
- Tratamientos      → #tratamientos (ancla en index)
- Implantes         → implantes.html
- Casos clínicos    → casos.html
- Testimonios       → testimonios.html
- Contacto          → #contacto (ancla en index)
- Agenda Ahora      → Doctoralia (URL externa)

WhatsApp:
- Botón flotante presente en todas las páginas (esquina inferior derecha)
- Enlace: wa.me/+56950743387

Doctoralia:
- URL: doctoralia.cl/ignacio-arancibia-aburto-2/dentista/vina-del-mar

## Marca y diseño

- Tipografías: Fraunces (display) + Inter (sans) — cargadas desde Google Fonts
- Paleta: azul medianoche `#0d1b33` + acento dorado `#c4a574`
- Logo: archivo `images/logo_icon_dark.png` (oscuro para fondos claros)
        archivo `images/logo_icon_white.png` (blanco para fondos oscuros)

## Soporte

Si necesitas modificaciones futuras (textos, agregar casos, cambiar
precios, actualizar año), basta con editar el HTML correspondiente.
Todo el CSS está inline en cada archivo para facilitar edición sin
dependencias externas.
