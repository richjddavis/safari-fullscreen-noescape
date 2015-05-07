# Full Screen NoEscape for Safari

A small Safari extension to disable the default behaviour of Safari exiting OS X Full Screen Mode when the Escape key is pressed.

## Download

Go to [the latest release](https://github.com/richjddavis/safari-fullscreen-noescape/releases/latest) and download the `safari-fullscreen-noescape.safariextz` file.

## Installation
Double-click `safari-fullscreen-noescape.safariextz` to install.

## Notes & Caveats
By nature, this extension requires access to "all web sites", including secure ones. Because it only monitors for the Escape key to prevent default behaviour, there is no security or privacy concern with this. You can also inspect the source code yourself!

Due to the way in which this extension works (injected JavaScript before a site is loading), there are a few notable situations in which it will not function correctly:

* On the New Tab page (extensions such as this are not loaded)
* If you are using Safari's Development Tools, and keyboard focus is on that frame
* Any other edge cases where JavaScript extensions are not available

It's also possible (however unlikely) that this could interfere with websites that have their own special behaviour when the Escape key is pressed.

## Build

After `git clone`ing, add `safari-fullscreen-noescape.safariextension` to Safari's Extension Builder (`Develop → Show Extension Builder`). You will first need to enable `Show Develop menu in menu bar` in Safari's Advanced preferences.

## Licence

Copyright (c) 2015 Rich Davis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
