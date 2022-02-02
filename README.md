# ava-pro

## What's ava-pro?

PT-BR:

Esta extensão foi criada para melhorar a minha experiência e a de alguns colegas durante o ensino remoto (com a plataforma Moodle, versão desconhecida).

- nenhum dado é coletado e nunca será;

- livre e gratuito para sempre;

## Install

### From your browser's extension store (recommended):

<!-- todo: <img src="https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg" height="50"/> -->

[<img src="https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/iNEddTyWiMfLSwFD6qGq.png" alt="Get It from the Chrome Web Store" title="Get It from the Chrome Web Store" height="50"/>](https://chrome.google.com/webstore/detail/ava-pro/gdcgfjijpmboeghojhjllfhkaekmnfcb)

## Ecosystem

| Project                                          | Description                                                  |
| ------------------------------------------------ | ------------------------------------------------------------ |
| [@ava-pro/crawlers](./packages/crawlers)         | Web Scrapping library for extracting data from Moodle pages. |
| [@ava-pro/shared](./packages/shared)             | Library with shared resources for the project needs.         |
| [@ava-pro/webextension](./packages/webextension) | The Web Extension source code.                               |

## Hacking

<details>
  <summary>Click to expand</summary>

### Getting the Source Code

```sh
git clone -b 0.0.2 https://github.com/guesant/ava-pro.git
cd ava-pro
```

#### Development with Docker (recommended)

We recommend the usage of Docker to develop the extension (~~due security reasons lol~~ [[1]](https://thehackernews.com/2021/10/popular-npm-package-hijacked-to-publish.html)).

```sh
make dev # -> packages/webextension/dist/dev
make build # -> packages/webextension/dist/prod
```

#### Development with the NodeJS from your system

<details>
  <summary>Click to expand</summary>

```sh
npm i -g pnpm
pnpm install
```

```sh
pnpm run dev # -> packages/webextension/dist/dev
pnpm run build # -> packages/webextension/dist/prod
```

</details>

### Load the extension build

### Chrome

<details>
  <summary>Click to expand</summary>

tl;dr;

> - Open the Extension Management page by navigating to chrome://extensions.
>
> - Enable Developer Mode by clicking the toggle switch next to Developer mode.
>
> - Click the Load unpacked button and select the extension directory.

- <https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked>

</details>

### Firefox

<details>
  <summary>Click to expand</summary>

tl;dr;

> - open Firefox
>
> - enter "about:debugging" in the URL bar
>
> - click "This Firefox"
>
> - click "Load Temporary Add-on"
>
> - open the extension's directory and select any file inside the extension, or select the packaged extension (.zip file).

- <https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/>

</details>

</details>

## License

[![GNU GPLv3 Image](https://www.gnu.org/graphics/gplv3-127x51.png)](http://www.gnu.org/licenses/gpl-3.0.en.html)

This project is a Free Software: You can use, study share and improve it at your
will. Specifically you can redistribute and/or modify it under the terms of the
[GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.html) as
published by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

## Author

Gabriel R. Antunes - <https://github.com/guesant>

---

Happy Hacking!
