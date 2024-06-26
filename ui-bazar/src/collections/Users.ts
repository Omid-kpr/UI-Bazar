import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: "users",
    auth: true,
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [{
        name: 'role',
        type: 'select',
        options: [
            { label: 'ادمین', value: 'admin' },
            { label: 'کاربر', value: 'user' }
        ]
    }],
}