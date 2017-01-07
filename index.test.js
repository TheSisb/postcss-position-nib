var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('Handles shorthand', () => {
    return run(
    	'.shorthand {relative: 0; absolute: 0;}',
    	'.shorthand {position: relative; position: absolute;}',
    	{}
	);
});

it('Handles full sizing', () => {
    return run(
    	'.full {absolute: top right bottom left;}',
    	'.full {position: absolute;top: 0;right: 0;bottom: 0;left: 0;}',
    	{}
	);
});

it('Handles one direction', () => {
    return run(
    	'.onedir {absolute: top;}',
    	'.onedir {position: absolute;top: 0;}',
    	{}
	);
});

it('Handles one direction with push', () => {
    return run(
    	'.onedir {absolute: top 10px;}',
    	'.onedir {position: absolute;top: 10px;}',
    	{}
	);
});

it('Handles three directions', () => {
    return run(
    	'.threedir {fixed: bottom right top;}',
    	'.threedir {position: fixed;bottom: 0;right: 0;top: 0;}',
    	{}
	);
});

it('Handles three directions with push', () => {
    return run(
    	'.threedir {fixed: bottom -50px right 999rem top 12em;}',
    	'.threedir {position: fixed;bottom: -50px;right: 999rem;top: 12em;}',
    	{}
	);
});
