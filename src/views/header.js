const Logo = require('./components/logo.js')

module.exports = function header(props = {}) {
  
  let loggedIn = props.auth 
    let isloggedIn = `
    <div
    class="
    h-full
    z1
    absolute
    "
    >
      <header
      class="
        z1
        sticky
        relative-lg
        flex
        items-center
        justify-between
        top0
      " 
    >
    <div class="flex items-center justify-between w-full pr1 pl1">
      <a
        aria-label="Noticate"
        href="/"
        class="
          mr4
          items-center
          cursor-pointer
          text-p1
          text-h5
          no-underline
          font-bold
        "
      >
      ${Logo({ classes: 'logo' })}
      </a>
      </div>
      </header>
    </div>
        `

        if (!loggedIn) {
          return isloggedIn 
      } else {
          return isloggedIn
      }
  

}

    