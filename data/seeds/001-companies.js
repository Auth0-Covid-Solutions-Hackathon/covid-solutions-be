
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {id: 1, name: 'Walmart', image:"https://seeklogo.com/images/W/Walmart-logo-B6CAC8AF23-seeklogo.com.png", capacity: "false", distance: "true", masks: "true", home: "false", elder: "true"  },
        {id: 2, name: 'Amazon',image:"https://seeklogo.com/images/A/amazon-logo-86547BFB54-seeklogo.com.png", capacity: "false", distance: "false", masks: "true", home: "false", elder: "false" },
        {id: 3, name: 'Nike',image:"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/nike-512.png", capacity: "false", distance: "true", masks: "false", home: "true", elder: "false" },
        {id: 4, name: 'Kroger',image:"https://cdn4.iconfinder.com/data/icons/social-media-2273/64/social_media_network_online_k-256.png", capacity: "false", distance: "false", masks: "false", home: "false", elder: "false" },
        {id: 5, name: 'McDonalds',image:"http://www.simpleimageresizer.com/_uploads/photos/718b9342/mcDees_35.png", capacity: "false", distance: "false", masks: "false", home: "false", elder: "false" },
        {id: 6, name: 'Burlington',image:"http://www.simpleimageresizer.com/_uploads/photos/718b9342/jeffrey_35.png", capacity: "true", distance: "false", masks: "true", home: "false", elder: "true" },
        {id: 7, name: 'Target',image:"https://cdn3.iconfinder.com/data/icons/shopping-and-retail-15/512/Focus-512.png", capacity: "true", distance: "true", masks: "true", home: "true", elder: "true" },
        {id: 8, name: 'Adidas', image:"https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/5_Adidas_logo_logos-512.png", capacity: "true", distance: "true", masks: "false", home:"false", elder: "false" },

      ]);
    });
};
