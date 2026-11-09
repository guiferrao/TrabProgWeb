# Trabalho de Desenvolvimento Web

Plataforma de compartilhamento de vídeos em formato vertical focada em conectar profissionais e serviços, desenvolvida com AdonisJS, TypeScript, Edge Templates e SQLite.

## Instalação do Desenvolvimento

1 - Criar o `.env`

```bash
cp .env.example .env
```

2 - Instalar as dependências

```bash
npm install
```

3 - Gerar a chave da aplicação

```bash
node ace generate:key
```

4 - Executar as migrações do banco SQLite

```bash
node ace migration:run
```

## Execução

```bash
npm run dev
```

## Rotas Principais

- **`/`** ou **`/videos`** - Feed principal e busca de vídeos.
- **`/videos/enviar`** - Envio de novos vídeos na plataforma.
- **`/videos/:id`** - Visualização detalhada do vídeo e contato do prestador.
- **`/admin/videos`** - Painel administrativo para gestão e exclusão de vídeos.
- **`/admin/users`** - Painel administrativo para listagem dos usuários e prestadores cadastrados.