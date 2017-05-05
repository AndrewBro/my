var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var my = express();
var db;

my.use(bodyParser.json());
my.use(bodyParser.urlencoded({extended: true}));


var movies = [
  {
    Title: "GOING IN STYLE",
    Poster: "going_in_style.jpg",
    About: "Acclaimed filmmaker Guy Ritchie brings his dynamic style to the epic fantasy action adventure 'King Arthur: Legend of the Sword.' Starring Charlie Hunnam in the title role, the film is an iconoclastic take on the classic Excalibur myth, tracing Arthur's journey from the streets to the throne. When the child Arthur's father is murdered, Vortigern (Jude Law), Arthur's uncle, seizes the crown. Robbed of his birthright and with no idea who he truly is, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword from the stone, his life is turned upside down and he is forced to acknowledge his true legacy...whether he likes it or not.",
    Genre: "Comedy",
    Directed: "Zach Braff",
    Written: "Ted Melfi",
    Theaters: "Apr 7, 2017  Wide",
    BoxOffice: "$37,346,914.00",
    Runtime: "97 minutes",
    Studio: "Warner Bros. Pictures"
  },
  {
    Title: "KING ARTHUR: LEGEND OF THE SWORD",
    Poster: "king_arthur.jpg",
    About: "Acclaimed filmmaker Guy Ritchie brings his dynamic style to the epic fantasy action adventure 'King Arthur: Legend of the Sword.' Starring Charlie Hunnam in the title role, the film is an iconoclastic take on the classic Excalibur myth, tracing Arthur's journey from the streets to the throne. When the child Arthur's father is murdered, Vortigern (Jude Law), Arthur's uncle, seizes the crown. Robbed of his birthright and with no idea who he truly is, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword from the stone, his life is turned upside down and he is forced to acknowledge his true legacy...whether he likes it or not.",
    Genre: "Action & Adventure, Drama",
    Directed: "Guy Ritchie",
    Written: "Joby Harold, Guy Ritchie, Lionel Wigram",
    Theaters: "May 12, 2017  Wide",
    BoxOffice: "$47,734,654.00",
    Runtime: "132 minutes",
    Studio: "Warner Bros. Pictures"
  },
  {
    Title: "THE CIRCLE",
    Poster: "the_circle.jpg",
    About: "The Circle is a gripping modern thriller starring Emma Watson ('Harry Potter'), Tom Hanks ('Sully') and John Boyega ('Star Wars: The Force Awakens'). When Mae (Emma Watson) is hired to work for the world's largest and most powerful tech & social media company, she sees it as an opportunity of a lifetime. As she rises through the ranks, she is encouraged by the company's founder, Eamon Bailey (Tom Hanks), to engage in a groundbreaking experiment that pushes the boundaries of privacy, ethics and ultimately her personal freedom. Her participation in the experiment, and every decision she makes begin to affect the lives and future of her friends, family and that of humanity.",
    Genre: "Drama, Mystery & Suspense",
    Directed: "James Ponsoldt",
    Written: "James Ponsoldt, Dave Eggers",
    Theaters: "Apr 28, 2017  Wide",
    BoxOffice: "$9,034,148.00",
    Runtime: "121 minutes",
    Studio: "Studio:	EuropaCorp / STXfilms"
  },
  {
    Title: "THE LOST CITY OF Z",
    Poster: "the_lost_city.jpg",
    About: "Based on author David Granns nonfiction bestseller, 'The Lost City of Z' tells the incredible true story of British explorer Percy Fawcett (Charlie Hunnam), who journeys into the Amazon at the dawn of the 20th century and discovers evidence of a previously unknown, advanced civilization that may have once inhabited the region. Despite being ridiculed by the scientific establishment who regard indigenous populations as 'savages,' the determined Fawcett - supported by his devoted wife (Sienna Miller), son (Tom Holland) and aide-de-camp (Robert Pattinson) - returns time and again to his beloved jungle in an attempt to prove his case, culminating in his mysterious disappearance in 1925. An epically scaled tale of courage and passion, told in writer/director James Gray's classic filmmaking style, 'The Lost City of Z' is a stirring tribute to the exploratory spirit and a conflicted adventurer driven to the verge of obsession.",
    Genre: "Action & Adventure, Drama",
    Directed: "James Gray",
    Written: "James Gray",
    Theaters: "Apr 21, 2017  Wide",
    oxOffice: "$4,931,308.00",
    Runtime: "140 minutes",
    Studio: "Amazon Studios/Bleecker Street Media"
  },
  {
    Title: "THE PATRIOTS DAY BOMBING",
    Poster: "the_patriots_day.jpg",
    About: "The 2013 Boston Marathon terrorist attacks are recalled in this in-depth documentary through interviews with survivors and their families, as well as first responders, investigators, government officials and reporters from the Boston Globe. The film also uses surveillance video and home movies to recount the tragic events.",
    Genre: "Documentary",
    Directed: "Ricki Stern, Anne Sundberg",
    Written: "Ricki Stern, Anne Sundberg",
    Theaters: "Nov 21, 2016",
    BoxOffice: "$4,931,308.00",
    Runtime: "120 minutes",
    Studio: "HBO Documentary Films"
  },
  {
    Title: "THE SPACE BETWEEN US",
    Poster: "the_space_between_us.jpg",
    About: "In this interplanetary adventure, shortly after arriving to help colonize Mars, an astronaut dies while giving birth to the first human born on the red planet - never revealing who the father is. Thus begins the extraordinary life of Gardner Elliot - an inquisitive, highly intelligent boy who reaches the age of 16 having only met 14 people in his very unconventional upbringing. While searching for clues about his father, and the home planet he's never known, Gardner begins an online friendship with a street smart girl named Tulsa. When he finally gets a chance to go to Earth, Gardner is eager to experience all of the wonders he could only read about on Mars. But after his explorations begin, scientists discover that Gardner's organs can't withstand Earth's atmosphere. Gardner joins with Tulsa on a race against time to unravel the mysteries of how he came to be, and where he belongs in the universe.",
    Genre: "Action & Adventure, Science Fiction & Fantasy",
    Directed: "Peter Chelsom",
    Written: "Allan Loeb, Peter Chelsom, Tinker Lindsay",
    Theaters: "Feb 3, 2017  Wide",
    BoxOffice: "$7,829,766.00",
    Runtime: "120 minutes",
    Studio: "STX Entertainment"
  },
  {
    Title: "UNCANNY",
    Poster: "uncanny.jpg",
    About: "A reclusive inventor, his android creation, and a curious reporter are drawn together in a dark triangle in this psychological sci-fi drama.",
    Genre: "Drama, Science Fiction & Fantasy",
    Directed: "Matthew Leutwyler",
    Written: "Shahin Chandrasoma",
    Theaters: "Nov 3, 2015  Limited",
    BoxOffice: "$17,837,346.00",
    Runtime: "91 minutes",
    Studio: "Accelerated Manner"
  }
];
my.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

