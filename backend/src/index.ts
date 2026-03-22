import { loadEnv } from "./config/env.js";
import { createAppServer } from "./server.js";

const env = loadEnv();
const server = createAppServer(env);

server.listen(env.port, env.host, () => {
  console.log(
    `[vaultdao-backend] listening on http://${env.host}:${env.port} for ${env.stellarNetwork}`,
  );
});
