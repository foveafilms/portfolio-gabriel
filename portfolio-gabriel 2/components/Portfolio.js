import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="p-4 sm:p-6 grid gap-6 max-w-6xl mx-auto">
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Gabriel Castiella</h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-4">
          Filmmaker | Técnico de Precisión | Relojero Mecánico
        </p>
        <p className="mb-2 text-sm sm:text-base">Bilbao · infofovea@gmail.com · 660 860 007</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="https://www.instagram.com/fovea__films/" target="_blank">
            <Button>Instagram</Button>
          </Link>
          <Link href="https://www.youtube.com/watch?v=IlR86gzOJ9I" target="_blank">
            <Button variant="outline"><Youtube className="mr-2 h-4 w-4" /> Reel</Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">Contacto</h2>
        {submitted ? (
          <p className="text-green-600 text-center text-lg">Gracias por tu mensaje. ¡Te responderé pronto!</p>
        ) : (
          <form
            className="grid gap-4 max-w-xl mx-auto"
            action="https://formspree.io/f/xnqeegnn"
            method="POST"
            onSubmit={() => setSubmitted(true)}
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2 rounded w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              className="border p-2 rounded w-full h-32"
              required
            ></textarea>
            <Button type="submit">Enviar</Button>
          </form>
        )}
      </section>
    </div>
  );
}