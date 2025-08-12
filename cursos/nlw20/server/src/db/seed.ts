import { seed, reset } from "drizzle-seed";
import { db, client } from "./conn.ts";
import { schema } from "./schema/index.ts";

await reset(db, schema)
await seed(db, schema).refine((f) => {
    return {
        rooms: {
            count: 20,
            columns: {
                name: f.companyName(),
                description: f.loremIpsum(),
            },
        },
    }
})

await client.end()

console.log("seed done")