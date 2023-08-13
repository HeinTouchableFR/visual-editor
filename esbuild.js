import { build } from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";
import { sassPlugin } from "esbuild-sass-plugin";

build({
  entryPoints: ["src/VisualEditor.jsx"],
  target: "es2020",
  format: "esm",
  outfile: "dist/VisualEditor.js",
  jsxFactory: "jsx",
  jsxFragment: "Fragment",
  logLevel: "debug",
  bundle: true,
  inject: ["./react-shim.js"],
  plugins: [nodeExternalsPlugin(), sassPlugin()],
}).then(console.log, console.error);
