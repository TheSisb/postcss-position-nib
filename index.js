var postcss = require('postcss');

module.exports = postcss.plugin('postcss-position-nib', () => {
    const propertyMatch = /^(relative|absolute|fixed)$/;
    const valueMatch = /^(top|right|bottom|left)$/;

    function ruleHandler(decl) {
        // Add position rule
        decl.cloneBefore({ prop: 'position', value: decl.prop });

        const inputVals = decl.value.match(/\S+/g);
        const len = inputVals.length;

        // Loop through all value arguments
        for (let i = 0; i < len; i++) {
            // If not a top|right|bottom|left skip
            // i.e.: 10px
            if (!valueMatch.test(inputVals[i])) {
                continue;
            }

            const nextValue = inputVals[i + 1];

            // Check if the next value is out of scope or a positional direction
            // i + 2 because i starts 0-based and we want the next index
            // .:. i + 1 + 1
            if (i + 2 > len || nextValue && valueMatch.test(nextValue)) {
                decl.cloneBefore({ prop: inputVals[i], value: '0' });
            } else {
                decl.cloneBefore({ prop: inputVals[i], value: `${nextValue}` });
            }
        }

        decl.remove();
    }

    return function (css) {
        css.walkDecls(propertyMatch, ruleHandler);
    };
});
