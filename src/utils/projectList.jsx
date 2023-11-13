const projectArray = [
  {
    id: "1",
    title: "AstronoME",
    src: "/AstronoME.png",
    description: 'React Application built for stargazers. Provides information about current moon phase, weather, and incoming asteroids. and it contains a fully functional forum for stargazers to connect and share what they see.',
    link: "https://astronome-10022023-9058067b996b.herokuapp.com/",
    github: "https://github.com/cdgonzo23/astronoME",
    caseStudyLink: "Astronome",
    caseStudyAbout: "With a team of collaborators, we created a community for stargazers across the world to connect and discuss astrological events as well as anything else that relates to stargazing. This website allows users to create an account which requires the user to enter in their location. We use their location to utilize the weatherAPI to display their local weather to let them know if tonight is a good night for stargazing. The home page also displays the moon phase, asteroids that will be visible from earth, and NASA’s astronomy picture of the day. AstronoME was built using React.js, Tailwind CSS, MongoDB for the database, and this app was deployed using Heroku.",
    caseStudyMethods: "AstronoME follows the MVC paradigm, models are defined for user accounts, posts, and comments using Mongoose. Using JSON Web Token, we are able to securely utilize user data and display their location and weather on the home page. For further security, we used the bcrypt package to hash user passwords. This app was constructed using React and Tailwind CSS. The routing is managed by React-Router-Dom. To view the local weather and viewable asteroids  we utilized the OpenWeatherAPI and NASA’s NeoW’s API.",
    techUsed: [
      {
        techId: "11",
        name: "React.js",
      }, 
      {
        techId: "12",
        name: "Node.js",
      }, 
      {
        techId: "13",
        name: "GraphQL",
      }, 
      {
        techId: "14",
        name: "Express",
      }, 
      {
        techId: "15",
        name: "MongoDB",
      },
      {
        techId: "16",
        name: "Mongoose",
      }],
  },
  {
    id: "2",
    title: "Maintenance Manatee",
    src: "/Maintenance-Manatee.png",
    description: 'Interactive Full-Stack Web Application that stores users car data as well as maintenance done on their vehicles. Uses Node.js to create a RESTful API, Sequelize for the databse, and Handlebars.js for the template.',
    link: "https://maintenance-manatee-20230807-e071f072b462.herokuapp.com/",
    github: "https://github.com/cdgonzo23/maintenance-manatee",
    caseStudyLink: "MaintenanceManatee",
    caseStudyAbout: "The goal of this website was to simplify your vehicle maintenance management. It can be difficult to keep up with everything that you have done, and need to do to keep your vehicle up to date. With a team, we created the website Maintenance Manatee. This simple website allows users to create an account and add their vehicles to their vehicle list, and within each vehicle there is the functionality to add updates for that vehicle. It keeps all of your vehicle management in one place, you can keep up with how much everything costs, when the work was done, and what exactly was done. Maintenance Manatee was written and developed by four collaborators and utilizes JavaScript, Express.js, Handlebars.js, Tailwind CSS, and MySQL to store, manipulate, and display data. The app follows the MVC paradigm and is deployed using Heroku.",
    caseStudyMethods: "This application follows the MVC paradigm. With a team, we built out models that defined Users, Accounts, Vehicles, and Posts using Sequelize and connect-session-sequelize. This app has a simple yet functional display. It is easy to navigate and information is easily accessible. The Node.js package bcrypt is utilized to secure user passwords in the database. The views are created from Handlebars templates and Tailwind CSS which renders the data in a visually pleasing and effective way. Express router is utilized for rendering different pages as well as sending requests for data manipulation.",
    techUsed: [
      {
        techId: "21",
        name: "Handlebars",
      }, 
      {
        techId: "22",
        name: "bcrypt",
      }, 
      {
        techId: "23",
        name: "Express",
      }, 
      {
        techId: "24",
        name: "Sequelize",
      }, 
      {
        techId: "25",
        name: "MySQL",
      },
      {
        techId: "26",
        name: "Dotenv",
      }],
  },
  {
    id: "3",
    title: "Book Search Refactor",
    src: "/Book-Search.png",
    description: 'Code Refactor project. Utilize Apollo/Server and GraphQL instead of RESTful API',
    link: "https://fast-sands-23678-60b516d1c859.herokuapp.com/",
    github: "https://github.com/cdgonzo23/book-search-refactor",
    caseStudyLink: "BookSearchRefactor",
    caseStudyAbout: "This is a book search engine where a user can search for any book or series they desire to read. The user has to either login or sign-up to actually be able to save books. The main purpose of this project was to refactor the code from a RESTful API to use Apollo Server and GraphQL instead. This is an exercise in making an already functional web application even more performant. This web application is built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API.",
    caseStudyMethods: "This project I completed independently and was built off of existing code. I confirmed the web application worked correctly as a RESTful API using an Express.js server. I then started building out the models, mutations, queries, typedefs and resolvers. I had to change the authentication middleware to be used for a GraphQL API. Then I created an Apollo Provider so that the Apollo Server can be utilized. Finally, I deployed this application to Heroku.",
    techUsed: [
      {
        techId: "31",
        name: "React.js",
      }, 
      {
        techId: "33",
        name: "GraphQL",
      }, 
      {
        techId: "34",
        name: "MongoDB",
      }],
  },

  {
    id: "4",
    title: "PWA Text Editor",
    src: "/J-A-T-E.png",
    description: 'An installable text editor that saves code snippets with the correct color formatting. Works offline and online',
    link: "https://another-text-editor-040923-3c59dc8eb62b.herokuapp.com/",
    github: "https://github.com/cdgonzo23/pwa-text-editor",
    caseStudyLink: "PWATextEditor",
    caseStudyAbout: "This is Just Another Text Editor (JATE). The purpose of this app is to store code snippets whenever the occasion arises where a programmer needs to store or revisit a code snippet. Off or online the user can view or add to their text editor. Another fun addition to this text editor is it follows the color changing patterns that a code editor application would use. JATE uses a handful of different packages to get all this functionality. These packages include Babel, Workbox, CodeMirror, and IndexedDB.",
    caseStudyMethods: "The task is to turn a text editor into a Progressive Web Application. This requires a strong understanding of data persistence techniques and utilizing IndexedDB features. I set it up so that when a user opens up the application, IndexedDB is already working and there is a Workbox service worker registered. This app is deployed to Heroku.",
    techUsed: [
      {
        techId: "41",
        name: "Babel",
      }, 
      {
        techId: "42",
        name: "Webpack",
      }, 
      {
        techId: "43",
        name: "CodeMirror",
      }, 
      {
        techId: "44",
        name: "IndexedDB",
      }, 
      {
        techId: "45",
        name: "Workbox",
      }],
  },
  {
    id: "5",
    title: "Tech Blog",
    src: "/tech-blog.png",
    description: 'A CMS style blog created for developers to publish blog posts and comment on other users post. Uses Sequelize and Handlebars.',
    link: "https://mvc-tech-blog-20230802-f118edb4f2ae.herokuapp.com/",
    github: "https://github.com/cdgonzo23/tech-blog",
    caseStudyLink: "TechBlog",
    caseStudyAbout: "The purpose of this application is to provide a forum for developers to create posts and interact with posts about coding. This app gives the user the ability to create an account, create a post, edit a post, delete a post, and comment on a post. In order to view and interact with posting, the user needs to be logged in, meaning if they click any navigation links while logged out, they will be redirected to the login or signup page. In this application there is the homepage where you can see all posts that have been created by any user, there the user can click on a post and see the content, and add a comment. There is also the dashboard page which contains only the users posts, there they can update or delete one of their posts. This program utilizes mysql, express, sequelize, handlebars and dotenv.",
    caseStudyMethods: "This is one of the first applications I built using the MVC Paradigm. Independently, I created a CMS Style blog where developers can publish their blog posts and comment on other developers’ posts as well. My first step was to initialize the User, Post, and Comment models for the database and implement Express Router to build the connection for the database. Handlebars Templates were used for data rendering, using express-handlebars. I am using the bcrypt package in the user modal to secure user passwords.",
    techUsed: [
      {
        techId: "51",
        name: "Handlebars",
      }, 
      {
        techId: "52",
        name: "Express",
      }, 
      {
        techId: "53",
        name: "Sequelize",
      }, 
      {
        techId: "54",
        name: "MySQL",
      },
      {
        techId: "55",
        name: "Dotenv",
      }],
  },
  {
    id: "6",
    title: "Night-In Generator",
    src: "/night-in-generator.png",
    description: 'Interactive Front-End Application that generates a meal, drink, and movie combination for users to plan a nice night-in for themselves.',
    link: "https://cdgonzo23.github.io/night-in-generator/",
    github: "https://github.com/cdgonzo23/night-in-generator",
    caseStudyLink: "NightInGenerator",
    caseStudyAbout: "This application takes the decision making out of a night at home. Night-In Generator allows users to receive randomly generated options for a meal, a drink, and a movie. My partner and I wanted to create a solution for people who enjoy having a movie and meal at home, but who struggle to come up with ideas for what to make, what to drink, or what to watch. This clean, easy to use website not only suggests options for you, but it also renders other info you may need, such as a recipe, by utilizing open database APIs. Local storage is used to store the most recent search results to the home screen. This functionality, coupled with the option to choose specifically what category you want generated, gives users the ability to customize their results to fit their personal needs. This project was developed by one other engineer and myself using JavaScript, HTML, Bootstrap, and third-party API's.",
    caseStudyMethods: "Night-In Generator uses client side JavaScript for the majority of its functionality. The JavaScript is responsible for event listening, making fetch requests to third-party APIs, rendering HTML elements using the DOM, and storing relevant data to Local Storage. This project was a collaboration with one other contributor. It was helpful to work with someone to work out ideas and troubleshoot issues together, but we were not using Git branching so the process moved a little slower since there was only one person working at a time.",
    techUsed: [
      {
        techId: "61",
        name: "JavaScript",
      }, 
      {
        techId: "62",
        name: "Bootstrap",
      }, 
      {
        techId: "63",
        name: "HTML",
      }, 
      {
        techId: "64",
        name: "REST API's",
      }],
  },
  {
    id: "7",
    title: "Social Network API",
    mp4: "/social-network.mp4",
    description: 'Social Network API where users can post thoughts, connect with friends, and react to friends thoughts. Uses MongoDB and Mongoose ODM.',
    github: "https://github.com/cdgonzo23/social-network-api",
    caseStudyLink: "SocialNetworkAPI",
    caseStudyAbout: "The purpose of this social media application is for users to create an account, make friends, post thoughts, and post reactions to those thoughts. There is no seed data for this application, so the first step is to create a user. Creating a user requires a username and email and from there the user can update their information, or delete their account all together. The user can also post a thought, which is essentially a social media post. The user can then update or delete that thought. A user can also add a reaction which essentially acts like a comment on a social media post. A user can add a reaction to any post that's in the database. The user can also add and remove other users from their friend list. This program utilizes mongodb for the database and express routing.",
    caseStudyMethods: "This is purely an API, there is no user interface. The goal for this project was to build an API using MongoDB. I had to build out the middleware and connection in server.js file where the connection to MongoDB was made in a separate file which simply held the connection string. I then had to build out the schemas for the reactions, thoughts and users. Then I had to create the routes so there is functionality with this API. I became very familiar with MongoDB and how to retrieve, add, remove, and update using MongoDB.",
    techUsed: [
      {
        techId: "71",
        name: "Node.js",
      }, 
      {
        techId: "72",
        name: "Express",
      }, 
      {
        techId: "73",
        name: "MongoDB",
      }, 
      {
        techId: "74",
        name: "Mongoose",
      }],
  },
  {
    id: "8",
    title: "E-Commerce Back End",
    mp4: "/e-commerce.mp4",
    description: 'An E-Commerce back-end application using SQL to view, add, edit, and delete products, categories, and tags',
    github: "https://github.com/cdgonzo23/e-commerce-back-end",
    caseStudyLink: "ECommerceBackEnd",
    caseStudyAbout: "The purpose of this application is to access a retailer's inventory and update it if necessary. This app gives the user the ability to look at all tags, categories, and products. When looking at the tags you see the product_id and tag_id which connects the tag item to the associated product and category. The user will see the same thing when clicking on the GET products. This connects all of the items in inventory so that their price, stock, and category can be viewed. The user can also search for a product, tag, or category by ID for a more condensed search result. The user can slo create a new tag, product or category if new items are added to the inventory. There is also an update function so that if prices change or an item changes, they can update the inventory to reflect that. There is also the delete functionality so if the company decides not to stock an item anymore they can delete the product, tag, or category. This program utilizes mysql, inquirer, express, sequelize, and dotenv.",
    caseStudyMethods: "The goal of the E-Commerce Backend was to build off the starter code and create a fully functional Back End application. This process included defining data within the models and establishing how the models reference each other. This was configured to use Sequelize which required setting up a connection to a MySQL Database. I had to build the routes which used this connection to add, update, retrieve, and remove data. To test this application I became familiar with Insomnia, where I could set up the routes I built, and enter and receive data based on the calls I make within Insomnia.",
    techUsed: [
      {
        techId: "81",
        name: "Inquirer",
      },
      {
        techId: "82",
        name: "Express",
      }, 
      {
        techId: "83",
        name: "Sequelize",
      }, 
      {
        techId: "84",
        name: "MySQL",
      },
      {
        techId: "85",
        name: "Dotenv",
      }],
  },
];

export default projectArray;
