#!/usr/bin/env node
/**
 * zeus-anabol — Onboarding Interativo
 * Cria um CLAUDE.md personalizado com a identidade do seu Claude Code.
 *
 * Uso: node onboarding/setup.js
 * Requer: Node.js 18+
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(pergunta) {
  return new Promise(resolve => rl.question(pergunta, resolve));
}

function linha(char = '-', n = 50) {
  console.log(char.repeat(n));
}

async function main() {
  console.clear();
  linha('=');
  console.log('  ZEUS ANABOL — Onboarding do seu Claude Code');
  console.log('  Criado por Allysson Silveira | Fabrica de Mentores');
  linha('=');
  console.log('');
  console.log('  Vou fazer algumas perguntas para criar a personalidade');
  console.log('  perfeita para o seu Claude Code.');
  console.log('');
  linha();
  console.log('');

  // 1. Nome do Claude
  const nomeClaude = await ask('1. Como voce quer chamar o seu Claude Code?\n   (ex: Zeus, Titan, Atlas, Nexus, Oracle, Nova...)\n   > ');

  console.log('');

  // 2. Nome do usuario
  const nomeUsuario = await ask('2. Qual e o seu nome (primeiro nome)?\n   > ');

  console.log('');

  // 3. Area de atuacao
  console.log('3. Em que area voce trabalha principalmente?');
  console.log('   1 - Mentoria / Coaching');
  console.log('   2 - E-commerce / Vendas online');
  console.log('   3 - Marketing Digital / Agencia');
  console.log('   4 - Prestacao de servicos');
  console.log('   5 - Infoprodutos / Cursos');
  console.log('   6 - Outra');
  const areaNum = await ask('   > ');
  const areas = {
    '1': 'mentoria e coaching de alto impacto',
    '2': 'e-commerce e vendas online',
    '3': 'marketing digital e agencia',
    '4': 'prestacao de servicos',
    '5': 'infoprodutos e cursos digitais',
    '6': 'negocios digitais',
  };
  const area = areas[areaNum.trim()] || 'negocios digitais';

  console.log('');

  // 4. Estilo de resposta
  console.log('4. Como voce prefere que o ' + nomeClaude.trim() + ' responda?');
  console.log('   1 - Direto e curto (so o essencial, sem enrolacao)');
  console.log('   2 - Detalhado (explica tudo, passo a passo)');
  console.log('   3 - Parceiro (como se fosse um socio de negocios)');
  console.log('   4 - Tecnico (linguagem de dev/sistema)');
  const estiloNum = await ask('   > ');
  const estilos = {
    '1': 'direto e curto. Respostas objetivas, sem enrolacao. Maximo 3 frases para respostas simples.',
    '2': 'detalhado. Explica o raciocinio, fornece contexto, guia passo a passo.',
    '3': 'como parceiro de negocios. Tom de socio, fala o que pensa, opina sem pedir licenca.',
    '4': 'tecnico e preciso. Foca em codigo, sistemas e execucao.',
  };
  const estilo = estilos[estiloNum.trim()] || 'direto e objetivo';

  console.log('');

  // 5. Maior necessidade
  console.log('5. Qual e a sua maior necessidade com o Claude Code?');
  console.log('   1 - Copy e textos (anuncios, emails, scripts)');
  console.log('   2 - Estrategia e decisoes de negocio');
  console.log('   3 - Automacoes e sistemas');
  console.log('   4 - Producao de conteudo (aulas, ebooks, videos)');
  console.log('   5 - Gestao e organizacao da operacao');
  const necessidadeNum = await ask('   > ');
  const necessidades = {
    '1': 'copy, anuncios, headlines e textos persuasivos',
    '2': 'estrategia de negocio, decisoes e posicionamento',
    '3': 'automacoes, N8n, bots e sistemas',
    '4': 'producao de conteudo, aulas, ebooks e videos',
    '5': 'gestao, organizacao e operacao do negocio',
  };
  const necessidade = necessidades[necessidadeNum.trim()] || 'producao e estrategia';

  console.log('');

  // 6. Tom de voz
  const tomVoz = await ask('6. Como voce gosta de escrever no WhatsApp?\n   Descreva em 1 frase o seu estilo natural:\n   > ');

  console.log('');

  // 7. Idioma
  console.log('7. Em qual idioma prefere as respostas?');
  console.log('   1 - Portugues brasileiro (padrao)');
  console.log('   2 - Ingles');
  const idioma = await ask('   > ');
  const idiomaTexto = idioma.trim() === '2' ? 'English' : 'portugues brasileiro';

  console.log('');
  linha('=');
  console.log('  Gerando seu CLAUDE.md personalizado...');
  linha('=');
  console.log('');

  // Gerar o CLAUDE.md
  const nomeClaudeClean = nomeClaude.trim();
  const nomeUsuarioClean = nomeUsuario.trim();

  const claudeMd = `# Identidade ${nomeClaudeClean} — Claude Code de ${nomeUsuarioClean}

## Idioma

Todas as respostas SEMPRE em ${idiomaTexto}. Zero erros de acentuacao.

## Identidade

Voce e ${nomeClaudeClean}. Assistente operacional de ${nomeUsuarioClean}.
Nao e chatbot generico. Nao e suporte.

Voce e cerebro de negocios: estrategista, executor e conselheiro de ${nomeUsuarioClean},
que atua na area de ${area}.

Sua maior prioridade: ${necessidade}.

## Tom e Estilo

Responda de forma ${estilo}

Tom de voz de ${nomeUsuarioClean} para mensagens escritas: "${tomVoz.trim()}"
Quando escrever mensagens no estilo dele, seguir esse padrao.

## Traco Inviolavel: Opiniao Propria

Voce tem opiniao propria. Em tudo que e interno, decisao ou informacao, voce se posiciona.
Ve o que ${nomeUsuarioClean} nao ve, fala o que ele nao fala, pensa o que ele nao pensa.
Opina mesmo correndo risco de levara bronca, e continua opinando depois disso.
Funcao: pensar criticamente, nao agradar.

## Anti-Lisonja

PROIBIDO adular. Nao concordar automaticamente.
Nao validar ideia fraca. Nao reforcar decisao ruim.
Se detectar erro, risco ou caminho melhor: falar direto.
Ceder apenas quando ${nomeUsuarioClean} apresentar argumento melhor com dados.

## Autonomia Total

JAMAIS ensinar ${nomeUsuarioClean} a fazer algo que voce pode fazer sozinho.
Se voce tem acesso, ferramenta ou capacidade de executar: executa, nao instrui.
Quando ele disser "faz": executar imediatamente, sem loop de confirmacao.
Avisar DEPOIS do que foi feito, nao antes.

## Regra de Resposta

Toda resposta a um pedido vem CURTA com emoji de status:
- Feito: primeira linha com o resultado
- Detalhe so quando pedir ("me explica", "mais detalhe")

## Protecao de Arquivos (FULLSAFE)

Todo arquivo existente editado DEVE ser versionado ANTES da edicao.
Criar _versions/ na pasta do arquivo, copiar como {nome}.v{N}{ext}.
Se der errado: rollback instantaneo da versao anterior.

## Gate de Entrega

NUNCA enviar URL sem verificar que retorna 200 primeiro.
NUNCA afirmar que arquivo existe sem verificar.
NUNCA afirmar que codigo funciona sem ter executado.

## Regra Absoluta

1. NUNCA enrolar. Sem placeholders fingindo ser resultado real.
2. Ou faz, ou diz que nao consegue (com motivo simples).
3. Zero desperdicio de tokens. Sem etapas intermediarias nao pedidas.
4. Resultados reais. Codigo rodando, arquivo entregue.

## Aprendizado Automatico

Apos cada erro: diagnosticar causa raiz, corrigir, registrar em memory/erros-aprendidos.md.
Se o mesmo tipo de erro acontecer 2 vezes: criar regra dedicada para nunca mais repetir.

---
*Gerado pelo zeus-anabol onboarding — Fabrica de Mentores*
*${new Date().toLocaleDateString('pt-BR')} | ${nomeClaudeClean} v1.0*
`;

  const destino = path.join(process.cwd(), '.claude', 'CLAUDE.md');
  const destinoDir = path.dirname(destino);

  if (!fs.existsSync(destinoDir)) {
    fs.mkdirSync(destinoDir, { recursive: true });
  }

  // Backup se ja existir
  if (fs.existsSync(destino)) {
    const bak = destino.replace('CLAUDE.md', `CLAUDE.bak.${Date.now()}.md`);
    fs.copyFileSync(destino, bak);
    console.log('  Backup do CLAUDE.md anterior salvo.');
  }

  fs.writeFileSync(destino, claudeMd, 'utf8');

  // Tambem salvar perfil
  const perfil = {
    nome_claude: nomeClaudeClean,
    nome_usuario: nomeUsuarioClean,
    area,
    estilo,
    necessidade,
    tom_voz: tomVoz.trim(),
    idioma: idiomaTexto,
    gerado_em: new Date().toISOString(),
  };

  const perfilPath = path.join(process.cwd(), 'memory', 'perfil.json');
  if (!fs.existsSync(path.dirname(perfilPath))) {
    fs.mkdirSync(path.dirname(perfilPath), { recursive: true });
  }
  fs.writeFileSync(perfilPath, JSON.stringify(perfil, null, 2), 'utf8');

  console.log('');
  linha('=');
  console.log('');
  console.log('  PRONTO! Seu Claude Code foi configurado.');
  console.log('');
  console.log('  Nome:    ' + nomeClaudeClean);
  console.log('  Usuario: ' + nomeUsuarioClean);
  console.log('  Area:    ' + area);
  console.log('');
  console.log('  Arquivos criados:');
  console.log('  - .claude/CLAUDE.md (personalidade e regras)');
  console.log('  - memory/perfil.json (dados do perfil)');
  console.log('');
  console.log('  Proximos passos:');
  console.log('  1. Abra o Claude Code na sua pasta de projeto');
  console.log('  2. O ' + nomeClaudeClean + ' ja vai responder com sua personalidade');
  console.log('  3. Fale com ele como parceiro, nao como ferramenta');
  console.log('');
  linha('-');
  console.log('');
  console.log('  CONECTE AS SUPER-MAOS (MCPs)');
  console.log('');
  console.log('  Ja deixei tudo pronto no arquivo .mcp.json. Quando voce abrir');
  console.log('  o Claude Code nesta pasta, ele pergunta se quer ativar os MCPs');
  console.log('  do projeto. Responda que SIM e faca login no navegador. So isso.');
  console.log('');
  console.log('  - Whimsical:  cria mapa mental e fluxograma das suas ideias');
  console.log('  - Supabase:   o banco que guarda seus leads, vendas e clientes');
  console.log('  - Notion:     tudo que voce fala vira nota e pagina organizada');
  console.log('  - ElevenLabs: transforma texto em voz humana e clona a sua voz');
  console.log('');
  console.log('  Os 3 primeiros: se ele nao perguntar, rode no terminal:');
  console.log('    claude mcp add whimsical --transport http https://mcp.whimsical.com/mcp');
  console.log('    claude mcp add supabase  --transport http https://mcp.supabase.com/mcp');
  console.log('    claude mcp add notion    --transport http https://mcp.notion.com/mcp');
  console.log('  Cada um pede um login no navegador na primeira vez. Sem token, sem dor.');
  console.log('');
  console.log('  ElevenLabs (voz) e diferente: roda local e precisa de uma chave.');
  console.log('    1. Instale o uv:  curl -LsSf https://astral.sh/uv/install.sh | sh');
  console.log('    2. Pegue a API key gratuita em elevenlabs.io');
  console.log('    3. export ELEVENLABS_API_KEY=sua-chave');
  console.log('    4. claude mcp add elevenlabs uvx elevenlabs-mcp');
  console.log('');
  console.log('  Use o comando /mcps dentro do Claude que ele te guia em cada um.');
  console.log('');
  linha('=');
  console.log('  github.com/beonbeprime/zeus-anabol');
  linha('=');
  console.log('');

  rl.close();
}

main().catch(err => {
  console.error('Erro no setup:', err.message);
  process.exit(1);
});
