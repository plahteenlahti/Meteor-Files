### `addFile(path [, opts, callback, proceedAfterUpload])` [*Server*]

Add local file to FilesCollection from FS.

_Note: You can not use this method on_ `public` _collections. As they supposed to be served without NodeJS (Meteor) participation. But you always can move file to root of your web-server and then add a record to FilesCollection._

- `path` {_String_} - Full path to file, like `/var/www/files/sample.png`
- `opts` {_Object_} - Recommended properties:
  - `opts.fileName` {_String_} - File name with extension, like `name.ext`
  - `opts.meta` {_Object_} - Object with custom meta-data
  - `opts.type` {_String_} - Mime-type, like `image/png`
  - `opts.size` {_Number_} - File size in bytes, if not set - size will be calculated from file
  - `opts.userId` {_String_} - UserId, default _null_
  - `opts.fileId` {_String_} - \_id of inserted file, if not set - Random.id() will be used
- `callback` {_Function_} - Triggered after new record is added to Collection. With `error`, and `fileRef`, where `fileRef` is a new record from DB
- `proceedAfterUpload` {_Boolean_} - Proceed `onAfterUpload` hook (_if defined_) after local file is added to `FilesCollection`
- Returns {_FilesCollection_} - Current FilesCollection instance

```js
import { FilesCollection } from "meteor/plahteenlahti:files";

const imagesCollection = new FilesCollection({ collectionName: "images" });

imagesCollection.addFile("/var/www/files/sample.png", {
  fileName: "sample.png",
  type: "image/png",
  fileId: "abc123AwesomeId",
  meta: {},
});
```
