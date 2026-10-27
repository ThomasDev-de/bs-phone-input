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

<!-- Load jQuery and Bootstrap before the plugin. -->
<script src="dist/jquery.bsPhone.min.js" type="text/javascript">
<script>
    $('#example').bsPhone();
</script>
```

The plugin bundles `libphonenumber-js` with full (`max`) numbering-plan metadata, so no extra phone-number script is needed. The original input contains the canonical E.164 value (for example, `+4930123456`) only while the visible value is valid. Invalid non-empty input blocks form submission and leaves the original value empty. Empty required inputs are checked by the visible field. The bundled library license is included in `dist/THIRD_PARTY_LICENSES.md`.

Use `$('#example').bsPhone('isValid')` to check the current field. A `bsPhone:validityChange` event is emitted on each validation with `(event, isValid, e164Value)`.

## Options

| property          | data-attribute              | type       | default                        | desc                                                                                                              |
|-------------------|-----------------------------|------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| default           | [data-default]              | `string`   | `de`                           | *The ISO code of the country to be preselected*                                                                   |
| showFlags         | [data-show-flags]           | `boolean`  | `true`                         | *Show country flags in the selector and selected country. Set `data-show-flags="false"` to hide them. Flags load as images from [Flagpedia's CDN](https://flagpedia.net/download/api).* |
| limitedCountries  | [data-limited-countries]    | `array`    | `[]`                           | *If only certain countries should appear in the drop-down list, the country codes could be entered here*          |
| inputGroupClasses | [data-input-group-classes]  | `string`   | `mb-3`                         | *The CSS classes are set to the parent element (.input-group)*                                                    |
| dropDownClasses   | [data-drop-down-classes]    | `string`   | `btn btn-outline-secondary`    | *The CSS classes are set to the DropDown button*                                                                  |
| dropDownMaxHeight | [data-drop-down-max-height] | `string`   | `50vh`                         | *CSS property for the height of the scrollable area in the DropDown menu*                                         |
| inputClasses      | [data-input-classes]        | `string`   | `border-secondary rounded-end` | *Additional CSS classes for the input field*                                                                      |
| formatValue       |                             | `function` |                                | *The formatting for the result in the original input field. 2 parameters are provided: (phoneCode, value) => {}*  |
| formatView        |                             | `function` |                                | *The formatting for the result in the displayed input field. 2 parameters are provided: (phoneCode, value) => {}* |

## Methods

Methods are called as follows

```js
$('input').bsPhone('method', param);
```

| method            | example                                                   | description                 |
|-------------------|-----------------------------------------------------------|-----------------------------|
| `'val'`           | `$('#example').bsPhone('val', '+49123456789');`             | Sets the value of the input |
| `'val'`           | `$('#example').bsPhone('val');` or `$('#example').val();` | Get the value of the input  |
| `'isValid'`       | `$('#example').bsPhone('isValid');`                         | Returns whether the current number is valid |
