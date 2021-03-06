'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Artwork", [{
      artwork_name: "Women in Garden",
      style_name: "Impressionism",
      artist_name: "Claude Monet",
      artwork_size: "205 x 255 cm",
      artwork_descript: "Women in the Garden (French: Femmes au jardin) is an oil painting begun in 1866 by French artist Claude Monet when he was 26. It is a large work painted en plein air; the size of the canvas necessitated Monet painting its upper half with the canvas lowered into a trench he had dug, so that he could maintain a single point of view for the entire work. The setting is the garden of a property he was renting. His companion Camille posed for the figures. Monet finished the work indoors, and used magazine illustrations to render fashionable clothing.",
      artwork_medium: "oil, canvas",
      artwork_colortone:"green",
      artwork_price: "200000",
      artwork_image: "http://res.cloudinary.com/esthete/image/upload/v1603213194/esthete/h24mpnzmeqhq17szcvf8.jpg",
      artwork_pubID: "esthete/h24mpnzmeqhq17szcvf8",
      createdAt:new Date (),
      updatedAt:new Date ()
    },{
      artwork_name: "Impression, Sunrise",
      style_name: "Impressionism",
      artist_name: "Claude Monet",
      artwork_size: "63 x 48 cm",
      artwork_descript: "Impression, Sunrise (French: Impression, soleil levant) is a painting by Claude Monet. Shown at what would later be known as the 'Exhibition of the Impressionists' in April 1874, the painting is attributed to giving rise to the name of the Impressionist movement. Impression, Sunrise depicts the port of Le Havre, Monet's hometown, and is his most famous painting of the harbor.",
      artwork_medium: "oil, canvas",
      artwork_colortone:"blue",
      artwork_price: "200000",
      artwork_image: "http://res.cloudinary.com/esthete/image/upload/v1603213289/esthete/n4ve58jyu3eapacoolru.jpg",
      artwork_pubID: "esthete/n4ve58jyu3eapacoolru",
      createdAt:new Date (),
      updatedAt:new Date ()
    },{
      artwork_name: "House of Parliament",
      style_name: "Impressionism",
      artist_name: "Claude Monet",
      artwork_size: "81 x 92 cm",
      artwork_descript: "Claude Monet painted a series of oil paintings of the Palace of Westminster, home of the British Parliament, in the fall of 1899 and the early months of 1900 and 1901 during stays in London.[1] All of the series' paintings share the same viewpoint from Monet's window or a terrace at St Thomas' Hospital overlooking the Thames and the approximate canvas size of 81 cm × 92 cm (32 in × 36 3/8 in).[2][3] They are, however, painted during different times of the day and weather conditions.",
      artwork_medium: "oil, canvas",
      artwork_colortone:"orange",
      artwork_price: "200000",
      artwork_image: "http://res.cloudinary.com/esthete/image/upload/v1603213344/esthete/pwpwd0rlh8cfrufwtklr.jpg",
      artwork_pubID: "esthete/pwpwd0rlh8cfrufwtklr",
      createdAt:new Date (),
      updatedAt:new Date ()
    },{
      artwork_name: "Sailing Boats at Honfleur",
      style_name: "Impressionism",
      artist_name: "Claude Monet",
      artwork_size: "81 x 92 cm",
      artwork_descript: "This painting depects sail boats in the port of Honfleur. is a commune in the Calvados department in northwestern France. It is located on the southern bank of the estuary of the Seine across from le Havre and very close to the exit of the Pont de Normandie. Its inhabitants are called Honfleurais.",
      artwork_medium: "oil, canvas",
      artwork_colortone:"white",
      artwork_price: "200000",
      artwork_image: "http://res.cloudinary.com/esthete/image/upload/v1603213406/esthete/hh6a0iy51xrvqjcphg87.jpg",
      artwork_pubID: "esthete/hh6a0iy51xrvqjcphg87",
      createdAt:new Date (),
      updatedAt:new Date ()
    },{
      artwork_name: "Fishing Boats, Calm Sea",
      style_name: "Impressionism",
      artist_name: "Claude Monet",
      artwork_size: "81 x 92 cm",
      artwork_descript: "The relationship between Monet and the sea started soon as the young artist established, along with his family, in the coastal town of Le Havre, Normandy, in the mid-1850s. In these early years Monet did not feel an immediate attraction for the “plen air” painting, and he focused in creating caricatures of neighbors and acquaintances. But the young talent caught the attention of a painter who had established himself at Le Havre years earlier, Eugene Boudin, still considered one of the greatest seascape painters of the 19th century. After a few months, the master convinced the young artist to accompany him on his outings to paint outdoors. The tenacity of Boudin would not be in vain, and Monet recognized, several years later: 'If I became a painter, it was thanks to Boudin'",
      artwork_medium: "oil, canvas",
      artwork_colortone:"blue",
      artwork_price: "200000",
      artwork_image: "http://res.cloudinary.com/esthete/image/upload/v1603211780/esthete/evkusujsfwdd9lcvmp7h.jpg",
      artwork_pubID: "esthete/evkusujsfwdd9lcvmp7h",
      createdAt:new Date (),
      updatedAt:new Date ()
    },{
      artwork_name: "The Persistence of Memory",
      style_name: "Surrealism",
      artist_name: "Salvador Dali",
      artwork_size: "81 x 92 cm",
      artwork_descript: "Hard objects become inexplicably limp in this bleak and infinite dreamscape, while metal attracts ants like rotting flesh. Mastering what he called “the usual paralyzing tricks of eye-fooling,” Dalí painted with “the most imperialist fury of precision,” he said, but only “to systematize confusion and thus to help discredit completely the world of reality.” It is the classic Surrealist ambition, yet some literal reality is included, too: the distant golden cliffs are the coast of Catalonia, Dalí’s home.",
      artwork_medium: "oil, canvas",
      artwork_colortone:"brown",
      artwork_price: "200000",
      artwork_image: "http://res.cloudinary.com/esthete/image/upload/v1603213553/esthete/flygjhfghumvezbrid84.webp",
      artwork_pubID: "esthete/flygjhfghumvezbrid84",
      createdAt:new Date (),
      updatedAt:new Date ()
    },{
      artwork_name: "Les Demoiselles d'Avignon",
      style_name: "Cubism",
      artist_name: "Pablo Picasso",
      artwork_size: "81 x 92 cm",
      artwork_descript: "Les Demoiselles d’Avignon marks a radical break from traditional composition and perspective in painting. It depicts five naked women composed of flat, splintered planes whose faces were inspired by Iberian sculpture and African masks. The compressed space they inhabit appears to project forward in jagged shards, while a slice of melon in the still life at the bottom of the composition teeters on an upturned tabletop. Picasso unveiled the monumental painting in his Paris studio after months of revision. The Avignon of the work’s title is a reference to a street in Barcelona famed for its brothels.",
      artwork_medium: "oil on canvas",
      artwork_colortone:"pink",
      artwork_price: "200000",
      artwork_image: "http://res.cloudinary.com/esthete/image/upload/v1603213858/esthete/ba316jueflz9vfld29re.jpg",
      artwork_pubID: "esthete/ba316jueflz9vfld29re",
      createdAt:new Date (),
      updatedAt:new Date ()
    },{
      artwork_name: "Las Meninas",
      style_name: "Boroque",
      artist_name: "Diego Velazquez",
      artwork_size: "81 x 92 cm",
      artwork_descript: "Las Meninas is a 1656 painting in the Museo del Prado in Madrid, by Diego Velázquez, the leading artist of the Spanish Golden Age. Its complex and enigmatic composition raises questions about reality and illusion, and creates an uncertain relationship between the viewer and the figures depicted.",
      artwork_medium: "oil, canvas",
      artwork_colortone:"brwon",
      artwork_price: "200000",
      artwork_image: "http://res.cloudinary.com/esthete/image/upload/v1603213978/esthete/ghou2njqmqxak5h6wkby.jpg",
      artwork_pubID: "esthete/ghou2njqmqxak5h6wkby",
      createdAt:new Date (),
      updatedAt:new Date ()
    },{
      artwork_name: "Shot Marilyns",
      style_name: "Conceptual Art",
      artist_name: "Andy Warhol",
      artwork_size: "81 x 92 cm",
      artwork_descript: "The Shot Marilyns is a work of art produced in 1964 by Andy Warhol. It consists of four canvases, each a square measuring 40 inches and each consisting of a painting of Marilyn Monroe, each shot through in the forehead by a single bullet.",
      artwork_medium: "oil, canvas",
      artwork_colortone:"multicolor",
      artwork_price: "200000",
      artwork_image: "http://res.cloudinary.com/esthete/image/upload/v1603214048/esthete/aq2i4dsmx9mfplwxfftw.jpg",
      artwork_pubID: "esthete/aq2i4dsmx9mfplwxfftw",
      createdAt:new Date (),
      updatedAt:new Date ()
    },{
      artwork_name: "The Scream",
      style_name: "Expressionism",
      artist_name: "Edvard Munch",
      artwork_size: "81 x 92 cm",
      artwork_descript: "The Scream is the popular name given to a composition created by Norwegian Expressionist artist Edvard Munch in 1893. The original German title given by Munch to his work was Der Schrei der Natur (The Scream of Nature), and the Norwegian title is Skrik (Shriek). The agonised face in the painting has become one of the most iconic images of art, seen as symbolising the anxiety of the human condition.",
      artwork_medium: "oil canvas",
      artwork_colortone:"brown",
      artwork_price: "200000",
      artwork_image: "http://res.cloudinary.com/esthete/image/upload/v1603214153/esthete/w2hkzwhxp0ntpnt0xbzi.jpg",
      artwork_pubID: "esthete/w2hkzwhxp0ntpnt0xbzi",
      createdAt:new Date (),
      updatedAt:new Date ()
    },
  ]);
},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
