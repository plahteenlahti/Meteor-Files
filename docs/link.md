# Link; or get downloadable URL

Use [`fileUrl`](https://github.com/veliovgroup/Meteor-Files/blob/master/docs/template-helper.md) helper with Blaze to get _downloadable_ URL to a file.

There are two options to get _downloadable_ URL to the uploaded file using `.link()` method:

- Using `.link()` method of [_FilesCollection_ instance](https://github.com/veliovgroup/Meteor-Files/blob/master/docs/constructor.md) — **No need to have a subscription**
- Using `.link()` method of [_FileCursor_ instance](https://github.com/veliovgroup/Meteor-Files/blob/master/docs/FileCursor.md) — Use it when you have a subscription or local static collection

## FilesCollection#link

Use `.link()` method of [_FileCursor_ instance](https://github.com/veliovgroup/Meteor-Files/blob/master/docs/FileCursor.md) to create _downloadable_ link from _file's_ plain object. To get an _Object_ use `FilesCollection#collection.findOne({})` of for example inside [`end` event](https://github.com/veliovgroup/Meteor-Files/blob/master/docs/insert.md) on the _Client_ and [`onAfterUpload`](https://github.com/veliovgroup/Meteor-Files/blob/master/docs/constructor.md) on the _Server_

```js
FilesCollection#link(fileRef, version, URIBase); // [*Isomorphic*]
```

- `fileRef` {_Object_} - Object returned from MongoDB collection or [after upload](https://github.com/veliovgroup/meteor-files-website/blob/master/imports/client/upload/upload-form.js#L194-L205)
- `version` {_String_|_void 0_} - [OPTIONAL] File's subversion name, default: `original`. If requested subversion isn't found, `original` will be returned
- `URIBase` {_String_} - [OPTIONAL] base URI (domain), default: `ROOT_URL` or `MOBILE_ROOT_URL` on _Cordova_.
- Returns {_String_} - Absolute URL to file

## FileCursor#link

Use `.link()` method of [_FileCursor_ instance](https://github.com/veliovgroup/Meteor-Files/blob/master/docs/FileCursor.md) to create _downloadable_ link from a cursor returned for example from [`FilesCollection#findOne({})`](https://github.com/veliovgroup/Meteor-Files/blob/master/docs/findOne.md)

```js
FileCursor#link(version, URIBase); // [*Isomorphic*]
```

- `version` {_String_|_void 0_} - [OPTIONAL] File's subversion name, default: `original`. If requested subversion isn't found, `original` will be returned
- `URIBase` {_String_} - [OPTIONAL] base URI (domain), default: `ROOT_URL` or `MOBILE_ROOT_URL` on _Cordova_.
- Returns {_String_} - Full URL to file

## Required fields:

```js
import { FilesCollection } from "meteor/plahteenlahti:files";
const imagesCollection = new FilesCollection({ collectionName: "images" });

imagesCollection.findOne(
  {},
  {
    fields: {
      _id: 1,
      public: 1,
      versions: 1, // <-- only when versioning is used
      extension: 1,
      _downloadRoute: 1,
      _collectionName: 1,
    },
  }
);
```

## Examples

```js
import { FilesCollection } from "meteor/plahteenlahti:files";
const imagesCollection = new FilesCollection({ collectionName: "images" });

// Usage:
imagesCollection.collection.find({}).forEach(function (fileRef) {
  imagesCollection.link(fileRef);
});

imagesCollection.findOne({}).link();
// Get thumbnail subversion
imagesCollection.findOne({}).link("thumbnail");
// Equals to above
const fileRef = imagesCollection.collection.findOne({});
imagesCollection.link(fileRef);

// Change domain:
imagesCollection.link(fileRef, "original", "https://other-domain.com/");
// Relative path to domain:
imagesCollection.link(fileRef, "original", "/");
```
