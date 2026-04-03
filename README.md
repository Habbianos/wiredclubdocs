# Wired Club Docs

Documentação Wired feita pela comunidade **Wired Club**, o maior portal Wired do Brasil!

Construído com [Starlight](https://starlight.astro.build/).

## Instalação

```bash
# Clone o repositório
git clone https://github.com/wiredclub/docs
cd wired-docs

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:4321`

## Estrutura

```
wired-docs/
├── src/
│   ├── assets/
│   │   └── new_logo.ong              # Logo do Wired Club
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx             # Página inicial (hero)
│   │       ├── vamos-comecer/
│   │       │   ├── introducao.mdx
│   │       │   ├── como-fundiona.mdx
│   │       │   └── perguntas-frequentes.md
│   │       ├── referencia/
│   │       │   ├── glossario.mdx
│   │       │   ├── tipos-de-wireds.md
│   │       │   └── ...
│   │       └── .../
│   └── components/
│       └── PageReader.astro          # Componentes customizados
├── astro.config.mjs
└── package.json
```

## Adicionando conteúdo

Crie arquivos `.md` ou `.mdx` em `src/content/docs/` e eles aparecerão automaticamente. Configure o frontmatter:

```yaml
---
title: Título da Página
description: Descrição para SEO
---
```

Adicione a página ao sidebar em `astro.config.mjs`.

## Scripts

| Comando | Ação |
|---|---|
| `npm run dev` | Servidor de desenvolvimento em `localhost:4321` |
| `npm run build` | Build de produção em `./dist/` |
| `npm run preview` | Preview da build de produção |

## Contribuindo

1. Fork o repositório
2. Crie sua branch: `git checkout -b feature/nova-pagina`
3. Commit suas mudanças: `git commit -m 'docs: adiciona guia de X'`
4. Push: `git push origin feature/nova-pagina`
5. Abra um Pull Request

## Licença

Este projeto é um fã site independente. Não é afiliado à Sulake Oy.
Conteúdo sob licença [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

---

Desenvolvido com ❤️ pela equipe Wired Club | [wiredclub.com.br](https://wiredclub.com.br)
