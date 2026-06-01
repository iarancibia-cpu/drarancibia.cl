# Clínica Misura — Sitio web completo

Ecosistema web de Clínica Misura (odontología digital, implantes y estética)
del Dr. Ignacio Arancibia, Viña del Mar.

## Estructura

```
/
├── index.html             ← Landing principal
├── implantes.html         ← /implantes.html
├── casos.html             ← /casos.html
├── testimonios.html       ← /testimonios.html
└── images/
    ├── logo_misura_iso_dark.png   ← isotipo M (azul, para fondos claros) — header y footer
    ├── logo_misura_iso_light.png  ← isotipo M (crema, para fondos oscuros) — watermarks CTA
    ├── logo_misura_full.png       ← logo completo (og:image / redes)
    └── (fotos de casos, diagramas, logos de aseguradoras, etc.)
```

## Cómo subir al hosting

1. Descomprime este ZIP.
2. Sube TODO el contenido de la carpeta `sitio-completo/` a la raíz del hosting.
   Sobrescribe lo existente.
3. IMPORTANTE — imágenes que YA debes tener en tu hosting (no vienen en este ZIP):
   - dr-arancibia.jpg, sobre-mi.jpeg
   - cerec.png, implantes.png, tercerosmolares.png, odogeneral.png, Botox.png
   - bciseguros.png, chilenaconsolidada.png, consorcio.jpeg, sura.png,
     vidasecurity.png, vidacamara.png, metlifew.png
   Cópialas a images/ desde tu respaldo si no están.

## Dominios

Ambos dominios (drarancibia.cl y el nuevo de Misura) pueden apuntar a este mismo
sitio. Como las rutas internas son relativas (implantes.html, casos.html, etc.),
funciona igual desde cualquier dominio. Solo configura el redireccionamiento en
el panel de tu hosting para que ambos sirvan el mismo directorio.

## Marca

- Nombre: Clínica Misura (principal) · Dr. Ignacio Arancibia (secundario)
- Azul Misura: #1d2c4b
- Dorado: #c2a06a
- Crema: #f1ede7
- Tipografías: Fraunces (display) + Inter (texto)

## Notas

- Navegación unificada en las 4 páginas (6 enlaces: Tratamientos, Implantes,
  Casos clínicos, Testimonios, Contacto, Agenda Ahora).
- Mails: contacto@drarancibia.cl e ignacio@drarancibia.cl
  (si migras el correo al dominio de Misura, actualízalos en el footer de las 4 páginas).
