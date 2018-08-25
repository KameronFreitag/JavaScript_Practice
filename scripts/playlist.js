function printSongs( songs ) {
  var listHTML = '<ol>';
  for (var i = 0; i < songs.length; i += 1) {
    for (var k = 1; k < songs[i].length; k += 1) {
      listHTML += '<li>' + songs[i][k] + ' by ' + songs[i][0] +'</li>';
    }
  }
  listHTML += '</ol>';
  document.write(listHTML);
}

document.write("<h2>Current Playlist</h2>");

var playlist = [['JIMI HENDRIX','a','m'], ['DAVID BOWIE','b'], ['MICHAEL JACKSON','c'], ['ELVIS PRESELY','d'], ['BOB DYLAN','e'], ['PRINCE','f'], ['KURT COBAIN','g'], ['JOHN LENNON','h']];
playlist.push(['GIIVA SUNNER','i']);
playlist.push(['MARC REBILLET','j'], ['FATBOY SLIM','k']);
playlist.unshift(['GRANDAY','l']);
var input = '';
var isListed = false;

while(true)
{
  input = window.prompt("Which artist do you want to listen to? List: List all artists. Quit: Exit the picker").toUpperCase();
  if(input === "QUIT" || input === "Q")
  {
    break;
  }
  else if(input === "LIST")
  {
    if(isListed)
      window.alert("The list is already present.");
    else
    {
      print(playlist);
      isListed = true;
    }
  }
  else if(input.length > 0)
  {
    if( playlist.indexOf(input) > -1)
    {
      document.write("<p>Adding " + input + " to your playlist.</p>");
    }else
    {
      document.write("<p>Sorry, I couldn't find " + input + ".</p>");
    }
  }
}
