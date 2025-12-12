import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	// Ensure SVGR runs before the React plugin so SVGs are transformed
	// Export components as the default export to simplify imports
	plugins: [svgr({ exportAsDefault: true }), react()],
});