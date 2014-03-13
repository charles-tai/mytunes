MyTunes (MT)

Functionality:
- plays music in the browser

Models-----------------------
A SongModel is a model containing the following properties; all values are strings
- url
- title
- artist

Songs is a collection consisting of SongModel models objects

SongQueue is a model with a property '' that is an array of SongModel data, which has a dequeue data structure (array)
- SONGQUE ADDS SONGMODELS ? OR OBJECTS CONTAINING THE DATA IN SONGMODELS?
- [{k: v}, {k: v2}]

SongQueue models are set as the collection objects of SongQueueViews, which render the information in SQ models
- var sqv = new SQV({ collection: sq})

AppModel has a library property, whose value is a Songs collection object

Views-----------------------
LibraryView renders all Songs collection objects by rendering each SongModel as a LibraryEntryView

PlayerView - the player that the user sees
- initialized in AppView
- model is set to AppModel.currentSong, which is a SongModel
- renders current song playing


AppView renders the AppModel, and instantiates and renders the LibraryView and PlayerView

data.js stores the song objects

Next steps-------------------------

Specs aren't working, but we have the functionality those specs test for. Phillip suggested to add our own trigger events as in the specs, but in our code, and see if our app still functions.
- remove?

When you add a song to the queue, if you try and play from the library, the library song starts playing right away. But if the library song is the same song as the song playing from the queue, the library song doesn't play. The reverse is true. Where is the logic that causes this behavior?

Allow users to remove songs from songqueue.

Extra credit?


