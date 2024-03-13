# Phone Input

This plugin creates an input group preceded by a dropdown of all countries.

## Installation

### manual

Download and include the script at the end of the body tag.

```html
<!--suppress HtmlUnknownTarget -->
<script src="path/to/jquery.bsPhone.min.js" type="text/javascript">
```

### composer

via command

```shell
composer require webcito/bs-phone-input:dev-main
```

via composer.json

```json
{
  "require": {
    "webcito/bs-phone-input": "dev-main"
  }
}
```

## Usage

All inputs with the attribute `[data-bs-toggle="phone"]` are initialized automatically.

```html
<input type="tel" value="+49123456789" data-bs-toggle="phone" id="example">

<!-- load jQuery and Bootstrap before -->
<script src="dist/jquery.bsPhone.min.js" type="text/javascript">
<script>
    $('#example').bsPhone();
</script>
```

## Options

| property          | data-attribute              | type       | default                        | desc                                                                                                             |
|-------------------|-----------------------------|------------|--------------------------------|------------------------------------------------------------------------------------------------------------------|
| default           | [data-default]              | `string`   | `de`                           | *The ISO code of the country to be preselected*                                                                  |
| limitedCountries  | [data-limited-countries]    | `array`    | `[]`                           | *If only certain countries should appear in the drop-down list, the country codes could be entered here*         |
| inputGroupClasses | [data-input-group-classes]  | `string`   | `mb-3`                         | *The CSS classes are set to the parent element (.input-group)*                                                   |
| dropDownClasses   | [data-drop-down-classes]    | `string`   | `btn btn-outline-secondary`    | *The CSS classes are set to the DropDown button*                                                                 |
| dropDownMaxHeight | [data-drop-down-max-height] | `string`   | `50vh`                         | *CSS property for the height of the scrollable area in the DropDown menu*                                        |
| inputClasses      | [data-input-classes]        | `string`   | `border-secondary rounded-end` | *Additional CSS classes for the input field*                                                                     |
| formatValue       |                             | `function` |                                | *The formatting for the result in the original input field. 2 parameters are provided: (phoneCode, value) => {}  |
| formatView        |                             | `function` |                                | *The formatting for the result in the displayed input field. 2 parameters are provided: (phoneCode, value) => {} |

## Methods

Methods are called as follows

```js
$('input').bsPhone('method', param);
```

| method            | example                                                   | description                 |
|-------------------|-----------------------------------------------------------|-----------------------------|
| `'val'`           | `$('#example').bsPhone('val', '+49123456789');`             | Sets the value of the input |
| `'val'`           | `$('#example').bsPhone('val');` or `$('#example').val();` | Get the value of the input  |
