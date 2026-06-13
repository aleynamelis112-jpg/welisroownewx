"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle, Instagram } from "lucide-react";

export function AIDesignAssistant() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] -ml-64 -mb-64" />

      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-2 border border-accent/20">
          <Sparkles className="w-4 h-4" />
          Welis Root Wood
        </div>

        <h2 className="text-4xl md:text-7xl font-headline font-bold mb-6">
          Hayalinizdeki Ahşap Tasarımı Birlikte Planlayalım
        </h2>

        <p className="text-lg md:text-2xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Salon, bahçe, dekorasyon veya özel ölçü ahşap tasarımlarınız için bize ulaşın. Size en uygun doğal ahşap ürünü birlikte seçelim.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="w-full sm:w-auto h-14 px-10 bg-accent hover:bg-accent/90 text-white rounded-xl text-lg font-bold"
            asChild
          >
            <Link href="https://wa.me/905475717177" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp ile İletişim
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-14 px-10 bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 rounded-xl text-lg font-bold"
            asChild
          >
            <Link href="https://instagram.com/welis.rootwood" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 mr-2" />
              Instagram'da Takip Et
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
