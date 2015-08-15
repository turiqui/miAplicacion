angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Miembros', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var miembros = [{
    id: 0,
    name: 'Arturo Martínez',
    lastText: 'El gomilla',
    face: 'img/cangrejo.jpg'
  }, {
    id: 1,
    name: 'Marco Martínez',
    lastText: 'El gruñón',
    face: 'img/calamardo.jpg'
  }, {
    id: 2,
    name: 'Marta Franco',
    lastText: 'La belleza',
    face: 'img/arenita.jpg'
  }, {
    id: 3,
    name: 'Mateo Martínez',
    lastText: 'El gritón',
    face: 'img/bob.jpg'
  }];

  return {
    all: function() {
      return miembros;
    },
    remove: function(miembro) {
      miembros.splice(miembros.indexOf(miembro), 1);
    },
    get: function(miembroId) {
      for (var i = 0; i < miembros.length; i++) {
        if (miembros[i].id === parseInt(miembroId)) {
          return miembros[i];
        }
      }
      return null;
    }
  };
});
