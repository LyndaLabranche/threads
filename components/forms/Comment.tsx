"use client"

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import Image from 'next/image';

import { commentValidation } from '@/lib/validations/thread';
import { addCommentToThread, createThread } from '@/lib/actions/thread.actions';

import { useRouter, usePathname } from "next/navigation";

import "../../app/globals.css";

interface Props {
    threadId: string;
    currentUserImg: string;
    currentUserId: string;
}

const Comment = ({ threadId, currentUserImg, currentUserId} : Props) => {
    const router = useRouter();
    const pathname  = usePathname();

    const form = useForm({
        resolver: zodResolver(commentValidation),
        defaultValues: {
            thread: ""
        },
    });

    const onSubmit = async (values: z.infer<typeof commentValidation>) => {
        await addCommentToThread(threadId, values.thread, JSON.parse(currentUserId), pathname);

        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
                <FormField
                control={form.control}
                name="thread"
                render={({ field }) => (
                    <FormItem className="flex w-full items-center gap-3">
                        <FormLabel>
                            <Image 
                            src={currentUserImg}
                            alt="Profile image"
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                            />
                            </FormLabel>
                        <FormControl className="border-none bg-transparent">
                            <Input
                            type="text"
                            placeholder="Comment..." 
                            {...field}
                            className="no-focus text-light-1 outline-none"
                            />
                        </FormControl>
                        <FormMessage /> 
                    </FormItem>
                )}
                />
                
                <Button type="submit" className="comment-form_btn">
                    Reply
                </Button>
            </form>
        </Form>  
        
    )
}

export default Comment;