
class ReplacePlugin {
	constructor(options) {
	    this.options = options;
	    this._replaceArr = options.replaceArr || []
	}
  	apply(compiler) {
	    compiler.hooks.emit.tapAsync(
		  	'ReplacePlugin',
		  	(compilation, callback) => {
		  		emitCallback(compilation, this._replaceArr)
			    callback();
		  	}
		);
  	}
}

function emitCallback(compilation, replaceArr){
	const assetFileNames = Object.keys(compilation.assets)
	assetFileNames.forEach((fileName) => {
		let source
		if(compilation.assets[fileName]._children){
			compilation.assets[fileName]._children.forEach((rowSource, index) => {
				source = rowSource._value
				if( source ){
					const replacedSource = replace(source, replaceArr)
					compilation.assets[fileName]._children[index]._value = replacedSource
				}
			})
		} else {
			source = compilation.assets[fileName]._value
			if( source ){
				const replacedSource = replace(source, replaceArr)
				compilation.assets[fileName]._value = replacedSource
			}
		}
    })
}

function replace(source, replaceArr){
	replaceArr.forEach((replaceItem) => {
		source = source.replace(replaceItem[0], replaceItem[1])
	})
	return source
}

module.exports = ReplacePlugin;
