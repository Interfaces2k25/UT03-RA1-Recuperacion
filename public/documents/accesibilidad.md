# Informe de Accesibilidad – Catálogo de Plantas

## 1. Navegación por teclado (TAB)
- Todos los enlaces, botones y tarjetas pueden recorrerse usando **TAB**.
- Las tarjetas incluyen `tabIndex={0}`, permitiendo acceder sin ratón.
- Todos los elementos muestran un foco visual claro.

![Tab producto](../imagenes/tab.png)
![Tab enlace](../imagenes/tab2.png)

---

## 2. Lectores de pantalla
- Todas las imágenes incluyen texto alternativo (`alt` descriptivo).
- Las tarjetas usan `aria-label="Abrir detalle de <nombre>"`.
- Se emplean encabezados semánticos (`h1`, `h2`) correctamente.
- La estructura del contenido facilita la lectura por voz.

![Texto alternativo de las fotos](../imagenes/alt.png)
![Cards con aria-label](../imagenes/arialabel.png)
![Lector de pantalla](../imagenes/lectorpantalla.png)

---

## 3. Página de detalle del producto
- El orden de lectura es correcto: botón → título → imagen → descripción.
- No hay elementos inaccesibles ni saltos inesperados.
![Detalle producto](../imagenes/detalleproducto.png)

---


