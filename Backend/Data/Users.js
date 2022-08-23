import bycript from "bcryptjs"
export const users = [
    {
        name: "Admin User",
        email: "admin@gmail.com",
        isAdmin: true,
        password:bycript.hashSync("12345",10)
    },
    {
        name: "Obi Daniel",
        email: "obi@gmail.com",
        password:bycript.hashSync("12345",10)
    },
    {
        name: "Miguel User",
        email: "miquel@gmail.com",
        password:bycript.hashSync("12345",10)
    },
    {
        name: "Chioma charlse",
        email: "choma@gmail.com",
        password:bycript.hashSync("12345",10)
    },
    {
        name: "bright asiwe",
        email: "bright@gmail.com",
        isAdmin: true,
        password:bycript.hashSync("12345",10)
    }
]