import React from 'react';
import useTitle from '../../Hook/useTitle';

const Blog = () => {
    useTitle("blogs")
    return (
        <div>
            <div className='mx-4 my-2 p-2 bg-lime-200 border-r-2 text-black-500 text-xl'>
                <h1 className='text-xl'>What are the different ways to manage a state in a React application?</h1>
                 <p>There are four main types of state you need to properly manage in your React apps:</p>
                 <p>1.Local state:

                 Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.

                   For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                 </p>
                 <p>2.Global state:Global state is data we manage across multiple components.
                 Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                 </p>
                 <p>3.Server state:
                 Data that comes from an external server that must be integrated with our UI state.
                 </p>
                 <p>4.URL state:
                 Data that exists on our URLs, including the pathname and query parameters.


                 </p>
            </div>
            <div className='mx-4 my-2 p-2 bg-lime-200 border-r-2 text-black-500 text-xl'>
            <h1 className='text-2xl my-2'> How does prototypical inheritance work?</h1>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object

            </p>
            </div >

            <div className='mx-4 my-2 p-2 bg-lime-200 border-r-2 text-black-500 text-xl'>
            <h1 className='text-2xl my-2'>  What is a unit test? Why should we write unit tests?</h1>
            <p>
            The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code 
            which may be more difficult to find in later testing stages.
                 
            </p>
            </div >
            <div className='mx-4 my-2 p-2 bg-lime-200 border-r-2 text-black-500 text-xl'>
            <h1 className='text-2xl my-2'> 4 React vs. Angular vs. Vue?</h1>
            <p>
             <img src='https://belitsoft.com/images/uploads/blog/angular-vs-react-vs-vuejs.png' alt=''></img>
                 
            </p>
            </div >

            
        </div>
    );
};

export default Blog;