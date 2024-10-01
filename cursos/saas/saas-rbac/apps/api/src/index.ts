import {defineAbilityFor} from "@saas/auth"
import { projectSchema } from "@saas/auth/src/models/project"


const project = projectSchema.parse({id: '1', ownerId: '1'})
const ability = defineAbilityFor({role: 'ADMIN', id: '1'})

const userInvites = ability.can('manage', project)


console.log(userInvites)