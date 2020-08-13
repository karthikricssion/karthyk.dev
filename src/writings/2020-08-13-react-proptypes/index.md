---
slug: "/writings/what-is-react-proptypes"
title: "What is the use of proptypes in ReactJS"
date: "2020-08-13"
tags: 
    - tech
    - funda
    - reactjs
category: "learning"
author: { name: 'Karthikeyan Rajendran', url: 'https://twitter.com/karthik_dot_js' }
published: true
---

'prop-types' is a run time typechecking of props. In order understand proptypes we need to know why and where it is used inside react application. 

### What is Props?
- It is special keyword in react, stands for properties. 
- It used to pass data as argument from one component to another.
- Uni directional data flow, ie., From parent to child
- Props are immutable (Read-only)

### Why propTypes?
In a small snippets, propTypes wouldn't have matter a lot. But when working with complex react application things get messy and harder to know what props available in components. It is time consuming activity. By using proptypes we can create a dictionary of props that used inside the component with its types. Since its a run time typechecker we will notice the errors in browser console. We can find different validators [here](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes). 

### defaultProps
By creating a dictionary of props using proptypes, We solve the time consuming problem. But what if we don't pass the attribute or props to the child component that are defined in proptypes and required? Instead of setting empty value to attribute we use defaultprops to set default values that is required by child component.

Here is the example of proptypes and default proptypes
```
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button title={props.label}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
}

Button.defaultProps = {
    label: 10,
    children: <div>Hello world!</div>
}

export default Button
```





