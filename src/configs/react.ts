import { react } from "../stub.js";
import { type RulesConfig, type RulesRecord } from "../types.js";
import { renameRules } from "../utils.js";

export const reactRules = (rulesConfig: RulesConfig, reactPrefix: string) => ({
  plugins: {
    [reactPrefix]: react,
  },
  rules: {
    ...renameRules(
      react.configs.flat.all.rules as RulesRecord,
      "react",
      reactPrefix,
    ),
    [`${reactPrefix}/forbid-component-props`]: "off",
    [`${reactPrefix}/jsx-filename-extension`]: [
      "error",
      { extensions: [".jsx", ".tsx"] },
    ],
    [`${reactPrefix}/jsx-max-depth`]: "off",
    [`${reactPrefix}/jsx-no-bind`]: ["error", { allowArrowFunctions: true }],
    [`${reactPrefix}/jsx-no-constructed-context-values`]: "off",
    [`${reactPrefix}/jsx-no-leaked-render`]: "off",
    [`${reactPrefix}/jsx-no-literals`]: "off",
    [`${reactPrefix}/jsx-props-no-spreading`]: "off",
    [`${reactPrefix}/jsx-sort-props`]: "off",
    [`${reactPrefix}/no-multi-comp`]: "off",
    [`${reactPrefix}/no-unescaped-entities`]: "off",
    [`${reactPrefix}/prop-types`]: ["error", { ignore: ["className"] }],
    [`${reactPrefix}/react-in-jsx-scope`]: "off",
    [`${reactPrefix}/require-default-props`]: "off",
    ...rulesConfig,
  } as RulesRecord,
});