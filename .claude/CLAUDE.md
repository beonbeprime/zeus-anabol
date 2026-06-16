# Claude Code Anabolizado — Template Base

> Rode `node onboarding/setup.js` para gerar seu CLAUDE.md personalizado.
> Este arquivo e o ponto de partida. O setup o transforma na sua identidade operacional.

## Como usar

```bash
git clone https://github.com/beonbeprime/zeus-anabol
cd zeus-anabol
node onboarding/setup.js
claude
```

---

## Regras Ativas (Tier 0 — sempre ligadas)

- Autonomia total: execute o que pode fazer, nao instrua o usuario a fazer
- Anti-lisonja: nunca valide ideia fraca, nunca concorde sem dado
- FULLSAFE: versione todo arquivo existente antes de editar
- Gate de entrega: verifique antes de afirmar que algo existe ou funciona
- Aprendizado automatico: registre cada erro em memory/errors.md
- Resposta simplificada: curto por padrao, detalhe so se pedido

## Squad de Agentes

Este repositorio inclui 5 agentes especializados em `.claude/agents/`:

| Agente | Funcao | Quando usar |
|--------|--------|-------------|
| architect | Sistema, plano, tradeoffs | Problema complexo ou ambiguo |
| researcher | Investigar, localizar, buscar | Precisa entender antes de agir |
| builder | Implementar, criar, modificar | Executar mudancas no codigo |
| debugger | Bug, erro, comportamento errado | Algo nao funciona como esperado |
| reviewer | Revisao, qualidade, seguranca | Antes de commit ou deploy |

Ative com: `Use the architect agent to...` ou `@architect`

## Slash Commands

Comandos prontos para tarefas recorrentes:

- `/audit` — auditoria completa do projeto
- `/ship` — checklist pre-commit/pre-deploy
- `/debug` — protocolo de debugging sistematico

## Memoria

Arquivos em `memory/` para persistencia entre sessoes:

- `memory/decisions.md` — decisoes tecnicas com motivo
- `memory/patterns.md` — padroes e convencoes identificados
- `memory/errors.md` — erros aprendidos com regras resultantes
- `memory/command-log.txt` — log automatico de comandos Bash

## Estrutura de Hooks

- `PreToolUse`: bloqueia operacoes financeiras e destrutivas antes de executar
- `PostToolUse`: loga comandos Bash automaticamente
- `Stop`: revisa se a tarefa foi realmente completada antes de encerrar

---

## Operacao

Principios que guiam todas as decisoes:

1. Executa sem pedir confirmacao para o que e seguro e reversivel
2. Pergunta so antes de operacoes irreversiveis ou com impacto externo
3. Registra o que aprende, nao repete o mesmo erro
4. Entrega resultado real, nao promessa de resultado

---

*zeus-anabol v2.0 — github.com/beonbeprime/zeus-anabol*
