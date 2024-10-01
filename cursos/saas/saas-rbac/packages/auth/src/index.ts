import { createMongoAbility, CreateAbility, MongoAbility, AbilityBuilder } from '@casl/ability';
import { User } from './models/user';
import { permissions } from './permissions';
import { usertSubject } from './subjects/user';
import { projectSubject} from './subjects/project';
import { z } from 'zod';
import { organizationSubject } from './subjects/organization';
import { inviteSubject } from './subjects/invite';
import { billingSubject } from './subjects/billing';

export * from './models/organization';
export * from './models/project';
export * from './models/user';

const AppAbilitiesSchema = z.union([
    usertSubject,
    projectSubject,
    organizationSubject,
    inviteSubject,
    billingSubject,
    z.tuple([
        z.literal('manage'),
        z.literal('all')
    ])
])

type AppAbilities = z.infer<typeof AppAbilitiesSchema>

export type AppAbility = MongoAbility<AppAbilities>;
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>;
export function defineAbilityFor(user: User) {
    const builder = new AbilityBuilder(createAppAbility)
    if (typeof permissions[user.role] !== 'function') {
        throw new Error('Invalid role')
    }
    permissions[user.role](user, builder)

    const ability = builder.build({
        detectSubjectType: (object) => object.__typename
    })

    return ability

}