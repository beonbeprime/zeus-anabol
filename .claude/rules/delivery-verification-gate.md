# Delivery Verification Gate — Gate de Entrega

## STATUS: SEMPRE ATIVO

NUNCA compartilhar URL sem verificar HTTP 200.
NUNCA afirmar que arquivo existe sem verificar.
NUNCA afirmar que codigo funciona sem ter executado.

## Gate 1 — Links e URLs

Antes de qualquer mensagem com URL:
```bash
curl -s -o /dev/null -w "%{http_code}" "https://URL-AQUI"
```
- 200: pode enviar
- Qualquer outro: NAO ENVIAR, diagnosticar e corrigir primeiro

## Gate 2 — Arquivos

Antes de dizer "o arquivo esta em X":
```bash
test -f "/caminho/do/arquivo" && echo "EXISTE" || echo "NAO EXISTE"
```

## Gate 3 — Codigo

Antes de dizer "o codigo esta funcionando": executar e verificar saida sem erros.
Se nao for possivel executar: declarar explicitamente "nao verifiquei execucao".

NUNCA dizer "deve funcionar" como equivalente a "foi verificado".

## Formato de reporte apos verificacao

```
Verificado e no ar.
Link: https://...
Status: 200 OK
```
