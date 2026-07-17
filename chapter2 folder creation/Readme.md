1. Creating a React folder using vite
    command : for creation of react folder 
        nmp create vite
        -> that will create a react folder 

    commad : for run the react app
        nmp run dev
    



2. Component

    -> A Component is a reusable piece of UI.
    -> It helps divide a large application into smaller parts.
    -> Every React application is made up of one or more components.
    -> A component returns JSX, which React renders on the screen.


    1.  Why do we use Components?

        -> To make the code reusable.
        -> To keep the project organized.
        -> To make debugging easier.
        -> To avoid writing the same UI multiple times.

    2. Types of Components

        1. Functional Component ✅ (Most Common)

            -> It is a JavaScript function.
            -> It returns JSX.
            -> It can use Hooks like `useState` and `useEffect`.

            ```jsx
            function Header() {
                return <h1>Hello React</h1>;
            }
            ```

        2. Class Component (Old)

            -> It is based on JavaScript classes.
            -> It uses lifecycle methods.
            -> Nowadays, functional components are preferred.


    3. Rules for Components

        -> Component names must start with a capital letter.
        -> A component must return only one parent element.



    4. Calling a Component

        -> React treats `<Header />` as a function call and renders the JSX returned by `Header`.


3. Props

    -> Props are used to pass data from Parent → Child.
    -> Props are read-only.

        ```jsx
        <Header name="Lucky" />
        ```

        ```jsx
        function Header(props) {
            return <h1>Hello {props.name}</h1>;
        }
        ```



