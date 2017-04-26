/// <reference path="fourslash.ts" />

// @Filename: a/f1.ts
//// [|foo/*0*/();|]

// @Filename: types/random/index.ts
//// export function foo() {};

// @Filename: tsconfig.json
//// {
////     "compilerOptions": {
////         "baseUrl": ".",
////         "typeRoots": [
////             "./types"
////         ]
////     }
//// }

verify.importFixAtPosition([
`NaN();`,
`import { foo } from "random";

foo();`
]);
