'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Image from "next/image"

export default function GitHubButton() {
    const handleSignIn = async () => {
        const supabase = createClientComponentClient<Database>()
        await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: "http://localhost:3000/auth/callback"
            }
        })
    }
    return <button onClick={handleSignIn}
        className="hover:bg-gray-800 p-8 rounded-xl">
        <Image src="/github-mark-white.png"
            alt="GitHub logo"
            width={100}
            height={100} />
    </button>
}