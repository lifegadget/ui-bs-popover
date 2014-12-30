# ui-bs-popover

Leverages the Twitter Bootstrap 3.x popover functionality and provides a simple interface for Ember.

## Usage 

Basic usage is follows:

````hbs
{{#ui-bs-popover message='hello world'}}
	The HTML content that will be targetted for the popover
{{/ui-bs-popover}}
````

Of course `message` would typically can be a bound variable versus the static text (as shown above) and in addition the following variables are available to this control:

### Core Content Properties

| Variable | Type | Default | Description |
| -------- | ---- | :-----: | ----------- |
| content | `string` | | the content which is the target of the popover; typically this not used because this control is used as a block component but if it is preferred to supply the target content as a variable this component can be used in a non-block fashion too |
| message | `string` | | the content to be put in the popover |
| title | `string` / `function()` | '' | the content to put in the title bar of the popover |

### Other Bootstrap Properties ###

| Variable | Type | Default | Description |
| -------- | ---- | :-----: | ----------- |
| animation | `boolean` | *true* | apply a CSS fade transition to the popover |
| delay | `number` / `object` | 0 | The delay to wait before displaying the popover. If a number is supplied, delay is applied to both hide/show. If object, you are given discrete control. See [BS documentation](file:///Users/Ken/Library/Application%20Support/Dash/DocSets/Bootstrap_3/Bootstrap%203.docset/Contents/Resources/Documents/getbootstrap.com/javascript/index.html#popovers). |
| html | `boolean` | *true* |  Insert HTML into the popover. If false, jQuery's `text` method will be used to insert content into the DOM. Use text if you're worried about XSS attacks. |
| placement | `string` / `function()` | *auto top* | How to position the popover. Static values are top, bottom, left, right, auto. `auto` can also be used as a modifier such as `auto left` where it will prefer left but will adjust if there is no space to the left. When a function is used to determine the placement, it is called with the popover DOM node as its first argument and the triggering element DOM node as its second. The *this* context is set to the popover instance.|
| triggerEvent | `string` | *click* | How popover is triggered - [click, hover, focus, manual]. You may pass multiple triggers; separate them with a space.
| viewport | `string` / `object` | `{selector: 'body', padding: 0}` | Keeps the popover within the bounds of this element. Example: viewport: '#viewport' or `{ "selector": "#viewport", "padding": 0 }`|

## Dependencies ##

This UI control depends on Twitter Bootstrap 3.x CSS and the `popover.js` and `tooltip.js` javascript is available. Installing this control **does not** install bootstrap for you ... we leave that in your very capable hands. If your hands aren't that capable then the basic idea is to:

1. Install Bootstrap with Bower (you'll need to choose the traditional repo or the SASS repo), in any case let's assume traditional for demonstration purposes:

	````shell
	bower install bootstrap --save
	````

1. Add assets in your `Brocfile`:

	````javascript
	app.import('bower_components/bootstrap/dist/css/bootstrap.css');
	app.import('bower_components/bootstrap/dist/js/bootstrap.js');
	````

Of course you might just decide to install a add-on that does all this nonsense reducing the documentation in this section to needless lip flapping.

## Installation

* change directories to your project folder
* type: `npm install ui-bs-popover --save-dev`

Assuming you have met the dependencies stated above you are now ready to start using the control in your project. Happy trails.

## Repo Contribution

We're open to your creative suggestions but please move past the "idea" stage and send us a PR so we can incorporate your ideas without killing ourselves. :)

## Licensing

This component is free to use under the MIT license:

Copyright (c) 2014 LifeGadget Ltd

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.