my.get('/', function (req, res) {
  res.send('Hello API !');
});

my.get('/movies/:_id', function (req, res) {
  db.collection('movies')
    .findOne({_id: req.params.id})
    .then(function (documents) {
        console.log(documents);
        res.send(documents);
      }
    );
});

my.get('/movies', function (req, res) {
  db.collection('movies')
    .find({Title: {'$regex' : new RegExp(req.query.t ), "$options": "i"}})
    .toArray(function (err, documents) {
        if (err) throw err;
        res.send(documents);
      }
    );
});

my.post('/movies', function (req, res) {
  var movie = [
    {
      Title: "GOING IN STYLE",
      Poster: "going_in_style.jpg",
      About: "Acclaimed filmmaker Guy Ritchie brings his dynamic style to the epic fantasy action adventure 'King Arthur: Legend of the Sword.' Starring Charlie Hunnam in the title role, the film is an iconoclastic take on the classic Excalibur myth, tracing Arthur's journey from the streets to the throne. When the child Arthur's father is murdered, Vortigern (Jude Law), Arthur's uncle, seizes the crown. Robbed of his birthright and with no idea who he truly is, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword from the stone, his life is turned upside down and he is forced to acknowledge his true legacy...whether he likes it or not.",
      Genre: "Comedy",
      Directed: "Zach Braff",
      Written: "Ted Melfi",
      Theaters: "Apr 7, 2017  Wide",
      BoxOffice: "$37,346,914.00",
      Runtime: "97 minutes",
      Studio: "Warner Bros. Pictures"
    },
    {
      Title: "KING ARTHUR: LEGEND OF THE SWORD",
      Poster: "king_arthur.jpg",
      About: "Acclaimed filmmaker Guy Ritchie brings his dynamic style to the epic fantasy action adventure 'King Arthur: Legend of the Sword.' Starring Charlie Hunnam in the title role, the film is an iconoclastic take on the classic Excalibur myth, tracing Arthur's journey from the streets to the throne. When the child Arthur's father is murdered, Vortigern (Jude Law), Arthur's uncle, seizes the crown. Robbed of his birthright and with no idea who he truly is, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword from the stone, his life is turned upside down and he is forced to acknowledge his true legacy...whether he likes it or not.",
      Genre: "Action & Adventure, Drama",
      Directed: "Guy Ritchie",
      Written: "Joby Harold, Guy Ritchie, Lionel Wigram",
      Theaters: "May 12, 2017  Wide",
      BoxOffice: "$47,734,654.00",
      Runtime: "132 minutes",
      Studio: "Warner Bros. Pictures"
    },
    {
      Title: "THE CIRCLE",
      Poster: "the_circle.jpg",
      About: "The Circle is a gripping modern thriller starring Emma Watson ('Harry Potter'), Tom Hanks ('Sully') and John Boyega ('Star Wars: The Force Awakens'). When Mae (Emma Watson) is hired to work for the world's largest and most powerful tech & social media company, she sees it as an opportunity of a lifetime. As she rises through the ranks, she is encouraged by the company's founder, Eamon Bailey (Tom Hanks), to engage in a groundbreaking experiment that pushes the boundaries of privacy, ethics and ultimately her personal freedom. Her participation in the experiment, and every decision she makes begin to affect the lives and future of her friends, family and that of humanity.",
      Genre: "Drama, Mystery & Suspense",
      Directed: "James Ponsoldt",
      Written: "James Ponsoldt, Dave Eggers",
      Theaters: "Apr 28, 2017  Wide",
      BoxOffice: "$9,034,148.00",
      Runtime: "121 minutes",
      Studio: "Studio:	EuropaCorp / STXfilms"
    },
    {
      Title: "THE LOST CITY OF Z",
      Poster: "the_lost_city.jpg",
      About: "Based on author David Granns nonfiction bestseller, 'The Lost City of Z' tells the incredible true story of British explorer Percy Fawcett (Charlie Hunnam), who journeys into the Amazon at the dawn of the 20th century and discovers evidence of a previously unknown, advanced civilization that may have once inhabited the region. Despite being ridiculed by the scientific establishment who regard indigenous populations as 'savages,' the determined Fawcett - supported by his devoted wife (Sienna Miller), son (Tom Holland) and aide-de-camp (Robert Pattinson) - returns time and again to his beloved jungle in an attempt to prove his case, culminating in his mysterious disappearance in 1925. An epically scaled tale of courage and passion, told in writer/director James Gray's classic filmmaking style, 'The Lost City of Z' is a stirring tribute to the exploratory spirit and a conflicted adventurer driven to the verge of obsession.",
      Genre: "Action & Adventure, Drama",
      Directed: "James Gray",
      Written: "James Gray",
      Theaters: "Apr 21, 2017  Wide",
      oxOffice: "$4,931,308.00",
      Runtime: "140 minutes",
      Studio: "Amazon Studios/Bleecker Street Media"
    },
    {
      Title: "THE PATRIOTS DAY BOMBING",
      Poster: "the_patriots_day.jpg",
      About: "The 2013 Boston Marathon terrorist attacks are recalled in this in-depth documentary through interviews with survivors and their families, as well as first responders, investigators, government officials and reporters from the Boston Globe. The film also uses surveillance video and home movies to recount the tragic events.",
      Genre: "Documentary",
      Directed: "Ricki Stern, Anne Sundberg",
      Written: "Ricki Stern, Anne Sundberg",
      Theaters: "Nov 21, 2016",
      BoxOffice: "$4,931,308.00",
      Runtime: "120 minutes",
      Studio: "HBO Documentary Films"
    },
    {
      Title: "THE SPACE BETWEEN US",
      Poster: "the_space_between_us.jpg",
      About: "In this interplanetary adventure, shortly after arriving to help colonize Mars, an astronaut dies while giving birth to the first human born on the red planet - never revealing who the father is. Thus begins the extraordinary life of Gardner Elliot - an inquisitive, highly intelligent boy who reaches the age of 16 having only met 14 people in his very unconventional upbringing. While searching for clues about his father, and the home planet he's never known, Gardner begins an online friendship with a street smart girl named Tulsa. When he finally gets a chance to go to Earth, Gardner is eager to experience all of the wonders he could only read about on Mars. But after his explorations begin, scientists discover that Gardner's organs can't withstand Earth's atmosphere. Gardner joins with Tulsa on a race against time to unravel the mysteries of how he came to be, and where he belongs in the universe.",
      Genre: "Action & Adventure, Science Fiction & Fantasy",
      Directed: "Peter Chelsom",
      Written: "Allan Loeb, Peter Chelsom, Tinker Lindsay",
      Theaters: "Feb 3, 2017  Wide",
      BoxOffice: "$7,829,766.00",
      Runtime: "120 minutes",
      Studio: "STX Entertainment"
    },
    {
      Title: "UNCANNY",
      Poster: "uncanny.jpg",
      About: "A reclusive inventor, his android creation, and a curious reporter are drawn together in a dark triangle in this psychological sci-fi drama.",
      Genre: "Drama, Science Fiction & Fantasy",
      Directed: "Matthew Leutwyler",
      Written: "Shahin Chandrasoma",
      Theaters: "Nov 3, 2015  Limited",
      BoxOffice: "$17,837,346.00",
      Runtime: "91 minutes",
      Studio: "Accelerated Manner"
    }
  ];
  db.collection('movies').insertMany(movie, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500)
    }
    res.send(movie);
  });
});

