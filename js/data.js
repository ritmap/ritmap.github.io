/*
 * title - The name of the location or feature
 * lat - The latitude GPS coordinates of the location or feature.  This should be positive.
 * lon - The longitude GPS coordinates of the location or feature.  This should be negative.
 * desc - Description of the area.  Please use a meaningful description if possible.
 *        If more information can be found on another site, add a link to it.
 *        To add a url, use the html tag <a href="url" target="_blank">link description</a>.
 *        To add a new line, type </p><p>. If you do not want a new line, do not include these tags.
  * image - The image file name.  Please place the image in media/places.
  *         Set the field to "" if there is no image.
 */

/**
 * Enum for filtering go stuff.
 **/
var Filter;
(function (Filter) {
    Filter[Filter["NOTHING"] = 0] = "NOTHING";        // If the place has no special filter.
    Filter[Filter["GYM"] = 1] = "GYM";                // If the place is a gym in Pokemon Go.
    Filter[Filter["POKESTOP"] = 2] = "POKESTOP";      // If the place is a pokestop in Pokemon Go.
})(Filter || (Filter = {}));

/**
 * \brief Gets the image from the filter.
 */
function GetMarkerImage(filter){
    switch(filter)
    {
        case Filter.GYM:
            return "media/pokegym.png";
            
        case Filter.POKESTOP:
            return "media/pokestop.png";
            
        default:
            return "media/marker-icon.png";
    }
}

