### `findOne([selector, options])` [*Isomorphic*]

Finds the first document that matches the selector, as ordered by sort and skip options.

- `selector` {_String_|_Object_} - [Mongo-Style selector](http://docs.meteor.com/api/collections.html#selectors)
- `options` {_Object_} - [Mongo-Style selector Options](http://docs.meteor.com/api/collections.html#sortspecifiers)
- Returns {_[FileCursor](https://github.com/veliovgroup/Meteor-Files/blob/master/docs/FileCursor.md)_}

```js
import { FilesCollection } from "meteor/plahteenlahti:files";

const imagesCollection = new FilesCollection({ collectionName: "images" });

// Usage:
// Set cursor:
const file = imagesCollection.findOne({ _id: "Rfy2HLutYK4XWkwhm" });
// Generate downloadable link:
file.link();
// Get cursor's data as plain Object:
file.get();
file.get("_id"); // <-- returns sub-property value, if exists
// Get cursor's data as reactive Object
file.with();
// Get cursor as array:
file.fetch();
// Remove record from collection and file from FS
file.remove(function (error) {
  if (error) {
    console.error("File wasn't removed", error);
  }
});

// Direct Collection usage:
imagesCollection.collection.findOne({ _id: "Rfy2HLutYK4XWkwhm" });
// Remove record from collection:
imagesCollection.collection.remove({ _id: "Rfy2HLutYK4XWkwhm" });
```
