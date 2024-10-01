import { z } from 'zod'

export const usertSubject = z.tuple([
    z.union([
        z.literal('manage'),
        z.literal('invite'),
        z.literal('get'),
        z.literal('update'),
        z.literal('delete')
    ]),
    z.literal('User')
])


export type UsertSubject = z.infer<typeof usertSubject>