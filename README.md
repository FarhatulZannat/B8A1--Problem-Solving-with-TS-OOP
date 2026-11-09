# B8-A1: TypeScript Assignment

A small TypeScript practice project (Batch 8, Assignment 1) that collects solutions to a set of TypeScript exercises. Each exercise demonstrates a core TypeScript concept such as default parameters, union types, tuples, generics, interfaces, classes with access modifiers, and async/await.

## Quick Links

- 📝 [TypeScript's Type Hierarchy: `any`, `unknown`, and `never`](any-unknown-never.md)
- 🔐 [Access Modifiers in TypeScript OOP](public-private-protected-readonly.md)

## Assignment Overview

This assignment (B8-A1) is part of the Batch 8 TypeScript learning track. It consists of a series of hands-on problems designed to practice and reinforce fundamental TypeScript features, from basic type annotations to object-oriented programming and asynchronous code. Alongside the code solutions, two short write-ups explore important TypeScript topics in more depth.

## Notes & Blog Posts

- [TypeScript's Type Hierarchy: `any`, `unknown`, and `never`](any-unknown-never.md) — an overview of the type hierarchy and when to use each type.
- [Access Modifiers in TypeScript OOP](public-private-protected-readonly.md) — a guide to `public`, `private`, `protected`, and `readonly`.

## Project Structure

```
B8-A1/
├── solutions.ts                       # TypeScript source with all problem solutions
├── solutions.js                       # Compiled JavaScript output
├── any-unknown-never.md               # Notes on `any`, `unknown`, and `never`
├── public-private-protected-readonly.md # Notes on access modifiers
└── README.md                          # This file
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [TypeScript](https://www.typescriptlang.org/) (v5 or later)

Install TypeScript globally if you haven't already:

```bash
npm install -g typescript
```



## Problems Solved

| # | Function | Concept Demonstrated |
|---|----------|----------------------|
| 1 | `multiplyValue(value, multiplier = 2)` | Default parameters |
| 2 | `processInput(value)` | Union types & type narrowing |
| 3 | `formatCoordinate(coordinate)` | Readonly tuples & destructuring |
| 4 | `concatenateArrays(...arrays)` | Generics & rest parameters |
| 5 | `getPopularCourses(courses, minStudents)` | Interfaces & array filtering |
| 6 | `pluckValues(items, key)` | Generic constraints (`keyof T`) |
| 7 | `Employee` / `Manager` classes | Inheritance & access modifiers (`protected`, `private`) |
| 8 | `validateAgeAsync(age)` | Async/await & Promises |

### 1. multiplyValue

Multiplies a number by an optional multiplier that defaults to `2`.

```ts
multiplyValue(10);        // 20
multiplyValue(10, 5);     // 50
multiplyValue(7, 0);      // 0
```

### 2. processInput

Accepts a `string`, `number`, or `boolean` and returns a normalized result:

- `string` → trimmed and lowercased
- `number` → multiplied by `10`
- `boolean` → `"Active"` or `"Inactive"`

### 3. formatCoordinate

Formats a readonly tuple `[latitude, longitude, locationName]` into a readable string.

```ts
formatCoordinate([23.81, 90.41, "Dhaka"]); // "Location: Dhaka (23.81, 90.41)"
```

### 4. concatenateArrays

Concatenates any number of arrays of the same type into a single array using generics.

### 5. getPopularCourses

Filters a list of `Course` objects, returning only published courses with at least `minStudents` students.

### 6. pluckValues

Extracts a single property from an array of objects in a type-safe way using `keyof`.

### 7. Employee / Manager

Demonstrates class inheritance. `Employee` holds a `protected` name and `private` base salary; `Manager` extends it and adds a `private` department.

### 8. validateAgeAsync

An async function that resolves with `"Access Granted"` for ages 18+, and rejects otherwise after a short delay.

## Concepts Covered

- **Type hierarchy** — `any`, `unknown`, and `never` (see `any-unknown-never.md`)
- **Access modifiers** — `public`, `private`, `protected`, `readonly` (see `public-private-protected-readonly.md`)
- Generics and generic constraints
- Union types and type narrowing
- Tuples and readonly arrays
- Interfaces and object typing
- Async/await with Promises

