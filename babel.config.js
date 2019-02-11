const presets = [
	[
		"@babel/env",
		{
			targets: {
				browsers: 'ie >= 9'
			}
		}
	]
]

const plugins = [
	["@babel/plugin-transform-modules-umd"]
]

module.exports = { presets, plugins, moduleId: 'Message' }
