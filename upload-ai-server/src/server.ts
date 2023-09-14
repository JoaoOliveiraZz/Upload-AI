import { fastify } from 'fastify';
import { prisma } from './lib/prisma';
import { getAllPromptsRoute } from './routes/getAllPrompts';
import { uploadVideoRoute } from './routes/uploadVideo';
import { createTranscription } from './routes/createTranscription';
import { generateIaCompletion } from './routes/generate-ia-completion';
import { fastifyCors } from '@fastify/cors'

const app = fastify();

app.register(fastifyCors, {
    origin: '*',
})

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute)
app.register(createTranscription)
app.register(generateIaCompletion)

app.listen({
    port: 3333,
}).then(() => {
    console.log("Server is running 🚀");
})