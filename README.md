# ReplacePlugin

## About
This is a webpack plugin, use this plugin to help you replace the contents of generated files. For example, dynamic replacement of version numbers, etc

## Usage
Configure the plugin in webpack.config.js. You need to provide an array parameter, each item of the array is also an array. Replace the first item with the second item in the array, like the replace function in JS, you can use regular.

#### webpack.config.js
```js
const ReplacePlugin = require('replace-plugin')

//...

plugins: [
	new ReplacePlugin({
		replaceArr: [['%version%', '1.0.0'], ['/Bob/g', 'Tim']]
	})
]
```
### git
https://github.com/myZhangDong/ReplacePlugin.git
