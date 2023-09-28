// TypeScript Modules

// I am making two functions
// demo2.ts knows about the add function
function add(x: number, y: number): number {
    return x + y;
}
// But when I export anything from this file, suddenly TS doesn't recognize my add function from this file. See what happens when you comment this function in.
// export function square(x: number): number {
//     return x * x;
// }

// these could also be exported if the export keyword preceded them.
interface Person {
    username: string,
    email: string,
}

type Color = "red" | "green" | "yellow";