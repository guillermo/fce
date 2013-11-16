# Form Content Editable - FCE

Form Content Editable is a Javascript plugin with 0 dependencies, that makes a div with html behaves like a normal textarea.

## Behaviour

It attaches to any html element with *data-name* and will **add** (it is not necesary to be added) a hidden field just after the opening of the parent form. It will trigger the normal events:

* focus
* blur
* change

With this events you can decide what to do. For example:

* OnFocus: Show toolbar (Bold, Italic, headings)
* OnBlur: Hide toolbar
* OnChange: Validate, remote save.

## Usage

```html
<form action=/page/3 method=post>
<h1 data-name=title>This Is the title of the page 3</h1>
<div id=page-body data-name=body>
</form>
<script>
 FCE.attach()
</script>
```

## Api

* FCE.**attach()** - Will attach to any **form *[data-name]**
* FCE.**autoload()** - Will listen for the events: **load** and **page:load**, and call FCE.**attach()**.

## Milestones

* *1.0* - Make it work with the default behaviour.
* *1.1* - Add support for a toolbar.
* *1.2* - Support dragAndDropEvents of external images.

## Author

* See commiters.

## License

Any BSD license.

## Collaboration

* Standard github collaboration process.




