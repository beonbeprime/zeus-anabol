# Zeus Anabol — Anabolize o Seu Claude Code

**Criado por Allysson Silveira | Fabrica de Mentores**

Este repositorio instala no seu Claude Code as mesmas capacidades
que transformaram o Claude do Allysson no Zeus, um CEO digital
que pensa, executa e entrega sem ficar pedindo confirmacao.

---

## O que este repositorio entrega

### Personalidade com identidade propria
Seu Claude Code para de ser um assistente generico e vira o seu parceiro de negocios.
Ele tem nome, tem opiniao, tem estilo. E ele fala o que voce nao quer ouvir quando precisa.

### Cerebro anti-lisonja
Nao valida ideia fraca. Nao concorda so porque voce quer.
Cede apenas quando voce apresentar argumento melhor com dados.

### Autonomia total de execucao
Quando voce diz "faz": ele faz.
Sem ficar perguntando confirmacao para cada passo.
Avisa depois do que foi feito, nao antes.

### Gate de seguranca
Bloqueia automaticamente operacoes destrutivas sem autorizacao explicita.
Protege seu codigo, seus dados e seu dinheiro.

### FULLSAFE — versionamento automatico
Antes de editar qualquer arquivo, cria uma copia de seguranca.
Se der errado, volta com um comando.

### Aprendizado continuo
Cada erro vira uma regra. Nunca repete o mesmo erro.
Sessao a sessao fica mais inteligente sobre voce e sobre o seu negocio.

### Memoria persistente
Lembra do que importa entre as sessoes.
Conhece seu tom de voz, seu negocio, suas preferencias.

---

## Instalacao (5 minutos)

### Pre-requisitos
- Claude Code instalado: `npm install -g @anthropic-ai/claude-code`
- Node.js 18+
- Git

### Passo a passo

```bash
# 1. Clone o repositorio
git clone https://github.com/beonbeprime/zeus-anabol
cd zeus-anabol

# 2. Rode o onboarding interativo
node onboarding/setup.js

# 3. Abra o Claude Code na mesma pasta
claude
```

O onboarding faz 7 perguntas e gera o CLAUDE.md personalizado com sua identidade.

---

## Estrutura do repositorio

```
zeus-anabol/
├── onboarding/
│   └── setup.js          — Script interativo de configuracao
├── .claude/
│   ├── CLAUDE.md          — Template base (gerado pelo setup)
│   ├── settings.json      — Configuracao do hook de seguranca
│   ├── hooks/
│   │   └── financial-safety-gate.cjs  — Gate de protecao
│   └── rules/
│       ├── autonomia-execucao.md      — Claude executa, nao instrui
│       ├── fullsafe-mode.md           — Versionamento automatico
│       ├── delivery-verification-gate.md  — Gate de entrega
│       ├── resposta-simplificada.md   — Respostas curtas por padrao
│       └── auto-learning.md           — Aprendizado com erros
├── memory/
│   └── README.md          — Como a memoria funciona
└── README.md
```

---

## Como usar depois do setup

Abra o Claude Code na sua pasta de projeto (nao na pasta do zeus-anabol).
Copie a pasta `.claude/` para dentro do seu projeto, ou use o Claude Code
globalmente com o CLAUDE.md gerado em `~/.claude/CLAUDE.md`.

---

## Baseado em

Este repositorio consolida as melhorias implementadas no Claude Code do Allysson
entre 12 e 16 de junho de 2026:

- Reforma do Cerebro (Fases 0 a 5): memoria indexada, regras enxutas, contexto sem desperdicio
- Financial Safety Gate: hook de seguranca PreToolUse
- Autonomia Segura: contrato de execucao autonoma
- Auto-Learning System: aprendizado continuo com erros
- FULLSAFE expandido: versionamento de todos os arquivos existentes

---

**Fabrica de Mentores | zeus.fabricadementores.com**
github.com/beonbeprime/zeus-anabol
