# CSS

`ctrl shift i for console in chrome`

you can also edit css using inline styles within HTML (thats why its called inline styles) EG: 
```html 
<header style="background-color: green;"
```

alternativaly you can use style tags in the head.

```html
<style>
li
{
background-color: purple;
}
</style>
```

### Seperation of concerns
- a way of seperating tasks of software engineers.

`css-tricks.com` for css things to look up!

lists are naturally already block, to have them be inline, use `display: inline-block`

`paletton.com` for color combos

- `class` is a good way to select an element and configure it. Use a `.` dot access it
- `id` is similar to class but can only be used ONCE, use a `#` to access it.
- a `*` is symbolises all elements, is always at the top of css. for example, text-align: right.
- `element` is used to select one from html and edit it
- `element, element` is the same as above to select multiple elements
- `element element` is a bit different, it selects elements within another elemen, like `h2 p` will select all p elements within h2.
- `element > element` select all elements that are parent of a selected element, like `h2 > p` will select all p elements that are children of h2, only directly being the parent of p will work, not if for example a div is a parent of p.
- `element + element` select any element RIGHT after the first element
- `first-child` and `last-child` are used for the first and last child of a element are edited, for example first and last p element of a div id


which selectors win out depends on:
- specificity
- importance
- source order

Font-style, weight, size and family can be used to edit the font style for your elemets.

`Google Fonts` are free good fonts to choose.
To use a font inside html: 
```html 
<link href="link of fonts" rel="stylesheet"
```


for images you do 
```html 
<img src="image-link" width="100px" height="100px" alt="alternative text">
```

with img float: left or right the text will wrap around it to right or left.

footer clear: both; to have to footer go to its place and then text-align: center;

box-model: to do

em and rem: todo