
// -----------------in case of delete 
import React, { useRef } from "react";
import { Accordion, Container, Button } from "react-bootstrap";
const Blog = () => {

  return (
    <div  style={{marginTop: ''}}  className="">
      <Container  className="p-3">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <p
                style={{
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "bold",
                  backgroundColor: "",
                }}
              >
                Tell us the differences between uncontrolled and controlled
                components.
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-black fs-5">
                In React, there are two ways to handle form data in components:
                controlled and uncontrolled components.
                <br /> <hr /> A controlled component is one where the form data is
                handled by the component’s state. The value of the form input
                elements is controlled by the state of the component and any
                changes to the input value are handled by callback functions
                such as onChange . This means that the component has full
                control over the input data and can manipulate it as needed.
                <br /><hr />
                On the other hand, an uncontrolled component is one where the
                form data is handled by the DOM (Document Object Model) itself.
                The value of the form input elements is not controlled by the
                state of the component and any changes to the input value are
                not handled by callback functions. Instead, to access the value
                of an input element in an uncontrolled component, we use refs .
                <br /> <hr />
                The primary difference between a controlled and an uncontrolled
                component is related to how they handle their value. A
                controlled component receives the altered value from a callback
                function, whereas an uncontrolled component receives it from the
                DOM .
                <br />
                In summary, a controlled component gives you more control over
                the form data and its manipulation, while an uncontrolled
                component allows you to access the form data directly from the
                DOM.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <p
                style={{
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "bold",
                  backgroundColor: "",
                }}
              >
                How to validate React props using PropTypes
              </p>
            </Accordion.Header>
            <Accordion.Body className="text-black fs-5">
              <p>
                In React, props are used to pass data from parent components to
                child components. Since parent components can pass down any data
                as props to child components, it is important to validate the
                data type to ensure the child component receives what it expects
                .
              </p>
              <br />
              <p>
                To validate props in React, you can use a built-in mechanism
                called PropTypes. PropTypes allows you to specify the data type
                of each prop and whether it is required or not. If a component
                receives a prop of the wrong data type or if a required prop is
                not provided, a warning will be shown in the console . To use
                PropTypes, you need to install the prop-types library by running
                npm i prop-types. Then, you can import it into your component
                file and define the data types of your props using the
                .propTypes property of your component . For example, let’s say
                we have a component called MyComponent that receives two props:
                name, which is a required string, and age, which is an optional
                number. We can define the data types of these props using
                PropTypes as follows:
              </p>
              <hr />
              <br />
              <hr />
              <p>
                In this example, we define the data types of the name and age
                props using the .propTypes property of our component. We specify
                that the name prop is a required string by setting its value to
                PropTypes.string.isRequired, and that the age prop is an
                optional number by setting its value to PropTypes.number. If we
                pass a non-string value for the name prop or a non-number value
                for the age prop when rendering our component, a warning will be
                shown in the console. In summary, using PropTypes allows you to
                validate the data types of your props and ensure that your
                components receive the expected data.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <p   style={{
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "bold",
                  backgroundColor: "",
                }}>Tell us the difference between nodejs and express js.</p>
            </Accordion.Header>
            <Accordion.Body className="text-black fs-5">
              <p>
                Node.js and Express.js are two different technologies that are
                often used together to build web applications. Node.js is a
                runtime environment for building server-side applications using
                JavaScript. <br /><hr /> It is not a framework or a programming language, but
                rather a platform that allows developers to write server-side
                code using JavaScript . Node.js is event-driven and provides a
                set of APIs for building scalable network applications. On the
                other hand, Express.js is a framework built on top of Node.js
                for building web applications. It simplifies the process of
                building web applications with Node.js by providing a set of
                features and middleware functions that make it easier to
                organize and structure your code. <br /><hr /> In summary,
                Node.js provides the foundation for building server-side
                applications using JavaScript, while Express.js builds on top of
                that foundation to provide a more streamlined and simplified way
                of building web applications.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <p  style={{
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "bold",
                  backgroundColor: "",
                }}>What is a custom hook, and why will you create a custom hook?</p>

            </Accordion.Header>
            <Accordion.Body className="text-black fs-5">
              <p>
                In React, a custom hook is a reusable function that allows you
                to encapsulate and share logic between components. <hr /> Custom hooks
                are similar to built-in hooks like useState and useEffect, but
                they allow you to create your own custom logic that can be
                reused across multiple components. Custom hooks are useful
                when you have complex logic that is difficult to reuse using
                component composition. <br /> <hr /> Instead of duplicating the same logic
                across multiple components, you can extract it into a custom
                hook and reuse it wherever it is needed. To create a custom
                hook, you define a JavaScript function whose name starts with
                use and that can call other hooks. Custom hooks do not have a
                specific signature, so you can choose what arguments your custom
                hook takes and what it returns
              </p>
              <p>
                In summary, custom hooks allow you to encapsulate and share
                complex logic between components, making your code more reusable
                and easier to maintain.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
  
    </div>
  );
};

