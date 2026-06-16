# Checklist Pre-Ship

Execute este checklist completo antes de qualquer commit ou deploy importante.

## Verificacoes obrigatorias

### 1. Codigo
- [ ] Leia todos os arquivos modificados desde o ultimo commit
- [ ] Confirme que a mudanca resolve o problema original
- [ ] Verifique se nao ha codigo de debug (console.log, breakpoints, TODO urgentes)
- [ ] Confirme que o padrao de codigo esta consistente com o restante do projeto

### 2. Testes
- [ ] Execute os testes existentes
- [ ] Confirme que todos passam
- [ ] Verifique se algum caso critico nao esta coberto

### 3. Seguranca
- [ ] Nenhuma chave, senha ou token no codigo
- [ ] Inputs do usuario sao validados
- [ ] Nenhuma operacao destrutiva sem confirmacao

### 4. Integridade
- [ ] O build funciona (se aplicavel)
- [ ] As dependencias estao atualizadas no package.json (se aplicavel)
- [ ] Variaveis de ambiente necessarias estao documentadas

### 5. Comunicacao
- [ ] O commit message descreve o que e por que, nao o como
- [ ] Se e um deploy: a URL ou endpoint foi testado apos o deploy

## Saida esperada

Para cada item: PASSOU, FALHOU ou NAO APLICAVEL.
Para os que FALHARAM: diga exatamente o que precisa ser corrigido antes de continuar.
Nao marque como PASSOU sem ter verificado de verdade.
