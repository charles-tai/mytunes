MyTunes (MT)

Purpose of MT is to play music

A SongModel is a model containing 3 k-v pairs; all v's are strings
- {artist: v, url: v, title: v}

Songs is a collection consisting of SongModel models objects


SongQueue is a model consisting of an array of SongModel data, which have a dequeue data structure (arrays)
- SONGQUE ADDS SONGMODELS ? OR OBJECTS CONTAINING THE DATA IN SONGMODELS?
- [{k: v}, {k: v2}]

SongQueue models are set as the collection objects of SongQueueViews, which render the information in SQ models
- var sqv = new SQV({ collection: sq})

LibraryView renders all Songs collection objects (SongModels)
as LibraryEntryViews

??Library is a Songs instance that is passed to the AppModel

AppModel has a library property
