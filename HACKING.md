# Hacking

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

```sh
make clear-cache # purge some cache stuffs
make attach # attaches a shell into a running container (dev or build)
```

```sh
make sh # start a new container and attaches a shell session
```

#### Development with the NodeJS from your machine

```sh
npm i -g pnpm
pnpm install
```

```sh
pnpm run dev # -> packages/webextension/dist/dev
pnpm run build # -> packages/webextension/dist/prod
```

### Load the extension build

### Chrome

tl;dr;

> - Open the Extension Management page by navigating to chrome://extensions.
>
> - Enable Developer Mode by clicking the toggle switch next to Developer mode.
>
> - Click the Load unpacked button and select the extension directory.

Userful resources:

- <https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked>

### Firefox

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

Userful resources:

- <https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/>
