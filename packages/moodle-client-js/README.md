# @ava-pro/moodle-client-js

## Exemplo

- Listando as conversas

```ts
import { MoodleClient } from "@ava-pro/moodle-client-js"

async function main() {
  const client = new MoodleClient("https://school.moodledemo.net")

  await client.login("student", "moodle")

  client.getConversations().then((conversations) => {
    conversations.forEach(({ id }) => {
      console.log(`id: ${id} | name: ${name} | members count: ${membercount}`)
    })
  })
}

main()
```
