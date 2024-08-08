import { createRealmContext } from "@realm/react";

import { Historic } from "./schemas/historic";
import { Coords } from './schemas/coords';

const realmAccessBehavior: Realm.OpenRealmBehaviorConfiguration = {
    type: Realm.OpenRealmBehaviorType.OpenImmediately
}

export const syncConfig: any = {
    flexible: true,
    newRealmFileBehavior: realmAccessBehavior,
    existingRealmFileBehavior: realmAccessBehavior
}

export const {
    useRealm,
    RealmProvider,
    useQuery,
    useObject
} = createRealmContext({
    schema: [Historic, Coords],
    schemaVersion:1
});