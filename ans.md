1. getElementById: 
when we need make changes on single element, then we use this for unique id.

getElementsByClassName:
works as a group, ex: for same class name elements can change or update at a time.

querySelector:
work with only first element of css selector.

querySelectorAll:
work with all matching elements of css selector.

2. step1: create element and set innerText

const new = document.createElement("li");
new.innerText = "new element";

step2: find the parent from html where add the child

const elementList = document.getElementById("element-list");

step3: append the child to the parent

elementList.appendChild(new);

3. Event bubbling helps to move events in DOM.it bubble from child to through its ancestors to get its target element.

4. by Event Delegation, we only use a single event listener in parent element for handling on its child elements.. by using this, code will more simplified and elements can be handled dynamically.

5. preventDefault():
    prevent browser's default actions, ex:submitting a form.
  stopPropagation(): in DOM, it will help to stop event from bubbling or capturing through the DOM.



