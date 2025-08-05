import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function RitmiXLeccion1() {
  const [step, setStep] = useState(0);
  const [velocidad, setVelocidad] = useState("");

  const pasos = [
    {
      id: 0,
      contenido: (
        <>
          <h1 className="text-xl font-bold mb-2">🎵 ¡Hola! Soy RitmiX 🎵</h1>
          <p className="mb-4">Bienvenido a la <strong>Lección de Ritmo 1</strong> de Gramatic Music.</p>
          <Button onClick={() => setStep(1)}>Comenzar</Button>
        </>
      ),
    },
    {
      id: 1,
      contenido: (
        <>
          <h2 className="text-lg font-semibold mb-2">1. ¿Qué es el ritmo?</h2>
          <p className="mb-4">
            El ritmo es el <strong>primer elemento musical</strong> que existió. Sobre él se construyen la melodía,
            armonía, forma, contrapunto y hasta las formas de IA musical.
          </p>
          <Button onClick={() => setStep(2)}>Siguiente</Button>
        </>
      ),
    },
    {
      id: 2,
      contenido: (
        <>
          <h2 className="text-lg font-semibold mb-2">2. ¿Por qué es importante?</h2>
          <p className="mb-4">
            Aprender ritmo es <strong>aprender el 50% de una obra musical</strong>. ¡Identificarlo es ganar medio camino
            hacia cualquier repertorio!
          </p>
          <Button onClick={() => setStep(3)}>Siguiente</Button>
        </>
      ),
    },
    {
      id: 3,
      contenido: (
        <>
          <h2 className="text-lg font-semibold mb-2">3. Escritura en tu cuaderno</h2>
          <p className="mb-2">Escribe como título: <strong>Ritmo 1</strong></p>
          <p className="mb-2">Incluye las siguientes figuras con marcadores decorativos:</p>
          <ul className="list-disc ml-5 text-sm">
            <li>Lectura: Negra: TAN / Blanca: TA-A / 2 Corcheas: TAKA / 4 Semicorcheas: CARAMELO</li>
            <li>Duración: Negra: 1 Tiempo / Blanca: 2 Tiempos / 2 Corcheas: 1 Tiempo / 4 Semicorcheas: 1 Tiempo</li>
          </ul>
          <Image src="/mnt/data/Ritmo 1 Las Figuras.png" alt="Figuras Ritmo 1" width={600} height={300} className="my-4" />
          <p>🖊️ Copia lo que ves en la imagen de forma clara y bonita.</p>
          <Button onClick={() => setStep(4)}>Listo</Button>
        </>
      ),
    },
    {
      id: 4,
      contenido: (
        <>
          <h2 className="text-lg font-semibold mb-2">4. Lectura en voz alta</h2>
          <p className="mb-2">Practica con tu voz o palmas en estas velocidades:</p>
          <ul className="list-disc ml-5">
            <li><strong>Lento</strong> - 60 BPM</li>
            <li><strong>Adagio</strong> - 75 BPM</li>
            <li><strong>Andante</strong> - 90 BPM</li>
          </ul>
          <p className="mt-2">Haz 2 vueltas completas por cada velocidad.</p>
          <p className="mt-2 font-semibold">Ejercicio:</p>
          <p className="italic mt-1">
            TAN / TA-A / TAKA / CARAMELO / TAN / TAN / TAKA / TA-A / CARAMELO / TAN /<br />
            TAKA / CARAMELO / TAN / TA-A / TAKA / TAN / CARAMELO / TA-A / TAN / TAKA
          </p>
          <p className="mt-2">✍️ Dibuja la figura sobre cada palabra. Luego intenta leer solo mirando las figuras.</p>
          <Button onClick={() => setStep(5)}>Siguiente</Button>
        </>
      ),
    },
    {
      id: 5,
      contenido: (
        <>
          <h2 className="text-lg font-semibold mb-2">5. Autoevaluación ⭐</h2>
          <p>¿Pudiste leer correctamente el ritmo en las 3 velocidades?</p>
          <div className="flex gap-2 mt-2">
            <Button onClick={() => setStep(6)}>Sí, las 3</Button>
            <Button onClick={() => setStep(6)}>Solo 1 o 2</Button>
            <Button onClick={() => setStep(6)}>Necesito más práctica</Button>
          </div>
        </>
      ),
    },
    {
      id: 6,
      contenido: (
        <>
          <h2 className="text-lg font-semibold mb-2">6. Modo Desafío 🎯</h2>
          <p className="mb-2">Lee el siguiente patrón al revés, en todas las velocidades:</p>
          <p className="italic mb-2">
            TAKA / TAN / TA-A / CARAMELO / TAN / TAKA / TA-A / TAN / CARAMELO / TAKA /<br />
            TAN / TA-A / CARAMELO / TAKA / TAN / TAKA / CARAMELO / TA-A / TAN / TAN
          </p>
          <p className="mb-2">Gana ⭐ por cada lectura correcta. ¡Tú puedes!</p>
          <Button onClick={() => setStep(0)}>Reiniciar</Button>
        </>
      ),
    },
  ];

  return (
    <div className="max-w-xl mx-auto p-4">
      <Card>
        <CardContent className="space-y-4 p-4 text-center">
          {pasos[step].contenido}
        </CardContent>
      </Card>
    </div>
  );
}
