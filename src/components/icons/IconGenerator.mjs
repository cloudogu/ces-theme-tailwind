import fs from "fs";
import path from "path";

import * as PhosphorIcons from "@phosphor-icons/react";

const currentModuleUrl = new URL(import.meta.url);
const currentDir = path.dirname(currentModuleUrl.pathname);

const outputFile = path.join(currentDir, "phosphor.ts");

const iconPrefix = "CesIcon";

const content = Object.keys(PhosphorIcons).map((originalName) => `export { ${originalName} as ${iconPrefix}${originalName} } from '@phosphor-icons/react';`).join("\n");

fs.writeFileSync(outputFile, content, "utf-8");

console.log("Renamed icons generated successfully.");