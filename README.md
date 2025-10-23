# README

## TESTING

- create a test file: `sum.test.ts`

- import the file you want to test: `sum`

> [!EXAMPLE] EXAMPLE:

```typescript
// sum.test.ts

import { expect, test } from "vitest";
import { sum } from "../utils/sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

```bash

npm run test

```

```bash

npx vitest src/__test__/dom/button.test.tsx
npx vitest --testNamePattern="button-test"
npx vitest 'src/__test__/node/**/*'
npx vitest 'src/__test__/dom/**/*'

npx vitest --watch src/__test__/dom
npx vitest --watch src/__test__/node
npx vitest --watch --testNamePattern="[button-test]"

```


