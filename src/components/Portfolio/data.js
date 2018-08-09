import assets from '@assets/**/*.jpg'

const {
  ffrees,
  longworth,
  lafiesta,
  mybet,
  plusnet,
  riggott,
  tipsterBackoffice,
  tipsterDisplay,
  uktax,
  tipsterVideo,
  tipsterTranslation,
  tipsterPredictor
} = assets

console.log('test', assets)

const data = [
  [
    {
      title: 'Ffrees',
      cover: ffrees.index,
      images: [ffrees['1'], ffrees['2'], ffrees['3'], ffrees['4']],
      website: 'https://www.uaccount.uk/',
      role: 'Front end development team',
      tech: 'HTML, CSS, jQuery, Laravel',
      bio:
        '<p>At Ffrees i was part of the front end development team. Our main project was the front end build of a online banking system.</p> <p>This involved creating HTML pages with AJAX JSON API responses, with a lot of javascript to create a interactive experience. The backend was build in Phalcon PHP and we used a Restful API methodology.</p><p>I was working with the lead designer but had a lot of creative freedom in the designing and development of the pages. The team worked in a Agile environment with bi weekly sprints.</p>'
    },
    {
      title: 'La Fiesta',
      cover: lafiesta.index,
      images: [lafiesta['1'], lafiesta['2'], lafiesta['3'], lafiesta['4']],
      website: 'https://www.lafiestadoncaster.uk/',
      role: 'Designer + developer',
      tech: 'HTML, CSS, JS, Wordpress',
      bio:
        '<p>La Fiesta was a freelance commission website for a restaurant. I designed and built this website with a graphic designer providing the logo and images.</p><p>The site was build in Wordpress from a blank template and is fully integrated with a menu system allowing the restaurants menus to be integrated so they can be visually seen by the customer as well as downloaded.</p><p>A custom booking form and contact form was also build into this allowing email bookings and contact.</p>'
    },
    {
      title: 'Longworth',
      cover: longworth.index,
      images: [longworth['1'], longworth['2'], longworth['3'], longworth['4']],
      website: 'http://www.longworth-uk.com/',
      role: 'Sole Developer',
      tech: 'HTML, CSS, JS, Wordpress',
      bio:
        '<p>Working for the Black Eye Project, one of my projects was the Longworth site. Having the design done by the lead designer it was my role to turn this into a full responsive WordPress build.</p><p>One of the challenges here was to create all the mobile screens while only the desktop designs were provided, as well as integrating all the animations to give the site a fluid and smooth feel.</p><p>The WordPress build also involved ensuring every item within it was editable by the admins, including all the menus, images, text and pages.</p>'
    },
    {
      title: 'Mybet',
      cover: mybet.index,
      images: [mybet['1'], mybet['2'], mybet['3'], mybet['4']],
      website: 'https://www.mybet.com/',
      role: 'Front end development team',
      tech: 'React, Mobx, Webpack, HTML, SCSS, JS',
      bio:
        '<p>During my time at Korelogic, Mybet was one of the clients we worked for. Mybet is a large sports book serving the European market.</p><p>My role with in this project was largely bug fixing, but also responsible for integrating some new features, widgets and editing the CMS.</p><p>The tech stack was react front end with mobx state management. The APIs and data was provided by a 3rd party company and we used a websocket connection to keep all the stats accurate.</p>'
    }
  ],
  [
    {
      title: 'Plusnet',
      cover: plusnet.index,
      images: [plusnet['1'], plusnet['2'], plusnet['3'], plusnet['4']],
      website: 'https://www.plus.net/',
      role: 'Front end development team',
      tech: 'HTML, CSS, JS',
      bio:
        '<p>Plusnet was my first commercial developer role, i was in a team of 10 people working on the front end development team, working under a senior designer and support from the senior developers.</p><p>The main tasks here were to bug fix, build new pages and preform updates when needed. I also worked closely with the marketing department to provide google analytics reports and preform A/B tests to help improve the sales.</p>'
    },
    {
      title: 'Riggotts',
      cover: riggott.index,
      images: [riggott['1'], riggott['2'], riggott['3'], riggott['4']],
      website: 'http://www.riggott.co.uk/',
      role: 'Sole developer',
      tech: 'HTML, CSS, JS, Wordpress',
      bio:
        '<p>Working for the Black Eye Project, one of my projects was the Riggotts site. Having the design done by the lead designer it was my role to turn this into a full responsive WordPress build.</p><p>One of the challenges here was to create all the mobile screens whiles only the desktop designs were provided, as well as integrating all the animations to give the site a fluid and smooth feel.</p><p>The WordPress build also involved ensuring every item within it was editable by the admin, including all the menus, images, text and pages.</p>'
    },
    {
      title: 'Tipster Backoffice',
      cover: tipsterBackoffice.index,
      images: [
        tipsterBackoffice['1'],
        tipsterBackoffice['2'],
        tipsterBackoffice['3'],
        tipsterBackoffice['4']
      ],
      website: '',
      role: 'Lead Developer + project coordination',
      tech: 'React, Mobx, Rethink, Express, Webpack',
      bio:
        '<p>This project for Racing Post is the CMS for the Tipster display screens. I was lead developer on this product and responsible for nearly all the dev work including APIs, database structure, front end and data fetching scripts.</p><p>Here its possible to configure the displays and authenticate the hardware the displays are accessed on. This product has multiple REST apis that were created to manage the database and front end data.</p><p>Real time websocket connection status as well as bandwidth tracking are integrated so its possible to keep track of the users and info about them.</p>'
    },
    {
      title: 'Tipster Client',
      cover: tipsterDisplay.index,
      images: [
        tipsterDisplay['1'],
        tipsterDisplay['2'],
        tipsterDisplay['3'],
        tipsterDisplay['4']
      ],
      website: '',
      role: 'Lead Developer + project corodination',
      tech: 'React, Mobx, Horzion, Webpack, HTML, SCSS, JS',
      bio:
        '<p> Tipster was a project were i was the sole developer, while working on this projet for RacingPost, i planned the architecture, implementation and build of this project.</p><p>This product is a display that runs on screens in betting shops offering betting tips and odds for the days events. It cycles thought the different events for multiple sports including horse racing, greyhound racing and football.</p><p>The data was provided by Racing Posts APIs which then was normalised and stored in our database with a websocket connection so the stats and info are allays live. Each of these screens could be configured with different branding, different data sources and content.</p><p>One of the big challenges were ensuring the product still worked if the internet dropped out would always provide live or the most accurate data.</p><p>Another challenge was to ensure it worked on IE10, which with the modern technology stack we are using was difficult.</p><p>The various betting tips and info is all sorted by its strength and if the content was a active participant in the sporting event.</p><p>The tipster was also under a authentication page, meaning it can only be accessed by computers that had been authorised or IP white listed.</p>'
    }
  ],
  [
    {
      title: 'Uk Tax',
      cover: uktax.index,
      images: [uktax['1'], uktax['2'], uktax['3'], uktax['4']],
      website: 'http://www.simple-uk-tax.co.uk/',
      role: 'Sole Developer',
      tech: 'React, Redux, Webpack, HTML, SCSS, JS',
      bio:
        '<p>Tax calc was a simple build using React and Redux as the main technologies. The main challenge here was to ensure all the rules involving the uk tax laws were being applied correctly at the different threshold.</p><p>Built in React with Redux for state management, meaning the render and calculations are super fast allowing for a smooth UI and easy management of data internally.</p>'
    },
    {
      title: 'Tipster Video',
      cover: tipsterVideo.index,
      images: [tipsterVideo['1'], tipsterVideo['2'], tipsterVideo['3']],
      website: '',
      role: 'Lead Developer',
      tech: 'React, Mobx, Canvas, Ffmpeg, Webpack, HTML, SCSS, JS, S3, AWS',
      bio:
        '<p>Tipster video was a project that turns code into video. The first task was to a create a canvas based animation and then convert this canvas object into a webm video. </p><p>This process was automated generating 40 videos a day and syncing Amazon polly auto to give the impression of a speaking character. The video were then transcoded to the correct format and displayed in a CMS for customers to consume.</p>'
    },
    {
      title: 'Tipster Translations',
      cover: tipsterTranslation.index,
      images: [
        tipsterTranslation['1'],
        tipsterTranslation['2'],
        tipsterTranslation['3'],
        tipsterTranslation['4']
      ],
      website: '',
      role: 'Lead Developer',
      tech: 'React, Mobx, Webpack, HTML, SCSS, JS',
      bio:
        '<p>Tipsters translations is a translations product supplying translations via a Express API. It has a full CMS interface allowing easy input of different languages.</p><p>Product was also adapted to fit a dialogues translations system allowing a question and answer set of information.</p>'
    },
    {
      title: 'Tipster Predictor',
      cover: tipsterPredictor.index,
      images: [tipsterPredictor['1'], tipsterPredictor['2']],
      website: '',
      role: 'Lead Developer',
      tech: 'React, Mobx, Webpack, HTML, SCSS, JS',
      bio:
        '<p>Tipster predictor is a animated display looping over the 40+ races for the day and display horses correctly weighted by winner.</p><p>This can be customized by providing multiple URL flags which will filter races, change logos and more.</p><p>This product is regularly shown at the Royal Ascott in view of 100k+ customers. </p>'
    }
  ]
]

export default data
