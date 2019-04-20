export type NODE_ENV = "production" | "development" | "testing";

export interface ApolloConfig {
  client: any;
  server: any;
}

export interface Env {
  ["NODE_ENV"]: NODE_ENV;
  ["PROJECT_TITLE"]: string;
  ["FRONTEND_HOST"]: string;
  ["FRONTEND_PORT"]: number;
  ["BACKEND_HOST"]: string;
  ["BACKEND_PORT"]: number;
  ["HTTPS"]: "true" | "false";
  ["PUBLIC_PATH"]: string;
}

export interface ConfigServer {
  host: string;
  port: number;
  url: string;
}

export interface ConfigBackendServer {
  graphql: ConfigServer & {
    directory: string;
  };
}

export type ConfigFrontendServer = ConfigServer & {};

export interface Config {
  env: Env;
  production: boolean;
  publicPath: string;
  frontend: ConfigFrontendServer;
  backend: ConfigBackendServer;
  apollo: any;
}