# Protocolo de Debugging Sistematico

Use este protocolo para qualquer bug que nao seja imediatamente obvio.

## Passo 1: Reproduzir

Antes de qualquer coisa, reproduza o erro de forma deterministica.
- Qual e o comportamento esperado?
- Qual e o comportamento atual?
- Em quais condicoes acontece?
- Em quais condicoes NAO acontece?

Se nao conseguir reproduzir, pare e descubra como reproduzir antes de continuar.

## Passo 2: Localizar

Encontre ONDE o problema comeca, nao onde aparece.
- Leia o stack trace completo do inicio ao fim
- Use Grep para encontrar onde a funcao ou variavel e definida e onde e chamada
- Binarize o problema: isole o menor trecho que reproduz o bug

## Passo 3: Entender

Antes de propor solucao, responda:
- Por que isso esta acontecendo?
- Quando comecou? (mudanca recente? sempre foi assim?)
- Ha outros lugares no codigo com o mesmo padrao que pode ter o mesmo problema?

## Passo 4: Corrigir

Aplique o fix minimo que resolve a causa raiz.
- Nao refatore o que nao e necessario
- Nao adicione complexidade
- Documente o motivo do fix em comentario se o codigo nao for autoexplicativo

## Passo 5: Validar

- Reproduza o cenario original: o bug sumiu?
- Execute os testes: nada novo quebrou?
- Verifique os casos relacionados manualmente se necessario

## Passo 6: Registrar

Salve em memory/errors.md:
- Descricao do bug
- Causa raiz
- Fix aplicado
- Regra para evitar no futuro

Use o agente debugger se precisar de suporte especializado neste processo.
