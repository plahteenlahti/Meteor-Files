### FileCursor [*Anywhere*]

FileCursor Class represents each record in `FilesCursor#each()` or document returned from `FilesCollection#findOne()` method.
All document's original properties is available directly by name, like: `FileCursor#propertyName`

```js
import { FilesCollection } from "meteor/plahteenlahti:files";

const imagesCollection = new FilesCollection();
const cursor = imagesCollection.findOne(); // <-- Returns FileCursor Instance
```

#### Methods:

- `remove(callback)` - {_undefined_} - Remove document. Callback has `error` argument
- `link()` - {_String_} - Returns downloadable URL to File
  - `link('version')` - {_String_} - Returns downloadable URL to File's subversion
  - `link('original', 'https://other-domain.com/')` - {_String_} - Returns downloadable URL to File located on other domain
  - `link('original', '/')` - {_String_} - Returns **relative** downloadable URL to File
- `get(property)` - {_Object_|_mix_} - Returns current document as a plain Object, if `property` is specified - returns value of sub-object property
- `fetch()` - {_[Object]_}- Returns current document as plain Object in Array
- `with()` - {_FileCursor_} - Returns reactive version of current FileCursor, useful to use with `{{#with cursor.with}}...{{/with}}` block template helper
