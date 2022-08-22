const arc = require('@architect/functions')
const Layout = require('@architect/views/layout.js')

exports.handler = arc.http.async(index)

async function index(req) {

  

  let body = Layout({  
    content: `
    <div class="background relative" style="background-image: url(${arc.static('img2.jpeg')});">
      <div class="hero absolute" >
      </div>
      <div class="wrapper font-bower-heading text1-lg text0 text-center absolute z1 p5 flex flex-col h-full justify-between">
      <div></div>
        <div>
          <h2 class="">This time it's personal:</h2>
          <h1 class="">Shaping the "new possible" through employee experience</h1>
        </div>
        <img class="mouse" src="${arc.static('scroll.gif')}">
      </div>
    </div>
    <div class="editorial container-lg mt5 mb5 pt5 pb5 pr-none-lg pl-none-lg pr1 pl1">
      <p class="caption flex text-p5 text1-lg text0"><em>In an era of workplace upheaval, companies that create tailored, authentic experiences strengthen employee purpose, ignite energy, and elevate organization-wide performance.</em>
      </p>
    </div>
    <div class="background2 relative" style="background-image: url(${arc.static('img5.jpeg')});">
      <div class="editorial container-lg mt5 mb5 pt5 pb5 pr1 pl1">
      <h3>Listen to this article:</h3>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1135768264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/mckinsey" title="McKinsey &amp; Company" target="_blank" style="color: #cccccc; text-decoration: none;">McKinsey &amp; Company</a> · <a href="https://soundcloud.com/mckinsey/listen-to-the-article-this-time-its-personal-shaping-the-new-possible-through-employee" title="Listen to the article: This time it’s personal: Shaping the ‘new possible’ through employee" target="_blank" style="color: #cccccc; text-decoration: none;">Listen to the article: This time it’s personal: Shaping the ‘new possible’ through employee</a></div>
      </div>
    </div>
    <div class="editorial container-lg text0 container-lg mt5 mb5 pt5 pb5 pr-none-lg pl-none-lg pr1 pl1">
      <p><strong><span class="dropcap">A</span>s anyone who has led</strong> an organization since 2020 knows, assumptions about the nature of work and how it is organized have gone out the window. Employees have shared this sense of disruption: McKinsey research shows that while most people have felt supported by their organizations throughout the COVID-19 pandemic, many have struggled. And while some companies are exploring hybrid working models, many are expecting a full return to the office, setting employee concerns and employer expectations further apart.
      </p>
      <p>How do leaders satisfy all parties in trying to remake the mission? In our view, they have a unique opportunity to listen to their employees and engage them on what matters—now and into the future. Since the pandemic began, McKinsey has surveyed almost 1,000 individuals to assess their views on work and how it has changed. While each respondent’s experience is personal and specific to them, common threads have emerged about their career paths.
      </p>
      <p>Workers are hungry for trust, social cohesion, and purpose. They want to feel that their contributions are recognized and that their team is truly collaborative. They desire clear responsibilities and opportunities to learn and grow. They expect their personal sense of purpose to align with that of their organization. And they want an appropriate physical and digital environment that gives them the flexibility to achieve that elusive work–life balance.
      </p>
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