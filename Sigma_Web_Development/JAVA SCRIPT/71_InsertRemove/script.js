document.querySelector(".box")
// <div class=​"box">​ Hey i am the box; ​</div>​
// 2Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below to allow pasting.

document.querySelector(".box").innerHTML
// '\n            Hey i am the box;\n        '

document.querySelector(".container").innerHTML
// '\n        <div class="box">\n            Hey i am the box;\n        </div>\n    '

document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box">\n            Hey i am the box;\n        </div>\n    </div>'


document.querySelector(".container").nodeName
// 'DIV'

document.querySelector(".container").hidden
// false
document.querySelector(".container").hidden = true;
// true
document.querySelector(".container")
// <div class=​"container" hidden>​<div class=​"box">​ Hey i am the box; ​</div>​</div>​

// Attibutes methods
document.querySelector(".box").hasAttribute("style");
// true
document.querySelector(".box").setAttribute("style","display: inline");
// undefined
document.querySelector(".box").attr
// undefined
document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
document.querySelector(".box").remove
// ƒ remove() { [native code] }
document.querySelector(".box").removeAttribute("style")
// undefined


// ** ClassList and ClassName

document.querySelector(".container").className
// 'container red green'
document.querySelector(".container").classList


// DOMTokenList(3) ['container', 'red', 'green', value: 'container red green']
document.querySelector(".container").classList.add("shrikant");
// undefined
document.querySelector(".container").classList.add("shrikant");
// undefined
document.querySelector(".container").classList
// DOMTokenList(4) ['container', 'red', 'green', 'shrikant', value: 'container red green shrikant']