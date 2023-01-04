
<a name="readme-top"></a>

[![MIT License][license-shield]][license-url] [![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/LeAmSa/nlw-esports-mobile">
    <img src="https://drive.google.com/uc?id=19N5TxkcIPzOLaFjMgkP0MFbITqKXenQ5" alt="Logo" width="200" >
  </a>

  <h3 align="center">NLW ESports MOBILE</h3>
  <h4 align="center">Status: DONE ✅ </h4>
  <div align="center">
  </div>
</div>

<br>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#settingapi">Setting API server</a></li>
        <li><a href="#running">Running the application</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<a name="about-the-project"></a>

![Screenshot][screenshot]

The objective was to develop a small social network of duos for games. The user can create your own ad in [web app version](https://github.com/LeAmSa/nlw-esports-web) and access a particular game page and find other users that published ads with information like nickname, game time, weekdays/time disponibility, and if they accept voice channel. By the end, the users can connect by copying the [discord](https://discord.com/) nickname.

_Project developed during the Next Level Week event from [Rockeatseat](https://www.rocketseat.com.br/)._

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<a name="built-with"></a>

This project was built with the following main frameworks/libraries.

- [![Expo][expo-badge]][expo-url]
- [![React][react-native-badge]][react-native-url]
- [![Typescript][typescript-badge]][typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

<a name="getting-started"></a>

### Prerequisites

<a name="prerequisites"></a>

- Resources needed:
  - [Git][git-url]
  - [Node.js][nodejs-url]
  - A code editor (ex: [Visual Studio Code][vscode-url])
  
 - To run the app, you need to install and config **Expo CLI**, click [here](https://docs.expo.dev/get-started/installation/) to follow the documentation steps.

### Installation

<a name="installation"></a>

1. Clone the repo
   ```sh
   git clone https://github.com/LeAmSa/nlw-esports-mobile.git
   ```
2. Enter the project folder
   ```sh
   cd nlw-esports-mobile
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

### Setting API server

<a name="settingapi"></a>

1. The server API for this project is present in my other repo named [nlw-esports-api](https://github.com/LeAmSa/nlw-esports-api). Follow the installation steps to put the API on.

2. Create (in nlw-esports-mobile) a `.env` file and enter your API key like in `.env.example`
   ```js
   API_KEY = "http://[YOUR_IP_ADDRESS]:[YOUR_API_PORT]";
   ```

### Running the application

<a name="running"></a>

- Run the application in dev mode
  ```sh
   npm run start
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Features -->

## Features

<a name="features"></a>

- [x] Login with Discord account
- [x] Access ads published in [web app](https://github.com/LeAmSa/nlw-esports-web)
- [x] Copy the user discord to clipboard by accessing the ads

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

<a name="license"></a>

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[screenshot]: https://drive.google.com/uc?id=14mYk_puQMaL-TsmILx5NnlZkC6MTlP3E
[license-shield]: https://img.shields.io/github/license/LeAmSa/nlw-esports-web?style=for-the-badge
[license-url]: https://github.com/LeAmSa/nlw-esports-web/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/leamsa
[git-url]: https://git-scm.com/
[nodejs-url]: https://nodejs.org/en/
[vscode-url]: https://code.visualstudio.com/
[expo-url]: https://expo.dev/
[expo-badge]: https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white
[react-native-badge]: https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-native-url]: https://reactnative.dev/
[typescript-badge]: https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
