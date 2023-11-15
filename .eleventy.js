module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./build/dest/css/');
	eleventyConfig.addPassthroughCopy('./build/dest/javascript/');
	eleventyConfig.addPassthroughCopy('./build/assets/');

	return {
		dir: {
			input: 'build',
			output: 'public',
		},
	};
};