export default Blog;



/* import React from "react";
import { Accordion, Collapse, Container } from "react-bootstrap";
const Blog = () => {
  return (
    <div style={{marginTop: ''}}  className="">
      <Container className="p-3">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <p
                style={{
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "bold",
                  backgroundColor: "",
                }}
              >
                Tell us the differences between uncontrolled and controlled
                components.
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-black fs-5">
                In React, there are two ways to handle form data in components:
                controlled and uncontrolled components.
                <br /> <hr /> A controlled component is one where the form data is
                handled by the component’s state. The value of the form input
                elements is controlled by the state of the component and any
                changes to the input value are handled by callback functions
                such as onChange . This means that the component has full
                control over the input data and can manipulate it as needed.
                <br /><hr />
                On the other hand, an uncontrolled component is one where the
                form data is handled by the DOM (Document Object Model) itself.
                The value of the form input elements is not controlled by the
                state of the component and any changes to the input value are
                not handled by callback functions. Instead, to access the value
                of an input element in an uncontrolled component, we use refs .
                <br /> <hr />
                The primary difference between a controlled and an uncontrolled
                component is related to how they handle their value. A
                controlled component receives the altered value from a callback
                function, whereas an uncontrolled component receives it from the
                DOM .
                <br />
                In summary, a controlled component gives you more control over
                the form data and its manipulation, while an uncontrolled
                component allows you to access the form data directly from the
                DOM.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <p
                style={{
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "bold",
                  backgroundColor: "",
                }}
              >
                How to validate React props using PropTypes
              </p>
            </Accordion.Header>
            <Accordion.Body className="text-black fs-5">
              <p>
                In React, props are used to pass data from parent components to
                child components. Since parent components can pass down any data
                as props to child components, it is important to validate the
                data type to ensure the child component receives what it expects
                .
              </p>
              <br />
              <p>
                To validate props in React, you can use a built-in mechanism
                called PropTypes. PropTypes allows you to specify the data type
                of each prop and whether it is required or not. If a component
                receives a prop of the wrong data type or if a required prop is
                not provided, a warning will be shown in the console . To use
                PropTypes, you need to install the prop-types library by running
                npm i prop-types. Then, you can import it into your component
                file and define the data types of your props using the
                .propTypes property of your component . For example, let’s say
                we have a component called MyComponent that receives two props:
                name, which is a required string, and age, which is an optional
                number. We can define the data types of these props using
                PropTypes as follows:
              </p>
              <hr />
              <br />
              <hr />
              <p>
                In this example, we define the data types of the name and age
                props using the .propTypes property of our component. We specify
                that the name prop is a required string by setting its value to
                PropTypes.string.isRequired, and that the age prop is an
                optional number by setting its value to PropTypes.number. If we
                pass a non-string value for the name prop or a non-number value
                for the age prop when rendering our component, a warning will be
                shown in the console. In summary, using PropTypes allows you to
                validate the data types of your props and ensure that your
                components receive the expected data.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <p   style={{
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "bold",
                  backgroundColor: "",
                }}>Tell us the difference between nodejs and express js.</p>
            </Accordion.Header>
            <Accordion.Body className="text-black fs-5">
              <p>
                Node.js and Express.js are two different technologies that are
                often used together to build web applications. Node.js is a
                runtime environment for building server-side applications using
                JavaScript. <br /><hr /> It is not a framework or a programming language, but
                rather a platform that allows developers to write server-side
                code using JavaScript . Node.js is event-driven and provides a
                set of APIs for building scalable network applications. On the
                other hand, Express.js is a framework built on top of Node.js
                for building web applications. It simplifies the process of
                building web applications with Node.js by providing a set of
                features and middleware functions that make it easier to
                organize and structure your code. <br /><hr /> In summary,
                Node.js provides the foundation for building server-side
                applications using JavaScript, while Express.js builds on top of
                that foundation to provide a more streamlined and simplified way
                of building web applications.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <p  style={{
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "bold",
                  backgroundColor: "",
                }}>What is a custom hook, and why will you create a custom hook?</p>

            </Accordion.Header>
            <Accordion.Body className="text-black fs-5">
              <p>
                In React, a custom hook is a reusable function that allows you
                to encapsulate and share logic between components. <hr /> Custom hooks
                are similar to built-in hooks like useState and useEffect, but
                they allow you to create your own custom logic that can be
                reused across multiple components. Custom hooks are useful
                when you have complex logic that is difficult to reuse using
                component composition. <br /> <hr /> Instead of duplicating the same logic
                across multiple components, you can extract it into a custom
                hook and reuse it wherever it is needed. To create a custom
                hook, you define a JavaScript function whose name starts with
                use and that can call other hooks. Custom hooks do not have a
                specific signature, so you can choose what arguments your custom
                hook takes and what it returns
              </p>
              <p>
                In summary, custom hooks allow you to encapsulate and share
                complex logic between components, making your code more reusable
                and easier to maintain.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

 */