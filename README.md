# Redux Demo with Style

### Sum Types & CSS Animations

Repo for experimenting with:

* Bulma CSS
* CSS animations
* daggy-based sum types as Redux state tree nodes

## Special Features

### Webpack

* using `alias` to make `import` paths simpler
* using `sass-loader` to allow import & preprocessing of `scss` files

### File Structure

* "fractal" / domain-centric organization emphasizes putting related code for a feature in close proximity. See `cats` folder with cats React component, styles, reducer, etc.

### CSS Animations

* Going beyond transitions, CSS keyframe animations allow for multi-step changes.
* See `cats.style.scss` and `style.scss` for examples.
* Enable simulated server problems in `fakeAxios` to see error warning shake anim.

### ES2015+

* `async` functions for thunks
* property destructuring
* param destructuring
* param defaults
* arrows
* etc.

### React

* Uses `classNames` library for easy multiple class name activation

### React-Redux

* Object syntax shorthand for `mapDispatchToProps` with action creators

### Redux / daggy sum types

* Using `combineReducers` (see `store`)
* Using `daggy` library to create sum type representing nodes (see `src/redux/leaf`)
* Using type checking on daggy objects (see `dogs` react component, `leaf.loaded.is` etc.)
* Using catamorphisms for matching on node type (see `cats` / `dogs` react components)
