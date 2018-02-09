module.exports = {
	setupTestFrameworkScriptFile: '<rootDir>jestSetup.js',
	transform: {
		'^.+\\.(js)$': 'babel-jest'
	},
	collectCoverageFrom: ['src/**/*.js']
};
