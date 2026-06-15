# Nexus - Agency Web

## Visão Geral
Projeto Next.js 16 para o site premium da agência Nexus (Marketing Digital & Estratégia Comercial).

## Estrutura do Projeto
- `app/`: Layout global, configurações de fontes (Poppins, DM Serif Display) e página inicial.
- `components/`: Componentes do site (Header, HeroSection, ServicesSection, TeamSection, ContactSection, Footer, ParticleTunnel, ScrambleButton, etc.).
- `public/`: Assets estáticos.
- `package.json`: Configurado com React 19, Next.js 16, Tailwind CSS 4 e Framer Motion.

## Últimas Alterações Registradas
- **[15/06/2026]** Integração da nova identidade visual (Logos e Favicon)
  - Modificada a cor do arquivo `logo.svg` físico de laranja (`#CC5F06`) para o azul oficial do site (`#1022AD`).
  - Copiada a logo compacta para `public/icon.svg` e `app/icon.svg` para servir de favicon do site de forma nativa.
  - Criado o componente React centralizado em `components/logos.tsx` contendo a `LogoExtensiva` e `LogoIcon` com preenchimento dinâmico (`currentColor`).
  - Substituído o logotipo textual `"NEXUS."` pela `LogoExtensiva` no `Header` e no `Footer`.
  - Adicionados detalhes com o símbolo `LogoIcon` acima dos títulos das seções de Serviços, Equipe e Contato, melhorando a consistência da marca ao longo de toda a página.
- **[15/06/2026]** Inicialização do monitoramento pelo agente Antigravity.
  - Escaneamento completo do projeto Next.js realizado com sucesso.
  - Identificados componentes principais da interface e animações interativas.
  - Criado o arquivo `GEMINI.md` para monitoramento contínuo das atividades de desenvolvimento.
