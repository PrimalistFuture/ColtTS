// TypeScript Modules

// This is how I could import the add and square functions
// Notice that is importing from demo.js not demo.ts. That is how it works. Even though I haven't actually compiled my demo.ts and dont have a demo.js
// import { add, square } from "./demo.js";

// Import Type Syntax
// Person and Color would need to be imported from demo.ts
// import type { Person, Color } from "./demo.js"

// TypeScript knows about the add function from demo.ts
// But if the export function square is commented in, TS will no longer know about this function.
// To get it know about it, it must be exported as well and imported, as shown above.
add(2, 3);