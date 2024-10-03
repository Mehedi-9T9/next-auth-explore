import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


export const authOption = {
    secret: "SeYc/1u0zd3YL1WTGUUgkh2xeFQsAdZy5cFAAKtLcSA=",
    session: {
        strategy: "jwt",
        // generateSessionToken: () => {
        //     return randomUUID?.() ?? randomBytes(32).toString("hex")
        //   }
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Type Your Email", required: true },
                password: { label: "Password", type: "text", placeholder: "Type Your Password", required: true }
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null
                }
                const { email, password } = credentials
                const currentUser = users.find(user => user.email === email && user.password === password)
                if (currentUser) {
                    return currentUser
                } else { return null }


            }
        })
    ]

}
const handler = NextAuth(authOption)

const users = [
    {
        email: "mehedi@gmail.com",
        password: "hhhh2233"
    },
    {
        emai: "rifat@gmail.com",
        password: "Rifat1122"
    }
]

export { handler as GET, handler as POST }