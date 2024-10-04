import { connectDB } from "@/lib/connectDB"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import authUser from '@/schemas/userSchema'


// export const authOption = {
//     secret: "SeYc/1u0zd3YL1WTGUUgkh2xeFQsAdZy5cFAAKtLcSA=",
//     session: {
//         strategy: "jwt",
//         maxAge: 30 * 24 * 60 * 60,
//         // updateAge: 24 * 60 * 60,
//     },
//     providers: [
//         CredentialsProvider({
//             credentials: {
//                 email: { label: "Email", type: "text", placeholder: "Type Your Email", required: true },
//                 password: { label: "Password", type: "text", placeholder: "Type Your Password", required: true }
//             },
//             async authorize(credentials) {
//                 if (!credentials) {
//                     return null
//                 }
//                 const { email, password } = credentials
//                 const currentUser = users.find(user => user.email === email && user.password === password)
//                 if (currentUser) {
//                     return currentUser
//                 } else { return null }


//             }
//         })
//     ],

//     callbacks: {
//         async jwt({ token, account, user }) {
//             try {
//                 // Persist the OAuth access_token and or the user id to the token right after signin
//                 if (account) {
//                     token.type = user.type;
//                     console.log("JWT Callback - User Type:", token.type, account, user.type);
//                 }
//                 return token;
//             } catch (error) {
//                 console.error("JWT Callback Error:", error);
//                 return token;
//             }
//         },
//         async session({ session, token }) {
//             try {
//                 session.user.type = token.type;
//                 console.log("Session Callback - Session and Token:", session, token);
//                 return session;
//             } catch (error) {
//                 console.error("Session Callback Error:", error);
//                 return session;
//             }
//         }
//     },

//     async session({ session, token }) {
//         session.user.type = token.type
//         console.log("form line : 50", session, token);
//         return session
//     },


// }
// const handler = NextAuth(authOption)



// export { handler as GET, handler as POST }
// import NextAuth from "next-auth"

export const authOption = {
    secret: "SeYc/1u0zd3YL1WTGUUgkh2xeFQsAdZy5cFAAKtLcSA=",

    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Type Email", required: true },
                password: { label: "Password", type: "password", placeholder: "Type Password", required: true }
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null
                }
                const { email, password } = credentials
                // const currentUser = users.find(user => user.email === email && user.password === password)
                const database = await connectDB()
                const currentUser = authUser.findOne({ email })
                if (currentUser) {
                    return currentUser
                } else { return null }

            }
        })
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            try {
                // Persist the OAuth access_token and or the user id to the token right after signin
                if (account) {
                    token.type = user.type;
                    // console.log("JWT Callback - User Type:", token.type, account, user.type);
                }
                return token;
            } catch (error) {
                console.error("JWT Callback Error:", error);
                return token;
            }
        },
        async session({ session, token }) {
            session.user.type = token.type
            // console.log("form line : 50", session, token);
            return session
        },

    }

}

const handler = NextAuth(authOption)

// const users = [
//     {
//         email: "mehedi@gmail.com",
//         password: "hhhh2233",
//         name: "Mehedi Hasan",
//         type: "admin",
//         id: 1
//     },
//     {
//         email: "rifat@gmail.com",
//         password: "Rifat1122",
//         name: "Rifat Hosen",
//         type: "user",
//         id: 2

//     }
// ]

export { handler as GET, handler as POST }