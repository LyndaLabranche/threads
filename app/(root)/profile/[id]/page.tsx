// import ThreadCard from "@/components/cards/ThreadCard";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
// import { fetchThreadById } from "@/lib/actions/thread.actions";
import { redirect } from "next/navigation";
// import Comment from "@/components/forms/Comment";


const Page = async ({ params }: {params: { id: string}}) => {
    const user= await currentUser();
    if(!user) return null;

    const userInfo = await fetchUser(params.id);
    if(!userInfo?.onboarded) redirect('/onboarding');

    return (
        <section>
            <ProfileHeader />
        </section>
    )
}

export default Page;