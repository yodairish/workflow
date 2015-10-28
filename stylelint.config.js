module.exports = {
  rules: {

    /**
     * String
     */
    "string-quotes": [2, "single"],

    /**
     * Color
     */
    "color-hex-case": [2, "lower"],
    "color-hex-length": [2, "short"],
    "color-no-invalid-hex": 2,

    /**
     * Number
     */
    "number-leading-zero": [2, "never"],
    "number-max-precision": 0,
    "number-no-trailing-zeros": 2,
    "number-zero-length-no-unit": 2,

    /**
     * Function
     */
    "function-calc-no-unspaced-operator": 2,
    "function-comma-space-after": [2, "always"],
    "function-comma-space-before": [2, "never"],
    "function-linear-gradient-no-nonstandard-direction": 2,
    "function-parentheses-space-inside": [2, "never"],
    "function-space-after": [2, "always"],
    "function-url-quotes": [2, "single"],

    /**
     * Value
     */
    "value-no-vendor-prefix": 2,

    /**
     * Value List
     */
    "value-list-comma-newline-after": [2, "never-multi-line"],
    "value-list-comma-newline-before": [2, "never-multi-line"],
    "value-list-comma-space-after": [2, "always-single-line"],
    "value-list-comma-space-before": [2, "never-single-line"],

    /**
     * Property
     */
    "property-blacklist": 0,
    "property-no-vendor-prefix": 2,
    "property-whitelist": 0,

    /**
     * Custom Property
     */
    "custom-property-no-outside-root": 2,
    "custom-property-pattern": 0,

    /**
     * Declaration
     */
    "declaration-bang-space-after": [2, "never"],
    "declaration-bang-space-before": [2, "never"],
    "declaration-colon-newline-after": 0,
    "declaration-colon-space-after": [2, "always"],
    "declaration-colon-space-before": [2, "never"],
    "declaration-no-important": 1,

    /**
     * Declaration Block
     */
    "declaration-block-semicolon-newline-after": [2, "always"],
    "declaration-block-semicolon-newline-before": [2, "never-multi-line"],
    "declaration-block-semicolon-space-after": [2, "always-single-line"],
    "declaration-block-semicolon-space-before": [2, "never"],

    /**
     * Nesting Block
     */
    "nesting-block-opening-brace-newline-before": 0,
    "nesting-block-opening-brace-space-before": 0,

    /**
     * Block
     */
    "block-closing-brace-newline-after": [2, "always"],
    "block-closing-brace-newline-before": [2, "always"],
    "block-closing-brace-space-after": [2, "never"],
    "block-closing-brace-space-before": [2, "never"],
    "block-no-empty": 2,
    "block-opening-brace-newline-after": [2, "always"],
    "block-opening-brace-newline-before": 0,
    "block-opening-brace-space-after": 0,
    "block-opening-brace-space-before": [2, "always"],

    /**
     * Selector
     */
    "selector-combinator-space-after": [2, "always"],
    "selector-combinator-space-before": [2, "always"],
    "selector-no-attribute": 0,
    "selector-no-combinator": 0,
    "selector-no-id": 2,
    "selector-no-type": 0,
    "selector-no-universal": 2,
    "selector-no-vendor-prefix": 2,
    "selector-pseudo-element-colon-notation": [2, "single"],
    "selector-root-no-composition": 0,

    /**
     * Selector List
     */
    "selector-list-comma-newline-after": [2, "always"],
    "selector-list-comma-newline-before": [2, "never-multi-line"],
    "selector-list-comma-space-after": [2, "never"],
    "selector-list-comma-space-before": [2, "never"],

    /**
     * Rule
     */
    "rule-nested-empty-line-before": [2, "never"],
    "rule-no-duplicate-properties": 2,
    "rule-no-shorthand-property-overrides": 2,
    "rule-no-single-line": 2,
    "rule-non-nested-empty-line-before": [2, "always"],
    "rule-properties-order": 0,
    "rule-trailing-semicolon": [2, "always"],

    /**
     * Root
     */
    "root-no-standard-properties": 0,

    /**
     * Media Features
     */
    "media-feature-colon-space-after": [2, "always"],
    "media-feature-colon-space-before": [2, "never"],
    "media-feature-name-no-vendor-prefix": 2,
    "media-feature-range-operator-space-after": [2, "always"],
    "media-feature-range-operator-space-before": [2, "always"],

    /**
     * Custom Media
     */
    "custom-media-pattern": 0,

    /**
     * Media Query
     */
    "media-query-parentheses-space-inside": [2, "never"],

    /**
     * Media Query List
     */
    "media-query-list-comma-newline-after": [2, "always-multi-line"],
    "media-query-list-comma-newline-before": [2, "never-multi-line"],
    "media-query-list-comma-space-after": [2, "always"],
    "media-query-list-comma-space-before": [2, "never"],

    /**
     * At Rule
     */
    "at-rule-empty-line-before": [2, "always", {
      except: ["blockless-group", "all-nested"],
      ignore: ["after-comment"]
    }],
    "at-rule-no-vendor-prefix": 2,

    /**
     * Comment
     */
    "comment-empty-line-before": [2, "always"],
    "comment-space-inside": 0,

    /**
     * General
     */
    "indentation": [2, 2],
    "no-eol-whitespace": 1,
    "no-missing-eof-newline": 2,
    "no-multiple-empty-lines": 2
  }
};
