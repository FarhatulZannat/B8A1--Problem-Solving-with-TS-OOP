"use strict";
// prblm 1
// function multiplyValue(value: number, multiplier: number = 2) : number{
//     return value * multiplier
// }
// console.log(multiplyValue(10))
// console.log(multiplyValue(10, 5))
// console.log(multiplyValue(7, 0))
// prblm 2
// function processInput (value: string | number | boolean) : string | number {
//     if (typeof value === 'string') {
//         return value.trim().toLowerCase()
//     }else if (typeof  value === "number") {
//          return  value * 10
//     }
//     else {
//         return value ? "Active" : "Inactive"
//     }
// }
//
// console.log(processInput("  TypeScript  "))
// console.log(processInput(7))
// console.log(processInput(true))
// console.log(processInput(false))
// prblm 3
// const formatCoordinate = (coordinate: readonly [number, number, string]) : string => {
//     const [latitude, longitude, locationName] = coordinate
//     return `Location: ${locationName} (${latitude}, ${longitude})`
// }
//
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]))
// prblm 4
// function concatenateArrays<T>(...arrays: T[][]): T[] {
//     const combinedArray: T[] = []
//     for (const array of arrays) {
//         combinedArray.push(...array)
//     }
//     return combinedArray
// }
//
// console.log(concatenateArrays(["a", "b"], ["c", "d"]))
// console.log(concatenateArrays([1, 2], [3, 4], [5]))
// prblm 5
// interface Course {
//     title: string
//     students: number
//     isPublished: boolean
// }
// function getPopularCourses (courses: Course[], minStudents: number) : Course[] {
//     return courses.filter((course : Course) => course.isPublished === true && course.students >= minStudents)
// }
// const courses = [
//     { title: "TypeScript Mastery", students: 120, isPublished: true },
//     { title: "Draft Course", students: 200, isPublished: false },
//     { title: "Basic HTML", students: 45, isPublished: true },
//     { title: "Next.js Pro", students: 85, isPublished: true }
// ];
//
// console.log(getPopularCourses(courses, 80))
// prblm 6
// function pluckValues <T, K extends keyof T>(items: T[], key: K ): T[K][]  {
//     return items.map((item: T): T[K] => item[key])
// }
// const users = [
//     { id: 1, name: "Rakib", role: "Admin" },
//     { id: 2, name: "Sadia", role: "Editor" },
//     { id: 3, name: "Tariq", role: "Subscriber" }
// ];
//
// console.log(pluckValues(users, "id"))
// prblm 7
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
// Function Calls
console.log(manager.getDetails());
console.log(manager.getRoleInfo());
