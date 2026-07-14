
1. Introduction to React : 
    -> It is java Script library that use to make front end . 
    -> Complex ui , it is created by Meta. 
    -> It is Most of demanding skill.

2. Architecture :
    -> Component based side 
    

3. Libraries : use for a perticular feature 
    1. GSAP
    2. Lanis
    3. ReactJS


4. Frame work : 
    1. NextJs
    2. Angulars


5. Import and Export 

    1. Export 
        1. default export 
            syntex : 
                let a = 10; 
                export default a;
        
        2. named export 
            syntex : 
                export let b = 100;
    

    2. Import 

        1. Import for named export 
            syntex : 
                import {same_name} from './app.js'
        
        2. Import for default export 
            syntex : 
                import any_name from './appjs'
        


4. Real DOM vs Virtual DOM 

    1. Real DOM 

        HTML
        ├── head
        │   └── title
        └── body
            ├── header
            ├── section1
            │   ├── h1
            │   ├── image
            │   └── button
            ├── section2
            └── footer

    2. Virtual DOM 

        React Component
               │
               ▼
        Virtual DOM (JavaScript Object)
               │
        Compare with previous Virtual DOM
               │
               ▼
        Diffing Algorithm
               │
        Find the changed elements
               │
               ▼
        Update only those elements
               │
               ▼
        Real DOM