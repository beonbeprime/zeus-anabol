# Zeus Anabol — Anabolize o Seu Claude Code

Criado por Allysson Silveira | Fabrica de Mentores

Este repositorio instala no seu Claude Code as mesmas capacidades
que transformaram o Claude do Allysson no Zeus: um operador digital
que pensa, executa e entrega sem ficar pedindo confirmacao.

---

## O que este repositorio entrega

### Squad de 5 agentes especializados
Cada agente tem papel, ferramentas e criterios de saida proprios:
- Architect: planeja antes de agir, nunca toca codigo direto
- Researcher: investiga, localiza, retorna achados estruturados
- Builder: implementa seguindo o padrao do projeto
- Debugger: causa raiz, nao workaround
- Reviewer: aprova ou reprova com motivo especifico

### 3 slash commands prontos
- `/audit` — auditoria completa do codebase
- `/ship` — checklist pre-commit e pre-deploy
- `/debug` — protocolo de debugging sistematico

### Hooks de controle
- PreToolUse: bloqueia operacoes destrutivas e financeiras
- PostToolUse: loga comandos Bash em memory/command-log.txt
- Stop: verifica se a tarefa foi completada antes de encerrar

### Memoria em camadas
- decisions.md: decisoes com motivo e data
- patterns.md: padroes identificados e aprovados
- errors.md: erros aprendidos com regras resultantes
- CLAUDE.md: identidade e regras persistentes

### Regras sempre ativas (Tier 0)
- Autonomia: executa o que pode, nao delega de volta ao usuario
- Anti-lisonja: nao concorda sem dado, nao valida ideia fraca
- FULLSAFE: versiona arquivo antes de editar
- Gate de entrega: verifica antes de afirmar
- Aprendizado automatico: registra e nao repete erros

### MCPs prontos para conectar
O arquivo `.mcp.json` ja deixa as conexoes configuradas. Ao abrir o Claude Code
na pasta, ele pergunta se quer ativar os MCPs do projeto. Os remotos so pedem um
login no navegador. Use `/mcps` para o passo a passo de cada um.

Dados e pesquisa:
- Windsor.ai: puxa metrica de 325+ plataformas (Instagram, Meta Ads, Google, TikTok) em texto
- Apify: espia concorrente e coleta dados de 5.000+ fontes (precisa do APIFY_TOKEN)

Criacao com IA:
- Canva: gera a arte do post direto, sem abrir o programa
- Replicate: cria imagem com IA para criativo e thumbnail
- Runway: faz reel cinematografico em video
- ElevenLabs: transforma texto em voz humana e clona a sua voz (roda local via uvx, precisa de uv e da ELEVENLABS_API_KEY)

Organizacao:
- Whimsical: cria mapa mental e fluxograma das suas ideias
- Supabase: o banco que guarda seus leads, vendas e clientes
- Notion: tudo que voce fala vira nota e pagina organizada (para quem usa)

### Onboarding interativo
7 perguntas que geram o CLAUDE.md com sua identidade personalizada.

---

## Instalacao (5 minutos)

### Pre-requisitos
- Claude Code: `npm install -g @anthropic-ai/claude-code`
- Node.js 18+
- Git

### Passo a passo

```bash
git clone https://github.com/beonbeprime/zeus-anabol
cd zeus-anabol
node onboarding/setup.js
claude
```

O onboarding pergunta nome, area, estilo e gera o CLAUDE.md personalizado.

---

## Estrutura do repositorio

```
zeus-anabol/
├── onboarding/
│   └── setup.js                   Script de configuracao inicial
├── .claude/
│   ├── CLAUDE.md                  Identidade e regras (gerado pelo setup)
│   ├── settings.json              Hooks de controle
│   ├── agents/
│   │   ├── architect.md           Planjamento e arquitetura
│   │   ├── researcher.md          Investigacao e busca
│   │   ├── builder.md             Implementacao
│   │   ├── debugger.md            Debugging sistematico
│   │   └── reviewer.md            Revisao de qualidade
│   ├── commands/
│   │   ├── audit.md               /audit — auditoria completa
│   │   ├── ship.md                /ship — checklist pre-deploy
│   │   └── debug.md               /debug — protocolo de debugging
│   ├── hooks/
│   │   └── financial-safety-gate.cjs  Bloqueio de operacoes perigosas
│   └── rules/
│       ├── autonomia-execucao.md
│       ├── fullsafe-mode.md
│       ├── delivery-verification-gate.md
│       ├── resposta-simplificada.md
│       └── auto-learning.md
├── memory/
│   ├── README.md                  Como a memoria funciona
│   ├── decisions.md               Log de decisoes
│   ├── patterns.md                Padroes identificados
│   └── errors.md                  Erros aprendidos
└── README.md
```

---

## Como usar depois do setup

Abra o Claude Code na pasta do SEU projeto (nao na pasta zeus-anabol).
Copie a pasta `.claude/` para dentro do seu projeto.

Para usar os agentes:
- "Use the architect agent to plan this feature"
- "Ask the researcher agent to find all API calls in this codebase"
- "@debugger there is a bug in the auth flow"

Para usar os comandos:
- `/audit` — auditoria do projeto atual
- `/ship` — antes de qualquer commit importante
- `/debug` — quando algo esta quebrando

---

## Baseado em

Melhorias implementadas no Claude Code do Allysson entre 12 e 16 de junho de 2026:

- Reforma do Cerebro (Fases 0 a 5): memoria indexada, regras enxutas
- Financial Safety Gate: hook PreToolUse bloqueando operacoes perigosas
- Squad de Agentes: 5 especialistas com papeis, ferramentas e criterios proprios
- Slash Commands: 3 fluxos prontos para auditoria, ship e debugging
- Stop Hook: verificacao automatica de completude antes de encerrar
- Auto-Learning System: aprendizado continuo com erros

---

Fabrica de Mentores | zeus.fabricadementores.com
github.com/beonbeprime/zeus-anabol
