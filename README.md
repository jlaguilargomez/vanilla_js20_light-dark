# vanilla_js20_light-dark-mode

Light and dark mode project from "JS 20 projects course"

Live project: https://sad-kare-aa9564.netlify.app/

## ¿De qué va esto?

Crearemos una web bastante sencilla con unos estilos predeterminados y las fuentes de google fonts. Cada enlace del menú de la cabecera nos llevará a una sección de la misma (navegación mediante ID) ...

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ef8750e1-6014-447c-8d72-3ce0e50470ed/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ef8750e1-6014-447c-8d72-3ce0e50470ed/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/44553ecf-855a-45d3-a818-4d725fcad44b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/44553ecf-855a-45d3-a818-4d725fcad44b/Untitled.png)

Además tendrá un modo "oscuro" bastante chulo que cambia todos los estilos definidos.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/709fc788-ebec-4202-8ae8-fc7debcd9186/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/709fc788-ebec-4202-8ae8-fc7debcd9186/Untitled.png)

## A tener en cuenta ...

El "toggle switch" es muy básico pero útil. Utilizamos el ejemplo de la W3School, personalizándolo

[How To Create a Toggle Switch](https://www.w3schools.com/howto/howto_css_switch.asp)

---

# GitHub

[jlaguilargomez/vanilla_js20_light-dark](https://github.com/jlaguilargomez/vanilla_js20_light-dark)

---

# Project

Interesante artículo sobre el uso del "dark mode" (diseño):

[The Ultimate Guide on Designing a Dark Theme for your Android app.](https://blog.prototypr.io/how-to-design-a-dark-theme-for-your-android-app-3daeb264637)

La plantilla del proyecto que nos proporciona el curso ya viene preconfigurada con variables de CSS que definen los colores, tanto del modo "normal" como del modo "oscuro":

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e90d4e78-be29-4d33-921d-10c97a51f5b6/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e90d4e78-be29-4d33-921d-10c97a51f5b6/Untitled.png)

Utilizaremos de nuevo las plantillas de **HERO PATTERNS**, que nos proporcionan unos patrones para el background en formato SVG (escalables):

[Hero Patterns](https://www.heropatterns.com/)

Configuramos la barra de navegación una vez que hemos añadido la estructura básica de la página:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9a3b245-1dc2-40f4-bd9a-18c2a2eaf44e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9a3b245-1dc2-40f4-bd9a-18c2a2eaf44e/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d83538e9-7453-43c3-a313-dfa1172783bd/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d83538e9-7453-43c3-a313-dfa1172783bd/Untitled.png)

Fíjate en la propiedad "background", la hemos configurado de una forma diferente para que nos sea más sencillo el modificarla mediante JS

Para generar el efecto de "scroll" de forma "suave", añadimos la propiedad correspondiente:

```css
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
```

Una vez más, me gusta el estilo de botones que se ha preparado:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc5676a3-8b15-4a01-b794-953cb4801d44/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc5676a3-8b15-4a01-b794-953cb4801d44/Untitled.png)

Chequea el CSS si los necesitas.

```css
/* Projects Section */
.buttons {
  margin-top: 15px;
  margin-bottom: 50px;
}

button {
  min-width: 100px;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 10px;
  border: 2px solid var(--primary-color);
  font-size: 15px;
  outline: none;
}

button:disabled {
  opacity: 0.4;
  cursor: default;
}

button:hover:not(.outline) {
  filter: brightness(110%);
}

.primary {
  background: var(--primary-color);
  color: var(--on-primary);
}

.secondary {
  border: 2px solid var(--secondary-color);
}

.secondary,
.secondary:hover,
.outline.secondary:hover {
  background: var(--secondary-color);
  color: var(--on-primary);
}

.outline {
  background: var(--background);
  color: var(--on-background);
}

.outline:hover {
  background: var(--primary-color);
  color: var(--on-primary);
}
```

---

## Otros recursos

[Using CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
