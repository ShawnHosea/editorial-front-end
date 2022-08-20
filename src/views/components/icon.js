module.exports = function Icon (state = {}) {
  let { classes, href } = state
  return `
<div class="${classes}">
  <svg>
    <use xlink:href="#${href}"></use>
  </svg>
</div>
  `
}
