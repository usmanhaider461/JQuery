# JQUERY Practice and Playing


Is intuitive and easy to learn.
It integrates with Visual Studio IDE with ease.
Helps in loading pages faster and is SEO friendly.
Helps in Creating animated pages.

------------------------------------------------------
CSS Selectors
------------------------------------------------------
TagName Selectors
ID
Class
Pseudo-Class

------------------------------------------------------
The JQuery Objects
------------------------------------------------------

JQuery(<code>)
`$(<code>)`
`$(document)`


------------------------------------------------------
The JQuery Traversing the DOM
------------------------------------------------------
`$("button").click(function(e){
    $('selector').find().function(){};
    $('selector').closest().function(){};
    $('selector').parent().function(){};
    $('selector').first().function(){};
    $('selector').siblings().function(){};
});`

------------------------------------------------------
The JQuery DOM Manipulation
------------------------------------------------------

JQuery DOM Manipulation is much  easier than javascript DOM Manipulation.
 - Manipulate element's Content
 - Add/Remove DOM elements
 - Modify an existing element
 - Copy/Clone an elements
 - add/remove/modify elements' attributes

 There are 3 JQuery content Manipulation functions
 - **text()** update text
 - **html()** update html code
 - **val()**   val function get/set

------------------------------------------------------
The JQuery Adding or Removing DOM Elements
------------------------------------------------------
 - **after()** add an element after the specified element
 - **before()** add an element before the specified element
 - **append()**  It adds an element as last child to the specified element
 - **prepend()** It adds an element as a first child to the specified element
 - **remove()** It removes an elements

------------------------------------------------------
The JQuery Adding or Removing Attributes / Properties
------------------------------------------------------

- **removeAttr(name)** remove an attributes
- **hasClass( class )** check whether the class is available or not
- **addClass( class )** Adds a class
- **toggleClass( class )** if not add it, if available remove it.
- **removeClass( class )** remove the class
- **toggleClass( class )**
- **prop()**
- **.attr()**


------------------------------------------------------
The JQuery Copying Elements
------------------------------------------------------
- **clone()** is used to copy a matched elements.
It creates a clone of selected elements. By default it only clones an elements but not any event handler attached to it.


------------------------------------------------------
The JQuery Moving Elements
------------------------------------------------------

There are two approaches

- Place the attached the elements relative to another elements
- Place an element relative to the matched elements


------------------------------------------------------
The JQuery Filters
------------------------------------------------------

- eq() - selects from the set of matched elements to the one at the specified index
- filter() selects from the set of matched elements to those that match the selector or pass the function's test

- **.has()**
- **.not()**

------------------------------------------------------
The JQuery Data APIs
------------------------------------------------------

- **.data()** API reads html5 data-* attributes from DOM. It converts the date values to javascript types.
- In HTML5 they have introduced data attributes to append extra information with the element

------------------------------------------------------
The JQuery Effects
------------------------------------------------------
JQuery has been widely used for designing interactive elements such as sliders, menus, scrollers, and so on.
JQuery provides a very simple method for doing various kinds of amazing effects which can be used in development of various UI elements
- **.show()**
        - Very Commonly used methods for used for showing or hiding a selected element. It has two parameters, speed & callback.
- **.hide()**
        - Very Commonly used methods for used for showing or hiding a selected element. It has two parameters, speed & callback.
- **Speed** It takes one of the predefined speeds/parameters ("slow", "normal" or "fast") or the number of milliseconds to run the animation
(e.g. 1000)

- Callback This is optional parameter which represents a function to be executed whenever the animation completes. 
- **Toggle()** if it's hide it will be shown r if it's shown it will be hide.
- **fadeIn()** Fade in all the selected elements by adjusting css opacity
- **fadeOut()** Fade Out all the selected elements by css opacity
- **fadeTo(Speed, Opacity, Callback)** 
                These methods add css opacity specified in the parameter
- **slideDown()** Adds height to the div form 0 to div's original height with slide effects
- **slideUp()** Hides the div with adding height and slide effects
- **slideToggle()** Toggles the visibility of the selected element with adding height and   slide effects


------------------------------------------------------
The JQuery Animation
------------------------------------------------------

Animation on Webpage is a difficult task when you do from scratch with native javascript
JQuery makes it easy with encapsulating all the complexity  by providing a single standalone function

- **.animate()**, which handles any type of animation.
Basically the animations will be created by altering the values of the CSS attributes
Animate method take 4 parameters
 * **Properties** - It takes CSS properties and applies on element to make our animation
 * **Duration**   - It takes time in milliseconds to play our animation
 * **Easing**   - Easing indicates transition effect which will be applied to animation
 * **Complete**   - Here we can provide callback function to execute soon after animation finishes
-> Syntax >> `.animate(properties[, duration][,Easing][, complete])`