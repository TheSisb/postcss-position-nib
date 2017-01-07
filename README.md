# PostCSS Position Nib [![Build Status][ci-img]][ci]

[PostCSS] plugin to shorthand position rules like [nib](https://tj.github.io/nib/) does.


[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/TheSisb/postcss-position-nib.svg
[ci]:      https://travis-ci.org/TheSisb/postcss-position-nib

## Input
```css
.shorthand {
	relative: 0;
	absolute: 0;
	fixed: 0;
}

.full {
	relative: top right bottom left;
	absolute: top right bottom left;
	fixed: top right bottom left;
}

.oneDirection {
	absolute: top;
}
.oneDirectionPush {
	absolute: top 10px;
}

.twoDirection {
	absolute: top right;
}
.twoDirectionPush {
	absolute: top -10px right -50px;
}

.threeDirection {
	fixed: bottom right top;
}
.threeDirectionPush {
	fixed: bottom 10px right 10px top 10px;
}
```


## Output 

```css
.shorthand {
	position: relative;
	position: absolute;
	position: fixed;
}

.full {
	position: relative;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}

.oneDirection {
	position: absolute;
	top: 0;
}
.oneDirectionPush {
	position: absolute;
	top: 10px;
}

.twoDirection {
	position: absolute;
	top: 0;
	right: 0;
}
.twoDirectionPush {
	position: absolute;
	top: -10px;
	right: -50px;
}

.threeDirection {
	position: fixed;
	bottom: 0;
	right: 0;
	top: 0;
}
.threeDirectionPush {
	position: fixed;
	bottom: 10px;
	right: 10px;
	top: 10px;
}
```

## Usage

```js
postcss([ require('postcss-position-nib') ])
```

See [PostCSS] docs for examples for your environment.
