# ava-pro

This is a Work-In-Progress branch.

The version 0.0.1 is archived and is located in [this branch](https://github.com/guesant/ava-pro/tree/0.0.1).

The version 0.0.2 will be a full extension rewrite. Learn more [here](https://github.com/guesant/ava-pro/issues/11).

## Hacking

### Getting the Source Code

```sh
git clone -b dev https://github.com/guesant/ava-pro.git
cd ava-pro
```

#### Development with docker-compose (recommended)

We recommend you to use docker-compose to develop the extension (~~due security reasons lol~~ [[1]](https://thehackernews.com/2021/10/popular-npm-package-hijacked-to-publish.html)).

```sh
docker-compose up dev # -> packages/webextension/dist/dev
docker-compose up build # -> packages/webextension/dist/prod
```

#### Development with your system's nodejs

```sh
npm i -g pnpm
pnpm install
```

```sh
pnpm run dev # -> packages/webextension/dist/dev
pnpm run build # -> packages/webextension/dist/prod
```

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
