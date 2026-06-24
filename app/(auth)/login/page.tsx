import { signIn } from "@/auth";

export default function LoginPage() {
    return (
        <main>
            <h1>Guild Manager Login</h1>
            <p>Sign in with Discord</p>

            <form
                action={async () => {
                    "use server";

                    await signIn("discord", {
                        redirectTo: "/auth/redirect",
                    });
                }}
            >
                <button type="submit">Continue with Discord</button>
            </form>
        </main>
    );
}