//Détection du scroll 
var waypoint = new Waypoint({
    element: document.getElementById('fixeHeader'),
    handler: function() {
      document.getElementById('fixeHeader').classList.toggle("is-fixedHeader");
      document.getElementById('fixeNav').classList.toggle("is-fixedNav");
      document.getElementById('fixeContent').classList.toggle("is-fixedContent");
    }
  })
