const arc = require('@architect/functions')
const Layout = require('@architect/views/layout.js')

exports.handler = arc.http.async(index)

async function index(req) {


  let body = Layout({  
    content: `
    <div class="">
      <h1>Hello</h1>
    </div>
  `})

return {
  statusCode: 200,
  headers: {
    'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
    'content-type': 'text/html; charset=utf8'
  },
  body,
  }
}