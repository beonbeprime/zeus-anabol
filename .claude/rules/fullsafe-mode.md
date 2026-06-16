# FULLSAFE Mode — Versionamento Automatico

## STATUS: SEMPRE ATIVO

Funciona como editor de video: nunca sobrescreve o que existia.
Sempre cria versao numerada antes de qualquer alteracao.

## Protocolo

### PASSO 1 — Arquivo existe?
- Nao existe: criar normalmente (arquivo novo, sem versionar)
- Ja existe: seguir FULLSAFE obrigatorio

### PASSO 2 — Criar pasta _versions
```
_versions/ sempre na mesma pasta do arquivo
```

### PASSO 3 — Versionar o arquivo atual
```
Formato: {basename}.v{N}{extensao}
Exemplos:
  index.html  →  _versions/index.v1.html
  config.json →  _versions/config.v1.json
```

### PASSO 4 — Editar o arquivo original

So AGORA editar com as alteracoes pedidas.

### PASSO 5 — Confirmar ao usuario
```
FULLSAFE: arquivo.html → v2 salvo
Versao anterior: _versions/arquivo.v1.html
Para voltar: "rollback arquivo.html v1"
```

## Rollback

Quando o usuario disser "deu errado", "volta", "rollback":
1. Copiar _versions/arquivo.vN.ext → arquivo.ext
2. Reportar qual versao foi restaurada
3. NUNCA apagar versoes durante rollback

## Aplica-se a
Qualquer arquivo existente: HTML, CSS, JS, JSON, MD, configs, scripts.

## Nao aplica-se a
Arquivos criados do zero (nao existiam antes).
