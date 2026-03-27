#!/usr/bin/env bash
set -euo pipefail

TARGETS=(
  "$HOME/.vscode-remote/data/User/globalStorage/github.copilot-chat/ask-agent/Ask.agent.md"
  "$HOME/.vscode-remote/data/User/globalStorage/github.copilot-chat/explore-agent/Explore.agent.md"
  "$HOME/.vscode-remote/data/User/globalStorage/github.copilot-chat/plan-agent/Plan.agent.md"
  "$HOME/.config/Code/User/globalStorage/github.copilot-chat/ask-agent/Ask.agent.md"
  "$HOME/.config/Code/User/globalStorage/github.copilot-chat/explore-agent/Explore.agent.md"
  "$HOME/.config/Code/User/globalStorage/github.copilot-chat/plan-agent/Plan.agent.md"
)

patched_any=0

for file in "${TARGETS[@]}"; do
  if [[ -f "$file" ]]; then
    cp "$file" "$file.bak"

    # Quita modelos no soportados (deja que Copilot use el modelo por defecto).
    sed -i '/Gemini 3 Flash (Preview) (copilot)/d' "$file"

    # Quita herramientas no soportadas para evitar warnings del validador.
    sed -i '/github\/issue_read/d' "$file"

    echo "✅ Corregido: $file (backup: $file.bak)"
    patched_any=1
  fi
done

if [[ "$patched_any" -eq 0 ]]; then
  echo "⚠️ No se encontraron archivos .agent.md en rutas conocidas."
  echo "   Revisá la ruta exacta que muestra VS Code y aplicá los mismos cambios manualmente:"
  echo "   - eliminar líneas con: github/issue_read"
  echo "   - eliminar línea con modelo: Gemini 3 Flash (Preview) (copilot)"
fi
