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

### Cómo resolverlo

1. Abrí los archivos que marca VS Code (`Ask.agent.md`, `Explore.agent.md`, `Plan.agent.md`).
2. Reemplazá el modelo no soportado por uno válido en tu instalación (por ejemplo un modelo disponible de GitHub Copilot Chat).
3. Eliminá o cambiá herramientas no válidas como `github/issue_read` por las herramientas soportadas por tu versión.
4. Actualizá la extensión **GitHub Copilot Chat** a la última versión.
5. Recargá VS Code (`Developer: Reload Window`).

### Nota

Los archivos con error en tu captura están en:

`~/.vscode-remote/data/User/globalStorage/github.copilot-chat/`

Esa ruta es global del editor, no del proyecto.
