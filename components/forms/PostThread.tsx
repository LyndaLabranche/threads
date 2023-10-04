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
import { Textarea } from "@/components/ui/textarea";
import { useOrganization } from "@clerk/nextjs"

import { threadValidation } from '@/lib/validations/thread';
import "../../app/globals.css";

// import { updateUser } from '@/lib/actions/user.actions';
import { useRouter, usePathname } from "next/navigation"
import { createThread } from '@/lib/actions/thread.actions';

interface Props {
  userId: string;
}

function PostThread({ userId }: Props) {
  const router = useRouter();
  const pathname  = usePathname();
  const { organization } = useOrganization();

  const form = useForm({
        resolver: zodResolver(threadValidation),
        defaultValues: {
            thread: "",
        accountId: userId,
        },
  });
 
  const onSubmit = async (values: z.infer<typeof threadValidation>) => {
    await createThread({ 
        text: values.thread,
        author: userId, 
        communityId: organization ? organization.id : null, 
        path: pathname
    });

    router.push("/");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-10">
        <FormField
        control={form.control}
        name="thread"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col gap-3">
            <FormLabel className="text-base-semibold text-light-2">Content
            </FormLabel>
            <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
              <Textarea rows={15}
              {...field}
              />
            </FormControl>
            <FormMessage /> 
          </FormItem>
        )}
        />

        <Button type="submit" className="bg-primary-500">
            Post Thread
        </Button>
      </form>
    </Form>  
  )
}

export default PostThread;