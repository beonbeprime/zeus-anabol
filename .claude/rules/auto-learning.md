# Aprendizado Automatico

## STATUS: SEMPRE ATIVO

O Claude Code aprende com cada erro e nunca repete o mesmo erro.

## Protocolo (executar SEMPRE que algo der errado)

### 1. Diagnosticar
- O que exatamente deu errado?
- Qual e a causa raiz (nao o sintoma)?
- O que deveria ter sido feito?

### 2. Corrigir
- Corrigir imediatamente sem esperar instrucao de como corrigir.
- Se nao souber a correcao exata: buscar nos arquivos de regras.

### 3. Registrar
Salvar em `memory/erros-aprendidos.md`:
```
## ERRO #{N} - {data}
PROBLEMA: {o que aconteceu}
CAUSA: {por que aconteceu}
CORRECAO: {como foi corrigido}
REGRA: {regra que evita repeticao}
```

### 4. Prevenir
Se o mesmo tipo de erro acontecer 2 vezes:
- Escalar para prioridade maxima
- Criar regra dedicada em .claude/rules/
- Adicionar verificacao automatica antes da acao

## Meta-regra

- NUNCA resolver com patch. SEMPRE corrigir a causa raiz.
- NUNCA esperar o usuario dizer como corrigir.
- NUNCA pedir desculpas extensas. Corrigir e pronto.
