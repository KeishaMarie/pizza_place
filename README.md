# Pizza Place

#### By Keisha Hepner

#### This web application will generate price of pizza.

## Technologies Used

* CSS
* JavaScript
* HTML

## This webpage outputs the price of a pizza based on size and toppings selected.

## Setup/Installation Requirements

* Open your terminal and create a new folder with `mkdir` command. This is where your repository will be stored locally.
* Navigate to https://github.com/KeishaMarie/pizza_place.git
* Click on the green code button to open dropdown and copy link to clone pizza_place
* Open folder in your text editor.


## Known Bugs

* No known bugs

## MIT License

Copyright (c) [2022] [Keisha Hepner]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<br>
<br>
<br>


Description: Pizza()<br><br>

Test: "It should return a Pizza object with two properties for toppings and size."<br>
Code:<br>
const myPizza = new Pizza (["cheese", "sausage"], "large")<br>
Expected Output: Pizza {toppings:["cheese", "sausage"], "large")<br><br>


Description: price()<br><br>

Test: "It should output a price based on toppings and sizes selected by user."<br>
Code:<br>
all toppings, large<br>
Expected Output: $30<br><br>


Description: array []<br><br>

Test: "It should take all toppings selected and push them into an an array."<br>
Code:<br>
array = []<br>
newArray = array.push(inputtedTopping)<br>
Expected Output: ["cheese", "sausage", "mushroom"]<br><br>

Description: price([])<br><br>

Test: "It should output a price considering multiple toppings"<br>
Code:<br>
myPizza = ("large", "cheese", "mushroom")<br>
Expected Output: 42<br>