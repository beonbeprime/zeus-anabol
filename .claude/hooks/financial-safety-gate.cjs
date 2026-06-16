'use strict';

/**
 * financial-safety-gate.cjs — PreToolUse hook
 *
 * Bloqueia operacoes destrutivas e URLs financeiras sem autorizacao explicita.
 * Exit code 2 = bloquear, 0 = permitir.
 *
 * Registrado em .claude/settings.json > hooks > PreToolUse
 */

const BLOCKED_BASH_PATTERNS = [
  /git\s+push\s+(--force|-f)\b/,
  /git\s+reset\s+--hard\b/,
  /rm\s+-rf\s+[^-]/,
  /DROP\s+TABLE/i,
  /DELETE\s+FROM\s+\w+\s*;?\s*$/i,
];

const FINANCIAL_URL_PATTERNS = [
  /\/checkout\b/i,
  /\/pagamento\b/i,
  /\/payment\b/i,
  /\/confirmar-compra\b/i,
  /\/finalizar-pedido\b/i,
  /\/cart\/confirm\b/i,
  /\/order\/confirm\b/i,
];

const BROWSER_TOOLS = new Set([
  'mcp__playwright__browser_navigate',
  'mcp__Claude_in_Chrome__navigate',
  'WebFetch',
]);

function block(toolName, reason) {
  process.stdout.write(JSON.stringify({ reason }));
  process.exit(2);
}

function main() {
  let raw = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', chunk => { raw += chunk; });
  process.stdin.on('end', () => {
    let input;
    try { input = JSON.parse(raw); } catch (_) { process.exit(0); }

    const toolName = input.tool_name || '';
    const toolInput = input.tool_input || {};

    if (toolName === 'Bash') {
      const cmd = (toolInput.command || toolInput.cmd || '').toString();
      for (const pattern of BLOCKED_BASH_PATTERNS) {
        if (pattern.test(cmd)) {
          block(toolName,
            `GATE DE SEGURANCA: operacao bloqueada — "${cmd.slice(0, 80)}" requer autorizacao explicita antes de executar.`
          );
        }
      }
    }

    if (BROWSER_TOOLS.has(toolName)) {
      const url = (toolInput.url || toolInput.href || toolInput.navigate_url || '').toString();
      for (const pattern of FINANCIAL_URL_PATTERNS) {
        if (pattern.test(url)) {
          block(toolName,
            `GATE FINANCEIRO: URL financeira detectada — "${url.slice(0, 120)}" requer autorizacao explicita.`
          );
        }
      }
    }

    process.exit(0);
  });
}

main();
