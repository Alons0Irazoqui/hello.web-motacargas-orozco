# Brief de Proyecto — Montacargas Orozco

## Resumen

Landing page para **Montacargas Orozco**, negocio dedicado a la renta de montacargas. Este documento es el brief de referencia para construir el sitio: reúne la información del negocio disponible, el branding derivado del logo y los requisitos visuales y de animación que el sitio debe cumplir.

El desarrollo se realiza sobre una **plantilla base de HTML ya existente**. La estructura de secciones de la página **ya está definida por la plantilla** y debe respetarse tal cual — este brief no indica qué secciones debe tener la página. Junto con este README ya se entregó un prompt inicial para adaptar la plantilla al negocio.

---

## Información del negocio

La única información disponible sobre el negocio es la siguiente. No se incluye ningún otro dato (dirección, horarios, servicios adicionales, redes sociales, etc.) porque no fue proporcionado — no debe inventarse ni asumirse.

- **Nombre del negocio:** Montacargas Orozco
- **Giro:** Renta de montacargas (según el propio logo)
- **Teléfono de contacto:** 664 372 7826 *(lada 664 corresponde a Tijuana, Baja California — dato inferido del número, no confirmado)*

---

## Branding (extraído del logo)

El logo (`imagenes/logo.jpeg`) es la única fuente de identidad visual disponible. De ahí se deriva la siguiente paleta y tipografía:

### Paleta de colores

| Uso | Color | HEX |
|---|---|---|
| Negro corporativo (fondos, texto, contornos) | ⬛ | `#151515` |
| Rojo primario (marca, acentos, CTAs) | 🟥 | `#E31E24` |
| Rojo oscuro (degradados, sombras, hover) | 🟥 | `#8B0000` |
| Blanco (fondos, negativos, texto sobre oscuro) | ⬜ | `#FFFFFF` |
| Gris neutro (fondos alternos, texto secundario) | ◽ | `#F2F2F2` |

El logo usa un degradado de rojo (más claro arriba, más oscuro abajo) sobre negro y blanco — este mismo tratamiento de degradado se puede reutilizar en acentos del sitio (botones, líneas divisoras, hover states) para mantener consistencia con la marca.

### Tipografía sugerida

- **Títulos / Hero:** una tipografía condensada, bold, de impacto industrial — similar al tratamiento de "OROZCO" en el logo. Sugerencia en Google Fonts: **Anton** o **Archivo Black**.
- **Cuerpo de texto / UI:** una sans-serif limpia y corporativa que contraste con el peso del título. Sugerencia en Google Fonts: **Inter** o **Roboto**.

### Identidad visual

El logo combina un ícono de engrane (industria/mecánica) con la silueta de un montacargas, tipografía bold en negro y rojo con efecto de degradado, y un elemento gráfico inferior que simula movimiento/velocidad. Esta identidad debe transmitirse en el sitio como una marca **industrial, robusta y confiable**, sin perder el acabado premium que se pide a continuación.

---

## Estilo visual obligatorio

El sitio debe manejar:

- Estilo **premium, enterprise y corporativo de marca**.
- Nivel **big tech**: elegante y a la vez minimalista.

---

## Efectos y animaciones requeridos

El sitio debe incluir:

- Efectos visuales y **animaciones de scroll**.
- **Pantalla de carga (preloader)** con spinner + logo del negocio.
- **Animación en el título del hero**: efecto máquina de escribir, cambio de color en las letras u otros efectos tipográficos.

---

## Instrucciones sobre assets

- El logo (`imagenes/logo.jpeg`) viene **con fondo**. Antes de usarlo en el sitio, se debe **remover el fondo** para obtener una versión con fondo transparente (PNG/SVG).
- La carpeta `imagenes/` contiene además varias fotografías de montacargas de la flota (distintas marcas y colores: amarillo, verde). No hay ningún documento con información adicional del negocio — estas imágenes son únicamente fotográficas y pueden usarse como material visual (galería, fondos, secciones del sitio) según lo permita la plantilla, pero no aportan datos de texto.

---

## Nota para el desarrollador

Puedes iterar sobre el proyecto dándole instrucciones a Claude las veces que sea necesario hasta lograr el resultado deseado.

---

## Checklist

- [ ] Remover el fondo del logo (`imagenes/logo.jpeg`) antes de usarlo en el sitio.
- [ ] Incorporar la información del negocio (nombre, teléfono, giro) en la plantilla, respetando su estructura existente.
- [ ] Aplicar la paleta de colores definida (HEX) en todo el sitio.
- [ ] Aplicar la tipografía sugerida.
- [ ] Lograr un estilo visual premium, enterprise, corporativo y nivel big tech.
- [ ] Implementar efectos y animaciones de scroll.
- [ ] Implementar preloader con spinner + logo del negocio.
- [ ] Implementar animación en el título del hero (máquina de escribir, cambio de color u otro efecto tipográfico).
- [ ] Iterar con Claude Code las veces necesarias hasta lograr el resultado deseado.
