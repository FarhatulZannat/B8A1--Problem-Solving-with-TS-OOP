# TypeScript's Type Hierarchy: any, unknown, and never

## Introduction

TypeScript's types form a hierarchy. At the top sits `unknown`, at the bottom sits `never`, and `any` breaks the rules by escaping the hierarchy entirely. Understanding these three helps you write safer code.

## The Hierarchy

Every type is assignable to `unknown`, making it the top type. `never` is the bottom type: it is assignable to everything, but nothing is assignable to it.

```ts
const a: unknown = 42;        // OK: anything fits
const b: string = ("" as never); // OK: never fits anywhere
```

## any: The Escape Hatch

`any` turns off type checking. It can be assigned to and from every type, so errors slip through silently.

```ts
const x: any = "hello";
x.toFixed(); // No compile error, crashes at runtime
```

## unknown: The Safe Alternative

`unknown` also accepts any value, but you must narrow it before use.

```ts
const y: unknown = "hello";
// y.toUpperCase(); // Error
if (typeof y === "string") {
  y.toUpperCase(); // OK
}
```

## never: The Impossible Type

`never` represents values that cannot exist, such as the result of a function that always throws. It is also great for exhaustive checks.

```ts
type Shape = "circle" | "square";

function area(s: Shape): number {
  switch (s) {
    case "circle": return 3.14;
    case "square": return 4;
    default: {
      const _check: never = s; // Error if a new Shape is added
      return _check;
    }
  }
}
```

## Conclusion

Prefer `unknown` over `any` because it keeps the compiler on your side: you must prove a type before using it. Use `never` to catch unhandled cases, and reserve `any` for rare migration situations.