var mapData = {"mapData": [
    {"title" : "Computer Engineering Department",
     "lat" : 43.0845,
     "lon" : -77.6785,
     "desc" : "The greatest department ever!  This was not created by Computer Engineers, I swear!",
     "image" : "ce.png",
     "filter": [Filter.NOTHING]
    },
    {"title" : "Scales",
     "lat" : 43.084526,
     "lon" : -77.668726,
     "desc" : "This sculpture is of scales. They tilt when the wind blows!",
     "image" : "scales.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" : "Zen Garden",
     "lat" : 43.085182,
     "lon" : -77.678804,
     "desc" : "A zen garden outside of Institute Hall.",
     "image" : "ih_zen_garden.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" : "Global Village Sign",
     "lat" : 43.082934,
     "lon" : -77.679601,
     "desc" : "This sign is the entrance to Global Village!",
     "image" : "gv_sign.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" : "Main Entrance",
     "lat" : 43.091935,
     "lon" : -77.674610,
     "desc" : "This sign is probably the first thing you'll see at RIT!",
     "image" : "",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" : "Global Village Fountain",
     "lat" : 43.082926,
     "lon" : -77.680662,
     "desc" : "This fountain is in the middle of Global Village.  It lights up at night!",
     "image" : "gv_fountain.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" : "Sundial",
     "lat"   : 43.08436,
     "lon"   : -77.66916,
     "desc"  : "The Sundial.  It marks the beginning of the Quarter Mile.</p><p>Image from Reddit user agargiulo.",
     "image" : "sun_dial.jpg",
     "filter" : [Filter.NOTHING, Filter.GYM]
    },
    {"title" : "The Sentinel",
     "lat"   : 43.0846,
     "lon"   : -77.67434,
     "desc"  : "The Sentinel.  A sculpture made by Albert Paley.  Some say it looks like a knight riding a horse.  Others say its someone reading.  There are rumors that this is the infamous weather machine.  One thing is for sure though... it is unique!",
     "image" : "sentinel.jpg",
     "filter" : [Filter.NOTHING, Filter.GYM]
    },
    {"title" : "Unity Sculpture",
     "lat"   : 43.08518,
     "lon"   : -77.67841,
     "desc"  : 'Contrary to popular belief, this is NOT the pi symbol.  It was built as a tribute to the <a href="http://en.wikipedia.org/wiki/Gracies_Dinnertime_Theatre" target="_blank">Gracie\'s Dinnertime Theater</a>',
     "image" : "unity.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" : "Transformers Logos",
     "lat"   : 43.08439306,
     "lon"   : -77.67861361,
     "desc"  : 'A fun little easter egg located in the basement of Building 17.',
     "image" : "transformers.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" :"Briggs Place Plack",
     "lat"   :43.08746,
     "lon"   :-77.66887,
     "desc"  : 'Briggs Place is a road on the East-side of campus.  This is the plack next to it that commemorates Theodore C. Briggs, whom the road is named after.',
     "image" : "briggs_place.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" :"Emerson Plaza",
     "lat"   :43.085257,
     "lon"   :-77.672842,
     "desc"  : 'An area just outside of the Gordon Field house.  There used to be a giant chair here, but it seems to have disappeared in recent years :(',
     "image" : "emerson_plaza.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" :"Whisper Wall",
     "lat"   :43.08560682,
     "lon"   :-77.6674977489165,
     "desc"  : 'A wall just outside of Sol Heumann Hall. It is curved in such a way that one person sitting at one end of the wall can whisper and another person at the other end of the wall can hear them clearly.',
     "image" : "wisper_wall.PNG",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" : "Echo Structure",
     "lat" : 43.08533,
     "lon" : -77.667658,
     "desc" : "If one stands on top of this structure, and speaks into it, they will hear an echo.  However, people standing around the structure will not hear the echo.",
     "image" : "echo_wall.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" :"Tojo Memorial Garden",
     "lat"   :43.0849609342262,
     "lon"   :-77.6756586134433,
     "desc"  : 'This garden located outside Eastman in the Kodak Quad was created by the parents of Yasuji Tojo in his memory.',
     "image" : "zen_garden.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" :"Dr. Albert Simone",
     "lat"   :43.0917881826932,
     "lon"   :-77.6559309661388,
     "desc"  : 'A life sized bronze statue of Dr. Albert Simone, retired RIT President. He was instrumental in the creation of the Park Point and Barnes and Noble part of campus. His statue stands near the book store overlooking the Park Point green.',
     "image" : "albert_simone_v.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" :"Elevated Track",
     "lat"   :43.0848621191564,
     "lon"   :-77.6717627048492,
     "desc"  : 'Located above the basketball courts inside the Gordon Field House, the elevated track is accessible for recreational use.',
     "image" : "",
     "filter": [Filter.NOTHING]
    },
    {"title" :"Boxing Room",
     "lat"   :43.0850580122468,
     "lon"   :-77.6711243391037,
     "desc"  : 'Located at the far end of the basketball courts inside the Gordon Field House, the boxing room is a great place to practice martial arts or just blow off some steam.',
     "image" : "",
     "filter": [Filter.NOTHING]
    },
    {"title" :"Writing Center",
     "lat"   :43.0840981309609,
     "lon"   :-77.6745629310607,
     "desc"  : 'Located in the SAU, the writing center is a good place for students to check over their written work and be given valuable advice to improve their writing skills.',
     "image" : "",
     "filter": [Filter.NOTHING]
    },
    {"title" :"Tiger Statue",
     "lat"   :43.0841918327929,
     "lon"   :-77.6755405962467,
     "desc"  : 'Created November 10, 1989, the Bronzed Bengel Tiger Statue represets RIT’s mascot which was adopted in 1963. Also known as the ‘guardian of the quarter mile’',
     "image" : "tiger_statue.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" : "Golisano College of Information and Sciences",
     "lat" : 43.084766,
     "lon" : -77.679935,
     "desc" : "Home of Software Engineering, IT, Computer Science, Computer Security, and many more majors!",
     "image" : "",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" :"Archery Range",
     "lat"   :43.08954535,
     "lon"   :-77.67218381,
     "desc"  : 'Located at the far end of the soccer field near the RIT entrance, the Archery Club as a portion of the field to shoot, including their storage shed. ',
     "image" : "archery.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" :"The Construct",
     "lat"   :43.08513724,
     "lon"   :-77.67914146,
     "desc"  : 'On the fourth floor of Institute Hall is a lab called The Construct where 3D printers are maintained. They allow free printing up to 500 grams per person each semester.',
     "image" : "construct.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" : "Four Monitors",
     "lat"   : 43.08443556,
     "lon"   : -77.67749111,
     "desc"  : 'Found in the tunnels under Building 9.  It reads "Earth provides enough to satisfy every man\'s need but not every man\'s greed".',
     "image" : "four_monitors.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" : "Pizza for Sale",
     "lat"   : 43.08443528,
     "lon"   : -77.6775,
     "desc"  : 'Almost every week day during the year, Pizza is sold here in Building 9.',
     "image" : "9_pizza.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" : "Round Fountain",
     "lat"   : 43.08322726,
     "lon"   : -77.67840,
     "desc"  : 'This is a Round Fountain.  I have nothing more to add.</p><p>Image from Reddit user got2bhockey',
     "image" : "round_fountain.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" : "Engineering Learning Center",
     "lat"   : 43.08437917,
     "lon"   : -77.67751444,
     "desc"  : 'Located inside of Erdle Commons in Building 9.  Its an area for studing and tutoring for Engineering Students. <a href="http://www.rit.edu/~w-asc/tutoring-centers.php" target="_blank">More information, including hours.</a>',
     "image" : "elc.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" : "Lehigh Valley Trail",
     "lat"   : 43.092565,
     "lon"   : -77.65399222,
     "desc"  : 'The northern branch of the Lehigh Valley Trail runs along the east end of campus.  The northern branch appears to go all the way up to U of R. <a href="http://www2.monroecounty.gov/parks-lehighvalley.php" target="_blank">More info</a>',
     "image" : "lehigh_valley_trail.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" : "Infinity Quad Statue",
     "lat"   : 43.08424179,
     "lon"   : -77.67698094,
     "desc"  : 'This is a statue that spins in the wind.  Apparently, when the sun shines through it, it casts a shadow that shows the infinity symbol, hence the name "Infinity Quad".  Personally, I\'ve never seen the shadow :(</p><p>Image from Reddit user oi_rohe',
     "image" : "infinity_quad.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" : "Greek Rock",
     "lat"   : 43.08411215,
     "lon"   : -77.67288094,
     "desc"  : 'This rock is always painted by various clubs and Greek Life.</p><p>Image from <a href="http://ritsammy.com" target="_blank">ritsammy.com</a>',
     "image" : "greek_rock.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" : "RIT Observatory",
     "lat"   : 43.075100460230544,
     "lon"   : -77.6638676226139,
     "desc"  : 'The RIT Observatory on John Street.',
     "image" : "",
     "filter": [Filter.NOTHING]
    },
    {"title" : "Margaret's House",
     "lat"   :43.085648,
     "lon"   : -77.669062,
     "desc"  : 'Margaret\’s House provides childcare for children between the ages of 8 weeks and 8 years old.  <a href="http://www.rit.edu/studentaffairs/margaretshouse/" target="_blank">Click here for more information</a>',
     "image" : "margaret_house.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" : "Center for Computational Relativity and Gravity",
     "lat"   : 43.08436306632919,
     "lon"   : -77.68093720078468,
     "desc"  : '<a href="http://ccrg.rit.edu/" target="_blank">Click for more information</a>',
     "image" : "black_hole.jpg",
     "filter": [Filter.NOTHING]
    },
	{"title" : "Society of Software Engineers",
     "lat"   : 43.08386361,
     "lon"   :-77.67971056,
     "desc"  : 'Student Organization that partipate in mentoring, software projects, and social activities.  <a href="https://sse.se.rit.edu/" target="_blank">Click for more information</a></p><p>Image from the SSE website.',
     "image" : "sse.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" : "Time Capsule",
     "lat"   : 43.084186,
     "lon"   :-77.675318,
     "desc"  : 'A time capsule buried outside Monroe Hall in 2005 for RIT\'s 175th anniversary.  Who knows what\'s inside?',
     "image" : "time_capsule.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" : "Book Recycling",
     "lat"   : 43.08418010022605,
     "lon"   :-77.67643377184868,
     "desc"  : 'The library sometimes recycles old books in the tunnels between the library and the Liberal Arts Building.  Check often to see if there is one you want to take.  They are free!',
     "image" : "book_recycle.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" : "Tau Beta Pi Statue",
     "lat"   : 43.08423,
     "lon"   :-77.67738998,
     "desc"  : 'A statue of the Tau Beta Pi logo. Tau Beta Pi is an honor society at RIT.  Read more <a href = "http://ritpedia.rit.edu/Tau_Beta_Pi" target="_blank">here.</a>',
     "image" : "tbp.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" : "Cloaked Intention",
     "lat"   : 43.084715,
     "lon"   :-77.68107,
     "desc"  : 'A statue made by Albert Paley.  It is dedicated to Ann Mowris Mulligan.  The statue is almost 20 feet tall and made of weathering steel.',
     "image" : "cloaked_intention.jpg",
     "filter": [Filter.NOTHING, Filter.GYM]
    },
    {"title" : "Student Financial Services",
     "lat"   : 43.08338162,
     "lon"   :-77.6800855,
     "desc"  : '"The Office of the Student Financial Services is RIT’s central billing service center for tuition, fees, and other charges incurred by students." <a href="http://www.rit.edu/fa/sfs/" target="_blank">-SFS Website</a></p><p>Note, these guys are NOT Financial Aid.  Financial Aid is over in Bausch and Lomb.</p><p>',
     "image" : "sfs.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" : "Miller Road",
     "lat"   : 43.076163,
     "lon"   : -77.669574,
     "desc"  : "A private, unpaved road off the campus loop. Great place for running, just beware the mosquitoes.",
     "image" : "miller_road.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" : "RIT Fuel Cell",
     "lat"   : 43.085581,
     "lon"   : -77.680607,
     "desc"  : "A fuel cell that helps power the institute of sustainability. The vapor you see coming out of it on cold days is clean, pure water vapor.",
     "image" : "gis_fuel_cell.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" : "GIS Rooftop Garden",
     "lat"   : 43.085249,
     "lon"   : -77.681057,
     "desc"  : "The Golisano Institute of Sustainability rooftop garden. Another array of solar panels that help power the building are also in this area.",
     "image" : "gis_rooftop_garden.jpg",
     "filter": [Filter.NOTHING]
    },
	{"title" : "Solar Array",
     "lat"   : 43.075779,
     "lon"   : -77.669809,
     "desc"  : 'RIT\'s Massive Solar Array.  See a video <a href="https://www.youtube.com/watch?v=LNWaK08Zd78" target="_blank">here</a>.',
     "image" : "solar_array.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" : "Welcome Center",
     "lat"   : 43.08598,
     "lon"   : -77.674458,
     "desc"  : "The Welcome center",
     "image" : "welcome_center.jpg",
     "filter": [Filter.NOTHING]
    },
    {"title" : "Split Cube",
     "lat"   : 43.087580161,
     "lon"   : -77.6682040873,
     "desc"  : "A steel cube outside of the Lyndon Baines Johnson Building.</p><p>Created by Carl Zollo to celebrate NTID's 10 anniversary in 1978.",
     "image" : "split_cube.jpg",
     "filter" : [Filter.NOTHING, Filter.POKESTOP]
    },
    {"title" : "Kokopelli Pond",
     "lat"   : 43.088315,
     "lon"   : -77.679697,
     "desc"  : "A small pond near H lot.</p><p>Apparently there are fish in here, as many students are seen fishing.</p><p>I wonder if they've ever caught anything?",
     "image" : "kokopelli_pond.jpg",
     "filter": [Filter.NOTHING]
    },
]
};


