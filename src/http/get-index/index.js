const arc = require('@architect/functions')
const Layout = require('@architect/views/layout.js')

exports.handler = arc.http.async(index)

async function index(req) {

  

  let body = Layout({  
    content: `
    <div class="background relative" style="background-image: url(${arc.static('img2.jpeg')});">
      <div class="hero absolute" >
      </div>
      <div class="wrapper scroll font-bower-heading text1-lg text0 text-center absolute z1 p5 flex flex-col h-full justify-between">
      <div></div>
        <div>
          <h2 class="scroll" data-rate="-.7" data-direction="vertical">This time it's personal:</h2>
          <h1 class="scroll" data-rate="-.5" data-direction="vertical">Shaping the "new possible" through employee experience</h1>
        </div>
        <img class="mouse" src="${arc.static('scroll.gif')}">
      </div>
    </div>
    <div class="editorial container-lg mt5 mb5 pt5 pb5 pr-none-lg pl-none-lg pr1 pl1">
      <p class="caption flex text-p5 text1-lg text0"><em>In an era of workplace upheaval, companies that create tailored, authentic experiences strengthen employee purpose, ignite energy, and elevate organization-wide performance.</em>
      </p>
    </div>
    <div class="background2 relative pt2 pb2" style="background-image: url(${arc.static('img5.jpeg')});">
      <div class="editorial container-lg mt5 mb5 pt5 pb5 pr1 pl1">
      <h3>Listen to this article:</h3>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1135768264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/mckinsey" title="McKinsey &amp; Company" target="_blank" style="color: #cccccc; text-decoration: none;">McKinsey &amp; Company</a> · <a href="https://soundcloud.com/mckinsey/listen-to-the-article-this-time-its-personal-shaping-the-new-possible-through-employee" title="Listen to the article: This time it's personal: Shaping the "new possible" through employee" target="_blank" style="color: #cccccc; text-decoration: none;">Listen to the article: This time it's personal: Shaping the "new possible" through employee</a></div>
      </div>
    </div>
    <div class="editorial container-lg text0 container-lg mt5 mb5 pt5 pb5 pr-none-lg pl-none-lg pr1 pl1">
      <p><strong class="text-p5"><span class="dropcap">A</span>s anyone who has led</strong> an organization since 2020 knows, assumptions about the nature of work and how it is organized have gone out the window. Employees have shared this sense of disruption: McKinsey research shows that while most people have felt supported by their organizations throughout the COVID-19 pandemic, many have struggled. And while some companies are exploring hybrid working models, many are expecting a full return to the office, setting employee concerns and employer expectations further apart.
      </p>
      <p>How do leaders satisfy all parties in trying to remake the mission? In our view, they have a unique opportunity to listen to their employees and engage them on what matters—now and into the future. Since the pandemic began, McKinsey has surveyed almost 1,000 individuals to assess their views on work and how it has changed. While each respondent's experience is personal and specific to them, common threads have emerged about their career paths.
      </p>
      <p>Workers are hungry for trust, social cohesion, and purpose. They want to feel that their contributions are recognized and that their team is truly collaborative. They desire clear responsibilities and opportunities to learn and grow. They expect their personal sense of purpose to align with that of their organization. And they want an appropriate physical and digital environment that gives them the flexibility to achieve that elusive work–life balance.
      </p>
      <p>Companies are facing an exodus of employees who are exhausted and overwhelmed, questioning what work means, and thinking through their options. Organizations can offer an excellent employee experience (EX) by taking these needs and feelings seriously at such a crucial time.
      </p>
      <p>Providing top-notch EX is not just lip service; it requires a profound reorientation away from a traditional top-down model to one based on the fundamentals of design thinking. This shift allows a company to put its workers first by exploring and responding to how they view their employee journeys, then delivering tailored interventions that focus on critical moments that matter to maximize satisfaction, performance, and productivity. In doing so, companies can become more inspiring, collaborative, and centered on creating an experience that is meaningful and enjoyable.
      </p>
      <p>Research shows that people who report having a positive employee experience have 16 times the engagement level of employees with a negative experience, and that they are eight times more likely to want to stay at a company.1 In this article, we look at how companies can focus on employee experience to help retain and excite the best people, creating value and maintaining a competitive edge as they do so.
      </p>
      <h2 class="font-bower-heading text2 text-p5">How employee experience can shape the "new possible"</h2>
      <p>A recent McKinsey Global Institute report notes that the future of work will bring more remote work, an acceleration of e-commerce and digital payments, and the continuing rollout of automation and artificial intelligence (AI). There will be major workforce transitions for millions across the globe, many of whom face a widening skills gap and other challenges. And because more and more roles are becoming disaggregated and fluid, work will increasingly be defined in terms of skills.
      </p>
      <p>At the same time, the pandemic has opened the door wider to a range of workplace changes we call the “new possible.”2 Taking the place of a traditional workplace hierarchy is a model that is more flexible and responsive, built on higher levels of connection. In this approach, organizations work together with their people to create personalized, authentic, and motivating experiences that strengthen individual, team, and company performance.
      </p>
      <p>Employee experience takes into account what people value in the broadest sense, acknowledging how life stage, personal circumstances, and even personality type make different propositions attractive for different people (Exhibit 1). Contrary to conventional wisdom, the most motivating answer is rarely just to be paid more. Rather, employees want to feel a powerful sense of agency—being able to influence outcomes that matter to them—allied with a strong sense of identity and belonging. That means agency in work and agency about work.
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