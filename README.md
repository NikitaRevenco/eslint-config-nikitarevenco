# eslint-config-nikitarevenco

> [!NOTE]
> Not used anymore

This is my personal config that I use in all of my projects. It has hundreds of eslint rules and is extremely strict.

```sh
pnpm add -D eslint-config-nikitarevenco
```

## Usage

Most basic:

```ts
import nikitarevenco from "eslint-config-nikitarevenco";

export default nikitarevenco({
  project: "tsconfig.json",
  tsconfigRootDir: import.meta.dirname,
});
```

You can also override any rules, as well as disable an entire plugin by specifying `false`.

```ts
import nikitarevenco from "eslint-config-nikitarevenco";

const override = {
  "jsx-a11y": "off",
};

export default nikitarevenco(
  { project: "tsconfig.json", tsconfigRootDir: import.meta.dirname },
  { react: override, unicorn: false },
);
```

As well as pass in however many additional eslint configurations that you want:

```ts
import nikitarevenco from "eslint-config-nikitarevenco";

const override = {
  "jsx-a11y": "off"
}

export default nikitarevenco(
  { project: "tsconfig.json", tsconfigRootDir: import.meta.dirname },
  { react: override, unicorn: false },
  { plugins: /* ... */, rules: /* ... */ },
  { plugins: /* ... */, rules: /* ... */ }
  // ... etc
);
```

## Rename the plugins

By default, none of the plugins are renamed.

You can override and specify your own custom names for each plugin.

```ts
import nikitarevenco from "eslint-config-nikitarevenco";

export default nikitarevenco({
  project: "tsconfig.json",
  tsconfigRootDir: import.meta.dirname,
  renames: {
    "@typescript-eslint": "typescript",
  },
});
```
