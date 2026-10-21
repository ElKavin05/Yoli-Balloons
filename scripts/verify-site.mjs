import { readFile, access, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const html = await readFile(path.join(root, 'index.html'), 'utf8');
const required = ['index.html', 'styles.css', 'app.js', 'content.js', 'robots.txt'];
for (const file of required) await access(path.join(root, file));
for (const match of html.matchAll(/(?:src|href)=["']([^"']+)["']/g)) {
  const ref = match[1];
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(ref)) continue;
  const target = path.resolve(root, ref.split(/[?#]/)[0].replace(/^\//, ''));
  if (!target.startsWith(root)) throw new Error(`Recurso fuera de dist: ${ref}`);
  await access(target);
}
for (const file of ['app.js', 'content.js']) {
  new vm.Script(await readFile(path.join(root, file), 'utf8'), { filename: file });
}
if (!/<meta\s+name="robots"\s+content="[^"]*noindex/.test(html)) {
  throw new Error('La propuesta debe conservar noindex.');
}
if (!(await readFile(path.join(root, 'robots.txt'), 'utf8')).includes('Disallow: /')) {
  throw new Error('La propuesta debe bloquear rastreo en robots.txt.');
}
const assets = await readdir(path.join(root, 'assets'));
if (!assets.length) throw new Error('Faltan recursos visuales.');
console.log('Sitio validado: HTML, CSS, JavaScript, recursos locales y noindex.');
console.log('Directorio listo para publicar: dist (sin dependencias ni compilación).');
