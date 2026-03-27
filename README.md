# Zona VIP Barbershop

Landing web estática para la barbería **Zona VIP Barbershop**.

## Ejecutar local

Como es un sitio estático, podés abrir `index.html` directamente o levantar un servidor:

```bash
python3 -m http.server 8080
```

Luego abrir: `http://localhost:8080`

## Solución de errores de Copilot Agent (`Unknown tool` / `Unknown model`)

Si VS Code muestra advertencias como:

- `Unknown tool 'github/issue_read'`
- `Unknown model 'Gemini 3 Flash (Preview) (copilot)'`

no es un error de esta landing. Es un problema de compatibilidad en archivos de agente de Copilot (`*.agent.md`) en tu entorno de VS Code.

### Opción rápida (automática)

Ejecutá el script incluido en este repo:

```bash
bash scripts/fix_copilot_agent_errors.sh
```

El script:

- busca `Ask.agent.md`, `Explore.agent.md` y `Plan.agent.md` en rutas comunes,
- crea backup (`.bak`),
- elimina líneas con `github/issue_read`,
- elimina la línea del modelo `Gemini 3 Flash (Preview) (copilot)`.

### Opción manual

1. Abrí los archivos que marca VS Code (`Ask.agent.md`, `Explore.agent.md`, `Plan.agent.md`).
2. Eliminá o cambiá líneas con herramientas no válidas como `github/issue_read`.
3. Eliminá la línea del modelo `Gemini 3 Flash (Preview) (copilot)` para usar el modelo por defecto de Copilot.
4. Actualizá la extensión **GitHub Copilot Chat** a la última versión.
5. Recargá VS Code (`Developer: Reload Window`).

### Nota

Los archivos con error en tu captura están en una ruta global del editor (por ejemplo):

`~/.vscode-remote/data/User/globalStorage/github.copilot-chat/`

Esa ruta es global del editor, no del proyecto.
