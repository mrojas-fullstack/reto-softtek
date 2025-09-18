<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="#">
    <img src="public/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Rimac Seguros</h3>

  <p align="center">
    Aplicativo seguro de salud Rimac, con formulario de datos, opciones de seguros y resumen de compra.
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de Contenido</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#tecnologias">Tecnologias</a></li>
      </ul>
    </li>
    <li>
      <a href="#instrucciones">Instrucciones</a>
      <ul>
        <li><a href="#pre-requisitos">Pre requisitos</a></li>
        <li><a href="#instalacion">Instalacion</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Acerca del Proyecto

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Desarrollar una aplicación web para la compra de un seguro, donde los usuarios deben ingresar sus datos como número de documento y número de telefono, tambien deben aceptar los terminos. Todo debe operar sobre una arquitectura moderna basada en React y stack de herramientas asociadas.

<p align="right">(<a href="#readme-top"> ir arriba </a>)</p>



### Tecnologias

El proyecto se desarrollo con las siguientes tecnologias:

* [![React][React.js]][React-url]
* [![Typescript][Typescript]][Typescript-url]

<p align="right">(<a href="#readme-top"> ir arriba </a>)</p>

<!-- GETTING STARTED -->
## Instrucciones

EL proyecto fue realizado con el gestor de paquetes pnpm,

### Pre requisitos

Instalación del gestor de paquetes pnpm
* pnpm
  ```sh
  npm install -g pnpm@latest-10
  ```

### Instalacion

Instalación y configuracion del proyecto

1. Clonar el repositorio
   ```sh
   git clone https://github.com/mrojas-fullstack/reto-softtek.git
   ```
2. Instalar los paquetes PNPM
   ```sh
   pnpm install
   pnpm run dev
   ```

<p align="right">(<a href="#readme-top"> ir arriba </a>)</p>

<!-- USAGE EXAMPLES -->
## Uso

El proyecto tiene como primera vista un formulario, que tiene los siguientes campos:

* Número y tipo de documento
  * Dato que sera almacenado en el localstorage
  * Dato que se usara en el resumen
* Celular

Luego tenemos la sección donde se podrá elegir un plan.

* Planes
  * Para mí
  * Para alguien más

Segun el plan se listara los tipos de planes que se ofrece:

* Plan en Casa
* Plan en Casa y Clínica
* Plan en Casa + Chequeo

Segun se escoge el plan, nos motrara el resumen

<p align="right">(<a href="#readme-top"> ir arriba </a>)</p>

<!-- CONTACT -->
## Contacto

Miguel Rojas - [@mrojas](https://www.linkedin.com/in/miguel-rojas-a82614286/) - mrojas.fullstack@gmail.com

Project Link Github: [https://github.com/mrojas-fullstack/reto-softtek](https://github.com/mrojas-fullstack/reto-softtek)

Project Link Vercel: [https://reto-softtek.vercel.app/](https://reto-softtek.vercel.app/)

<p align="right">(<a href="#readme-top"> ir arriba </a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: public/screenshot.png
[React.js]: https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge
[React-url]: https://es.react.dev/
[Typescript]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=for-the-badge
[Typescript-url]: https://www.typescriptlang.org/
[ReactQuery]: https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white
[ReactQuery-url]: https://tanstack.com/query/latest
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC
[Tailwind-url]: https://tailwindcss.com/
[SHADCN]:https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff&style=for-the-badge
[SHADCN-url]: https://tailwindcss.com/