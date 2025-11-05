'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  subject: z.string().min(5, { message: "O assunto deve ter pelo menos 5 caracteres." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export default function ContactForm() {
    const { toast } = useToast();
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Mensagem Enviada!",
            description: "Obrigado por entrar em contato. Responderemos em breve.",
        });
        form.reset();
    }

  return (
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body font-bold text-sm">Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} className="h-11 border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body font-bold text-sm">Email</FormLabel>
                <FormControl>
                  <Input placeholder="seu.email@exemplo.com" {...field} className="h-11 border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body font-bold text-sm">Assunto</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Dúvida sobre programas" {...field} className="h-11 border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body font-bold text-sm">Mensagem</FormLabel>
                <FormControl>
                  <Textarea placeholder="Sua mensagem" {...field} className="h-36 resize-none border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full font-accent font-bold bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#c9a025] h-auto py-3.5 text-base">
            Enviar Mensagem
          </Button>
        </form>
      </Form>
    </div>
  );
}
