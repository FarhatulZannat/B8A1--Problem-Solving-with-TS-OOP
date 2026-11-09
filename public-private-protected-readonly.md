# Access Modifiers in TypeScript OOP

## Introduction

Access modifiers control who can read or change a class member. TypeScript offers `public`, `private`, `protected`, and `readonly` to enforce encapsulation at compile time.

## public

Members are `public` by default, so any code, inside or outside the class, can access them freely.

```ts
class User {
  public name: string;
  constructor(name: string) { this.name = name; }
}
console.log(new User("Rafi").name); // OK
```

## private

A `private` member is accessible only inside its own class, which protects sensitive data like a balance.

```ts
class Account {
  private balance = 100;
  deposit(n: number) { this.balance += n; }
}
const acc = new Account();
// acc.balance; // Error
```

## protected

A `protected` member works like `private`, but subclasses can also use it, which makes it ideal for inheritance.

```ts
class Animal {
  protected sound = "...";
}
class Dog extends Animal {
  bark() { return this.sound; } // OK
}
// new Dog().sound; // Error
```

## readonly

A `readonly` property can be set only at declaration or in the constructor, so its value stays constant afterward.

```ts
class Point {
  readonly x: number;
  constructor(x: number) { this.x = x; }
}
// new Point(1).x = 5; // Error
```

## Conclusion

Use `private` to hide internal details, `protected` to share them with subclasses, `readonly` to prevent changes, and `public` for the intended API. Note that these checks exist only at compile time, so the compiled JavaScript does not enforce them at runtime.