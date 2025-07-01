### `write(buffer [, opts, callback, proceedAfterUpload])` [*Server*]

Write `Buffer` to FS and add record to Files collection. This function is asynchronous.

- `buffer` {_Buffer_} - File data as `Buffer`
- `opts` {_Object_} - Recommended properties:
  - `opts.fileName` {_String_} - File name with extension, like `name.ext`
  - `opts.type` {_String_} - Mime-type, like `image/png`
  - `opts.size` {_Number_} - File size in bytes, if not set file size will be calculated from `Buffer`
  - `opts.meta` {_Object_} - Object with custom meta-data
  - `opts.userId` {_String_} - UserId, default _null_
  - `opts.fileId` {_String_} - id, optional - if not set - Random.id() will be used
- `callback` {_Function_} - Triggered after file is written to FS. With `error`, and `fileRef`, where `fileRef` is a new record from DB
- `proceedAfterUpload` {_Boolean_} - Proceed `onAfterUpload` hook (_if defined_) after `Buffer` is written to FS
- Returns {_Files_} - Current FilesCollection instance

```js
import fs from "fs";
import { FilesCollection } from "meteor/plahteenlahti:files";

const imagesCollection = new FilesCollection({ collectionName: "images" });

fs.readFile("/data/imgs/sample.png", (error, data) => {
  if (error) {
    throw error;
  } else {
    imagesCollection.write(
      data,
      {
        fileName: "sample.png",
        fileId: "abc123myId", //optional
        type: "image/png",
      },
      (writeError, fileRef) => {
        if (writeError) {
          throw writeError;
        } else {
          console.log(
            `${fileRef.name} is successfully saved to FS. _id: ${fileRef._id}`
          );
        }
      }
    );
  }
});
```
