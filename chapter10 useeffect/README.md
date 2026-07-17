useEffect Hook (React)
Definition

useEffect is a React Hook that lets us perform side effects in a functional component.

A side effect means doing something outside of rendering UI.

Examples:

Fetch data from API
Timer (setInterval)
Event Listener
Local Storage
Updating document title
Syntax
import { useEffect } from "react";

useEffect(() => {
    // code

    return () => {
        // cleanup (optional)
    };
}, [dependencies]);
Parameters
1. Callback Function

The function that contains the side effect.

useEffect(() => {
    console.log("Hello");
});
2. Dependency Array

Controls when the effect runs.

useEffect(() => {

}, []);
Three Ways to Use useEffect
1. No Dependency Array

Runs after every render.

useEffect(() => {
    console.log("Runs every render");
});

Whenever component renders, it runs again.

2. Empty Dependency Array

Runs only once after the first render.

useEffect(() => {
    console.log("Runs once");
}, []);

Mostly used for:

API Calls
Initial setup
3. With Dependency

Runs whenever the dependency changes.

useEffect(() => {
    console.log("Count Changed");
}, [count]);

If count changes → effect runs.