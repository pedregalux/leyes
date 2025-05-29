import { z, defineCollection } from 'astro:content';

// Definimos los valores posibles para las categorías
const categorias = ['Participación', 'Transparencia', 'Probidad', 'Justicia', 'Medio Ambiente'] as const;

// Definimos los valores posibles para los estados de clasificación
const estadosClasificacion = ['Alta', 'Moderada', 'Baja'] as const;

// Definimos el esquema de la colección de leyes
const leyesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    fecha: z.string(),
    autores: z.string(),
    categorias: z.array(z.enum(categorias)),
    estadoAvance: z.string(),
    clasificacion1: z.enum(estadosClasificacion),
    textoClasificacion1: z.string(),
    clasificacion2: z.enum(estadosClasificacion),
    textoClasificacion2: z.string(),
    clasificacion3: z.enum(estadosClasificacion),
    textoClasificacion3: z.string(),
  })
});

// Exportamos las colecciones
export const collections = {
  'proyectos': leyesCollection,
};

// Exportamos las constantes para uso en otros archivos
export { categorias, estadosClasificacion };
