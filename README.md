# B8-A1: TypeScript Assignment

A small TypeScript practice project (Batch 8, Assignment 1) that collects solutions to a set of TypeScript exercises. Each exercise demonstrates a core TypeScript concept such as default parameters, union types, tuples, generics, interfaces, classes with access modifiers, and async/await.

## Assignment Overview

This assignment (B8-A1) is part of the Batch 8 TypeScript learning track. It consists of a series of hands-on problems designed to practice and reinforce fundamental TypeScript features, from basic type annotations to object-oriented programming and asynchronous code. Alongside the code solutions, two short write-ups explore important TypeScript topics in more depth.

## Quick Links

- 📝 [any-unknown-never.md](any-unknown-never.md) — TypeScript's Type Hierarchy: `any`, `unknown`, and `never`
- 🔐 [public-private-protected-readonly.md](public-private-protected-readonly.md) — Access Modifiers in TypeScript OOP

## Project Structure

```
B8-A1/
├── solutions.ts                        # TypeScript source with all problem solutions
├── solutions.js                        # Compiled JavaScript output
├── any-unknown-never.md                # Blog: any, unknown, and never
├── public-private-protected-readonly.md # Blog: access modifiers
└── README.md                           # This file
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [TypeScript](https://www.typescriptlang.org/) (v5 or later)

Install TypeScript globally if you haven't already:

```bash
npm install -g typescript
```

## Getting Started

1. Compile the TypeScript source:

```bash
tsc solutions.ts
```

2. Run the compiled JavaScript:

```bash
node solutions.js
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

## Concepts Covered

- **Type hierarchy** — `any`, `unknown`, and `never` (see [the blog post](any-unknown-never.md))
- **Access modifiers** — `public`, `private`, `protected`, `readonly` (see [the blog post](public-private-protected-readonly.md))
- Generics and generic constraints
- Union types and type narrowing
- Tuples and readonly arrays
- Interfaces and object typing
- Async/await with Promises

## License

This project is for educational purposes. Feel free to use and modify it.
