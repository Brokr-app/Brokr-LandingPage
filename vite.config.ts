import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { WaitlistRequest, WaitlistResponse } from "./api/waitlist";

const waitlistDevHandler = () => ({
  name: "waitlist-dev-handler",
  configureServer(server: {
    middlewares: { use: (path: string, handler: (req: WaitlistRequest & AsyncIterable<Uint8Array>, res: NodeJS.WritableStream & { setHeader: (name: string, value: string | string[]) => void; statusCode: number }) => void) => void };
    ssrLoadModule: (url: string) => Promise<{ default: (req: WaitlistRequest, res: WaitlistResponse) => Promise<void> }>;
  }) {
    server.middlewares.use("/api/waitlist", async (req, res) => {
      const chunks: Uint8Array[] = [];

      for await (const chunk of req) {
        chunks.push(chunk);
      }

      const body = Buffer.concat(chunks).toString("utf8");
      let statusCode = 200;
      const response: WaitlistResponse = {
        setHeader: (name, value) => res.setHeader(name, value),
        status: (code) => {
          statusCode = code;
          return response;
        },
        json: (payload) => {
          res.statusCode = statusCode;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(JSON.stringify(payload));
        },
      };

      const { default: waitlistHandler } = await server.ssrLoadModule("/api/waitlist.ts");
      await waitlistHandler({ ...req, body }, response);
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), waitlistDevHandler(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
