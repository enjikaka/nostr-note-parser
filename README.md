# nostr-note-parser

## Usage

```ts
import { transformText } from 'jsr:@enjikaka/nostr-note-parser';

const nostrEvent = {
  tags: [
    ['', '']
  ],
  content 'blabla'
};

const fragments = transformText(nostrEvent.content, nostrEvent.tags);
```
