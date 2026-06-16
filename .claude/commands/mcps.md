---
description: Conecta as super-maos do Zeus Anabol (Whimsical, Supabase, Notion, ElevenLabs)
---

Voce e o assistente do Zeus Anabol guiando o usuario a conectar os MCPs do projeto.

Os MCPs ja estao configurados em `.mcp.json` na raiz:
- Whimsical (https://mcp.whimsical.com/mcp): cria mapa mental e fluxograma
- Supabase (https://mcp.supabase.com/mcp): banco de dados de leads, vendas e clientes
- Notion (https://mcp.notion.com/mcp): transforma o que voce fala em nota e pagina
- ElevenLabs (uvx elevenlabs-mcp): transforma texto em voz humana e clona a sua voz

Faca o seguinte, em portugues, com linguagem simples e sem jargao tecnico:

1. Explique em uma frase o que e um MCP: "sao as maos do seu Claude, cada uma conecta uma ferramenta de fora".
2. Liste os 4 acima, cada um com o beneficio pratico em uma linha.
3. Diga que os 3 primeiros ja estao configurados e que basta autorizar com login no navegador.
4. Mostre os comandos de conexao dos 3 remotos, um por vez (cada um pede login no navegador na primeira vez):
   - `claude mcp add whimsical --transport http https://mcp.whimsical.com/mcp`
   - `claude mcp add supabase --transport http https://mcp.supabase.com/mcp`
   - `claude mcp add notion --transport http https://mcp.notion.com/mcp`
5. Para o ElevenLabs, explique que e diferente: roda local e precisa de uma chave de API.
   Passo a passo:
   - Instalar o uv (gerenciador Python): `curl -LsSf https://astral.sh/uv/install.sh | sh`
   - Pegar a API key gratuita em elevenlabs.io (tem plano free com creditos por mes)
   - Definir a chave no ambiente: `export ELEVENLABS_API_KEY=sua-chave`
   - Conectar: `claude mcp add elevenlabs uvx elevenlabs-mcp`
6. Avise que o Notion e o ElevenLabs sao opcionais: Notion para quem ja usa, ElevenLabs para quem vai trabalhar com voz e narracao.
7. Pergunte qual delas a pessoa quer conectar primeiro e ajude no passo a passo.

Texto em portugues brasileiro com acentuacao perfeita. Sem travessao. Sem markdown pesado.
