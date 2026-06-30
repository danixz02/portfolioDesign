import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

function parseEnvValue(rawValue) {
  const value = rawValue.trim();
  const quoted = value.match(/^(['"])(.*)\1$/);

  if (quoted) {
    return quoted[2];
  }

  return value;
}

export function loadProjectEnv(cwd = process.cwd()) {
  const envFiles = ['.env', '.env.local', '.env.development', '.env.development.local'];

  for (const fileName of envFiles) {
    const filePath = join(cwd, fileName);
    if (!existsSync(filePath)) continue;

    const content = readFileSync(filePath, 'utf8');
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;

      const separatorIndex = trimmed.indexOf('=');
      if (separatorIndex === -1) continue;

      const key = trimmed.slice(0, separatorIndex).trim();
      const value = parseEnvValue(trimmed.slice(separatorIndex + 1));

      if (key && process.env[key] == null) {
        process.env[key] = value;
      }
    }
  }
}