MongoClient.connect('mongodb://localhost:27017/myapi', function (err, database) {
  if (err) {
    return console.log(err)
  }
  db = database;
  my.listen(3012, function () {
    console.log('API app started')
  });
});


// MongoClient.connect('mongodb://localhost:27017/myapi', function (err, database) {
//   if(err) {
//     return console.log(err)
//   }
//   db = database;
//
//   my.listen(3012, function () {
//     console.log('API started')
//   });
// });


// var express = require('express');
// var bodyParser = require('body-parser');
// var MongoClient = require('mongodb').MongoClient;
//
// var my = express();
// var db;
//
// my.use(bodyParser.json());
// my.use(bodyParser.urlencoded({extended: true}));
//
//
// var movies = [
//   {
//
//     Title: "GOING IN STYLE",
//     Poster: "going_in_style.jpg",
//     About: "Acclaimed filmmaker Guy Ritchie brings his dynamic style to the epic fantasy action adventure 'King Arthur: Legend of the Sword.' Starring Charlie Hunnam in the title role, the film is an iconoclastic take on the classic Excalibur myth, tracing Arthur's journey from the streets to the throne. When the child Arthur's father is murdered, Vortigern (Jude Law), Arthur's uncle, seizes the crown. Robbed of his birthright and with no idea who he truly is, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword from the stone, his life is turned upside down and he is forced to acknowledge his true legacy...whether he likes it or not.",
//     Genre: "Comedy",
//     Directed: "Zach Braff",
//     Written: "Ted Melfi",
//     Theaters: "Apr 7, 2017  Wide",
//     BoxOffice: "$37,346,914.00",
//     Runtime: "97 minutes",
//     Studio: "Warner Bros. Pictures"
//   },
//   {
//
//     Title: "KING ARTHUR: LEGEND OF THE SWORD",
//     Poster: "king_arthur.jpg",
//     About: "Acclaimed filmmaker Guy Ritchie brings his dynamic style to the epic fantasy action adventure 'King Arthur: Legend of the Sword.' Starring Charlie Hunnam in the title role, the film is an iconoclastic take on the classic Excalibur myth, tracing Arthur's journey from the streets to the throne. When the child Arthur's father is murdered, Vortigern (Jude Law), Arthur's uncle, seizes the crown. Robbed of his birthright and with no idea who he truly is, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword from the stone, his life is turned upside down and he is forced to acknowledge his true legacy...whether he likes it or not.",
//     Genre: "Action & Adventure, Drama",
//     Directed: "Guy Ritchie",
//     Written: "Joby Harold, Guy Ritchie, Lionel Wigram",
//     Theaters: "May 12, 2017  Wide",
//     BoxOffice: "$47,734,654.00",
//     Runtime: "132 minutes",
//     Studio: "Warner Bros. Pictures"
//   },
//   {
//
//     Title: "THE CIRCLE",
//     Poster: "the_circle.jpg",
//     About: "The Circle is a gripping modern thriller starring Emma Watson ('Harry Potter'), Tom Hanks ('Sully') and John Boyega ('Star Wars: The Force Awakens'). When Mae (Emma Watson) is hired to work for the world's largest and most powerful tech & social media company, she sees it as an opportunity of a lifetime. As she rises through the ranks, she is encouraged by the company's founder, Eamon Bailey (Tom Hanks), to engage in a groundbreaking experiment that pushes the boundaries of privacy, ethics and ultimately her personal freedom. Her participation in the experiment, and every decision she makes begin to affect the lives and future of her friends, family and that of humanity.",
//     Genre: "Drama, Mystery & Suspense",
//     Directed: "James Ponsoldt",
//     Written: "James Ponsoldt, Dave Eggers",
//     Theaters: "Apr 28, 2017  Wide",
//     BoxOffice: "$9,034,148.00",
//     Runtime: "121 minutes",
//     Studio: "Studio:	EuropaCorp / STXfilms"
//   },
//   {
//
//     Title: "THE LOST CITY OF Z",
//     Poster: "the_lost_city.jpg",
//     About: "Based on author David Granns nonfiction bestseller, 'The Lost City of Z' tells the incredible true story of British explorer Percy Fawcett (Charlie Hunnam), who journeys into the Amazon at the dawn of the 20th century and discovers evidence of a previously unknown, advanced civilization that may have once inhabited the region. Despite being ridiculed by the scientific establishment who regard indigenous populations as 'savages,' the determined Fawcett - supported by his devoted wife (Sienna Miller), son (Tom Holland) and aide-de-camp (Robert Pattinson) - returns time and again to his beloved jungle in an attempt to prove his case, culminating in his mysterious disappearance in 1925. An epically scaled tale of courage and passion, told in writer/director James Gray's classic filmmaking style, 'The Lost City of Z' is a stirring tribute to the exploratory spirit and a conflicted adventurer driven to the verge of obsession.",
//     Genre: "Action & Adventure, Drama",
//     Directed: "James Gray",
//     Written: "James Gray",
//     Theaters: "Apr 21, 2017  Wide",
//     oxOffice: "$4,931,308.00",
//     Runtime: "140 minutes",
//     Studio: "Amazon Studios/Bleecker Street Media"
//   },
//   {
//
//     Title: "THE PATRIOTS DAY BOMBING",
//     Poster: "the_patriots_day.jpg",
//     About: "The 2013 Boston Marathon terrorist attacks are recalled in this in-depth documentary through interviews with survivors and their families, as well as first responders, investigators, government officials and reporters from the Boston Globe. The film also uses surveillance video and home movies to recount the tragic events.",
//     Genre: "Documentary",
//     Directed: "Ricki Stern, Anne Sundberg",
//     Written: "Ricki Stern, Anne Sundberg",
//     Theaters: "Nov 21, 2016",
//     BoxOffice: "$4,931,308.00",
//     Runtime: "120 minutes",
//     Studio: "HBO Documentary Films"
//   },
//   {
//
//     Title: "THE SPACE BETWEEN US",
//     Poster: "the_space_between_us.jpg",
//     About: "In this interplanetary adventure, shortly after arriving to help colonize Mars, an astronaut dies while giving birth to the first human born on the red planet - never revealing who the father is. Thus begins the extraordinary life of Gardner Elliot - an inquisitive, highly intelligent boy who reaches the age of 16 having only met 14 people in his very unconventional upbringing. While searching for clues about his father, and the home planet he's never known, Gardner begins an online friendship with a street smart girl named Tulsa. When he finally gets a chance to go to Earth, Gardner is eager to experience all of the wonders he could only read about on Mars. But after his explorations begin, scientists discover that Gardner's organs can't withstand Earth's atmosphere. Gardner joins with Tulsa on a race against time to unravel the mysteries of how he came to be, and where he belongs in the universe.",
//     Genre: "Action & Adventure, Science Fiction & Fantasy",
//     Directed: "Peter Chelsom",
//     Written: "Allan Loeb, Peter Chelsom, Tinker Lindsay",
//     Theaters: "Feb 3, 2017  Wide",
//     BoxOffice: "$7,829,766.00",
//     Runtime: "120 minutes",
//     Studio: "STX Entertainment"
//   },
//   {
//
//     Title: "UNCANNY",
//     Poster: "uncanny.jpg",
//     About: "A reclusive inventor, his android creation, and a curious reporter are drawn together in a dark triangle in this psychological sci-fi drama.",
//     Genre: "Drama, Science Fiction & Fantasy",
//     Directed: "Matthew Leutwyler",
//     Written: "Shahin Chandrasoma",
//     Theaters: "Nov 3, 2015  Limited",
//     BoxOffice: "$17,837,346.00",
//     Runtime: "91 minutes",
//     Studio: "Accelerated Manner"
//   }
// ];
//
//
// my.get('/', function (req, res) {
//   res.send('Hello API');
// });
//
// my.get('/movies', function (req, res) {
//   db.collection('movies').find().toArray(function (err, docs) {
//     if (err) {
//       console.log(err);
//       return res.sendStatus(500)
//     }
//     res.send(docs)
//   })
// });
//
// my.put('/movies/:id', function (req, res) {
//   var movie = movies.find(function (movie) {
//     return movie.id === Number(req.params.id)
//   });
//   res.send(200);
// });
//
// my.delete('/movies/:id', function (req, res) {
//   movies = movies.filter(function (movie) {
//     return artist.id !== Number(req.params.id)
//   });
//   res.send(200);
// });
//
//
// my.post('/movies', function (req, res) {
//   {
//     movies: [
//       {
//
//         Title: "GOING IN STYLE",
//         Poster: "going_in_style.jpg",
//         About: "Acclaimed filmmaker Guy Ritchie brings his dynamic style to the epic fantasy action adventure 'King Arthur: Legend of the Sword.' Starring Charlie Hunnam in the title role, the film is an iconoclastic take on the classic Excalibur myth, tracing Arthur's journey from the streets to the throne. When the child Arthur's father is murdered, Vortigern (Jude Law), Arthur's uncle, seizes the crown. Robbed of his birthright and with no idea who he truly is, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword from the stone, his life is turned upside down and he is forced to acknowledge his true legacy...whether he likes it or not.",
//         Genre: "Comedy",
//         Directed: "Zach Braff",
//         Written: "Ted Melfi",
//         Theaters: "Apr 7, 2017  Wide",
//         BoxOffice: "$37,346,914.00",
//         Runtime: "97 minutes",
//         Studio: "Warner Bros. Pictures"
//       },
//       {
//
//         Title: "KING ARTHUR: LEGEND OF THE SWORD",
//         Poster: "king_arthur.jpg",
//         About: "Acclaimed filmmaker Guy Ritchie brings his dynamic style to the epic fantasy action adventure 'King Arthur: Legend of the Sword.' Starring Charlie Hunnam in the title role, the film is an iconoclastic take on the classic Excalibur myth, tracing Arthur's journey from the streets to the throne. When the child Arthur's father is murdered, Vortigern (Jude Law), Arthur's uncle, seizes the crown. Robbed of his birthright and with no idea who he truly is, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword from the stone, his life is turned upside down and he is forced to acknowledge his true legacy...whether he likes it or not.",
//         Genre: "Action & Adventure, Drama",
//         Directed: "Guy Ritchie",
//         Written: "Joby Harold, Guy Ritchie, Lionel Wigram",
//         Theaters: "May 12, 2017  Wide",
//         BoxOffice: "$47,734,654.00",
//         Runtime: "132 minutes",
//         Studio: "Warner Bros. Pictures"
//       },
//       {
//
//         Title: "THE CIRCLE",
//         Poster: "the_circle.jpg",
//         About: "The Circle is a gripping modern thriller starring Emma Watson ('Harry Potter'), Tom Hanks ('Sully') and John Boyega ('Star Wars: The Force Awakens'). When Mae (Emma Watson) is hired to work for the world's largest and most powerful tech & social media company, she sees it as an opportunity of a lifetime. As she rises through the ranks, she is encouraged by the company's founder, Eamon Bailey (Tom Hanks), to engage in a groundbreaking experiment that pushes the boundaries of privacy, ethics and ultimately her personal freedom. Her participation in the experiment, and every decision she makes begin to affect the lives and future of her friends, family and that of humanity.",
//         Genre: "Drama, Mystery & Suspense",
//         Directed: "James Ponsoldt",
//         Written: "James Ponsoldt, Dave Eggers",
//         Theaters: "Apr 28, 2017  Wide",
//         BoxOffice: "$9,034,148.00",
//         Runtime: "121 minutes",
//         Studio: "Studio:	EuropaCorp / STXfilms"
//       },
//       {
//
//         Title: "THE LOST CITY OF Z",
//         Poster: "the_lost_city.jpg",
//         About: "Based on author David Granns nonfiction bestseller, 'The Lost City of Z' tells the incredible true story of British explorer Percy Fawcett (Charlie Hunnam), who journeys into the Amazon at the dawn of the 20th century and discovers evidence of a previously unknown, advanced civilization that may have once inhabited the region. Despite being ridiculed by the scientific establishment who regard indigenous populations as 'savages,' the determined Fawcett - supported by his devoted wife (Sienna Miller), son (Tom Holland) and aide-de-camp (Robert Pattinson) - returns time and again to his beloved jungle in an attempt to prove his case, culminating in his mysterious disappearance in 1925. An epically scaled tale of courage and passion, told in writer/director James Gray's classic filmmaking style, 'The Lost City of Z' is a stirring tribute to the exploratory spirit and a conflicted adventurer driven to the verge of obsession.",
//         Genre: "Action & Adventure, Drama",
//         Directed: "James Gray",
//         Written: "James Gray",
//         Theaters: "Apr 21, 2017  Wide",
//         oxOffice: "$4,931,308.00",
//         Runtime: "140 minutes",
//         Studio: "Amazon Studios/Bleecker Street Media"
//       },
//       {
//
//         Title: "THE PATRIOTS DAY BOMBING",
//         Poster: "the_patriots_day.jpg",
//         About: "The 2013 Boston Marathon terrorist attacks are recalled in this in-depth documentary through interviews with survivors and their families, as well as first responders, investigators, government officials and reporters from the Boston Globe. The film also uses surveillance video and home movies to recount the tragic events.",
//         Genre: "Documentary",
//         Directed: "Ricki Stern, Anne Sundberg",
//         Written: "Ricki Stern, Anne Sundberg",
//         Theaters: "Nov 21, 2016",
//         BoxOffice: "$4,931,308.00",
//         Runtime: "120 minutes",
//         Studio: "HBO Documentary Films"
//       },
//       {
//
//         Title: "THE SPACE BETWEEN US",
//         Poster: "the_space_between_us.jpg",
//         About: "In this interplanetary adventure, shortly after arriving to help colonize Mars, an astronaut dies while giving birth to the first human born on the red planet - never revealing who the father is. Thus begins the extraordinary life of Gardner Elliot - an inquisitive, highly intelligent boy who reaches the age of 16 having only met 14 people in his very unconventional upbringing. While searching for clues about his father, and the home planet he's never known, Gardner begins an online friendship with a street smart girl named Tulsa. When he finally gets a chance to go to Earth, Gardner is eager to experience all of the wonders he could only read about on Mars. But after his explorations begin, scientists discover that Gardner's organs can't withstand Earth's atmosphere. Gardner joins with Tulsa on a race against time to unravel the mysteries of how he came to be, and where he belongs in the universe.",
//         Genre: "Action & Adventure, Science Fiction & Fantasy",
//         Directed: "Peter Chelsom",
//         Written: "Allan Loeb, Peter Chelsom, Tinker Lindsay",
//         Theaters: "Feb 3, 2017  Wide",
//         BoxOffice: "$7,829,766.00",
//         Runtime: "120 minutes",
//         Studio: "STX Entertainment"
//       },
//       {
//
//         Title: "UNCANNY",
//         Poster: "uncanny.jpg",
//         About: "A reclusive inventor, his android creation, and a curious reporter are drawn together in a dark triangle in this psychological sci-fi drama.",
//         Genre: "Drama, Science Fiction & Fantasy",
//         Directed: "Matthew Leutwyler",
//         Written: "Shahin Chandrasoma",
//         Theaters: "Nov 3, 2015  Limited",
//         BoxOffice: "$17,837,346.00",
//         Runtime: "91 minutes",
//         Studio: "Accelerated Manner"
//       }
//     ]
//   }
//
//   req.body.movies
//   var movie = {
//     name:
//   };
//   db.collection('movies').Bulk.insert(movie, function (err, result) {
//     if (err) {
//       console.log(err);
//       return res.sendStatus(500)
//     }
//     res.send(movie);
//   })
// });
//
//
// MongoClient.connect('mongodb://localhost:27017/myapi', function (err, database) {
//   if (err) {
//     return console.log(err)
//   }
//   db = database;
//   my.listen(3012, function () {
//     console.log('API app started')
//   });
// });





