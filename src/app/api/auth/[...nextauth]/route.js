import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    session: {
        strategy: "jwt",
        // generateSessionToken: () => {
        //     return randomUUID?.() ?? randomBytes(32).toString("hex")
        //   }
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Type Your Email", require: true },
                password: { label: "Password", type: "text", placeholder: "Type Your Password", require: true }
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null
                }
                return true

            }
        })
    ]

})

export { handler as GET, handler as POST }