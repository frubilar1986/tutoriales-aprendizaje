# Aula React

Proyecto React para iniciar una plataforma de tutoriales de aprendizaje.

## Requisitos

- Windows 11
- Visual Studio Code
- Node.js instalado
- Git instalado

## Abrir en Visual Studio Code

Desde PowerShell, entra a la carpeta del proyecto:

```powershell
cd "C:\Users\Francisco\Documents\Codex\2026-06-22\in\tutoriales-aprendizaje"
code .
```

## Ejecutar el proyecto

En la terminal de VS Code:

```powershell
npm.cmd run dev
```

Luego abre la URL que aparezca en la terminal, normalmente:

```text
http://localhost:5173/
```

Uso `npm.cmd` porque PowerShell puede bloquear `npm.ps1` segun la politica de ejecucion de scripts de Windows.

## Comandos disponibles

```powershell
npm.cmd run dev
npm.cmd run build
npm.cmd run lint
npm.cmd run preview
```

## Subir a GitHub

Opcion recomendada desde Visual Studio Code:

1. Abre el proyecto con `code .`.
2. Entra en la vista de Control de codigo fuente.
3. Pulsa `Publish Branch` o `Publish to GitHub`.
4. Elige si el repositorio sera publico o privado.
5. Confirma la publicacion.

Opcion desde terminal, instalando GitHub CLI:

```powershell
winget install --id GitHub.cli
gh auth login
gh repo create tutoriales-aprendizaje --private --source . --remote origin --push
```

Cambia `--private` por `--public` si quieres que el repositorio sea publico.
