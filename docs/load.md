# Download remote file over HTTP

Download remote file over HTTP to the file system of a _Server_. Download is efficient, runs in chunks writing data as available directly to FS via stream without holding it in RAM. If error or timeout occurred — unfinished file will get removed from file system.

```js
/*
 * @locus Server
 */

FilesCollection#load(url [, opts, callback, proceedAfterUpload]);
```

Write file to file system from remote URL (external resource) and add record to FilesCollection

- `url` {_String_} - Full address to file, like `https://example.com/sample.png`
- `opts` {_Object_} - Recommended properties:
  - `opts.fileName` {_String_} - File name with extension, like `name.ext`
  - `opts.headers` {_Object_} - Request HTTP headers, to use when requesting the file
  - `opts.meta` {_Object_} - Object with custom meta-data
  - `opts.type` {_String_} - Mime-type, like `image/png`, if not set - mime-type will be taken from response headers
  - `opts.size` {_Number_} - File size in bytes, if not set - file size will be taken from response headers
  - `opts.userId` {_String_} - UserId, default: `null`
  - `opts.fileId` {_String_} - id, optional - if not set - Random.id() will be used
  - `opts.timeout` {_Number_} - timeout in milliseconds, default: `360000` (_6 mins_); Set to `0` to disable timeout; _Disabling timeout not recommended, sockets won't get closed until server rebooted_
- `callback` {_Function_} - Triggered after first byte is received. With `error`, and `fileRef`, where `fileRef` is a new record from DB
- `proceedAfterUpload` {_Boolean_} - Proceed `onAfterUpload` hook (_if defined_) after external source is loaded to FS
- Returns {_FilesCollection_} - Current FilesCollection instance

```js
/*
 * @locus Server
 */

import { FilesCollection } from "meteor/plahteenlahti:files";
const imagesCollection = new FilesCollection({ collectionName: "images" });

imagesCollection.load(
  "https://raw.githubusercontent.com/veliovgroup/Meteor-Files/master/logo.png",
  {
    fileName: "logo.png",
    fileId: "abc123myId", //optional
    timeout: 60000, // optional timeout
    meta: {},
  }
);
```
