//Homework Assignment #1: Data Types

//strings
var songName = "In Christ Alone"
var artist = "Newsboys"
var genre = "Contemporary Christian Hymn"
var songWriter = "Stuart Townend"
//numbers
var yearWritten = 2001
//array
var attributeList = [songName, artist, genre, songWriter, yearWritten];
//object and identifying attributes
var song = {
    songName: "In Christ Alone",
    artist: "Newsboys",
    genre: "Contemporary Christian Hymn",
    songWriter: "Stuart Townend",
    yearWritten: "2001",
    whoIsArtist: function() {
        console.log("The group performing this song is " + this.artist)
    }
}

console.log(songName);
console.log(artist);
console.log(genre);
console.log(songWriter);
console.log(yearWritten);

//declaration of boolean, that the variable contains an array
console.log(Boolean(attributeList));

//declaration of an attribute of the object
console.log(song.songName)

//declaration of function within object
song.whoIsArtist();

