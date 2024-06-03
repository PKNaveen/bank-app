import AuthForm from "@/components/AuthForm";

export default function page(){
    return(
        <section className="flex-center size-full max-sm:px-6">
            <AuthForm type="sign-up"/>
        </section>
    )
}