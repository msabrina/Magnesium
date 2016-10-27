$.ajax({
   url: 'http://api.fixer.io/latest',
   type: 'GET',
   dataType: 'JSONP',
   success: (data) => {
     console.log(data);
     // function showAlbums() {
       let section1 = $('<section>');
       section1.css('backgroundColor', 'aqua');
       let kTitle = $('<h1>').text('Ke$ha\'s Albums!');
       let allAlbums = $('<ul>');
         for (let i = 0; i < 20; i++) {
           let album = $('<li>');
           album.text(data.rates.AUD);
           allAlbums.append(album);
         }
       section1.append(kTitle);
       section1.append(allAlbums);
       $('body').append(section1);
//       }
// showAlbums();
   }
});
