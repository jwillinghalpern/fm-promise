# fm-gofer

A framework for calling FileMaker scripts from JavaScript in web viewers and getting a response back via callbacks. Gofer... as in gofer this, gofer that.

## Gofer it

Check out `./example/FMGofer.fmp12`. You can find the html code in `./example/example.html. This example demostrates the callback, resolve, reject, and timeout capabilities of the library.

## Usage

1. Reference ./dist/main-umd.js in an html script tag or copy into your inline javascript in your webviewer html:

    ```html
    <script> THE UMD JS CODE HERE </script>
    ```

2. Create an instance of FMGofer in your code and attach the `runCallback` method to the window so FileMaker can call it using `Perform JavaScript in WebViewer`:

    ```javascript
    var fm = new FMGofer();
    window.fmRunCallback = function() {
      return fm.runCallback(...arguments);
    }
    ```

3. Run FileMaker scripts from the JS like this:

    ```javascript
    fm.performScript('Your FM Script', param, timeout, timeoutMessage);
    ```

4. To send data back to JS, extract the callbackID from the fm script param, and use it to call the correct JS callback. Remember to tell JS whether to "resolve" or "reject":

    ```filemaker
    Perform JavaScript in WebViewer [ "fmRunCallback" ( $callbackID ; "resolve" ; $dataToReturn )]
    ```

## Build

to build run `npm run build`

## Contribute

This code is young. If you see anything that should be improved please feel free to send pull requests or create issues.
