import { createRealmContext } from "@realm/react";

import { Historic } from "./schemas/historic";

export const {
    useRealm,
    RealmProvider,
    useQuery,
    useObject
} = createRealmContext({
    schema: [Historic]
});