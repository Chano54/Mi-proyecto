"""Junta index.html y las librerías de lib/ en un solo archivo: dist/al-toque-demo.html.
Así la demo se puede mandar o abrir sin internet ni carpetas extra."""
import pathlib, re
root = pathlib.Path(__file__).parent
html = (root / 'index.html').read_text(encoding='utf-8')
def inline(m):
    code = (root / m.group(1)).read_text(encoding='utf-8')
    assert '</script' not in code.lower()
    return '<script>\n' + code + '\n</script>'
out = re.sub(r'<script src="(lib/[^"]+)"></script>', inline, html)
(root / 'dist').mkdir(exist_ok=True)
(root / 'dist' / 'al-toque-demo.html').write_text(out, encoding='utf-8')
print('ok', len(out) // 1024, 'KB')
