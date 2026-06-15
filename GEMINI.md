# Moragon - Agency Web

## Visão Geral
Projeto Next.js 16 para o site premium da agência Moragon (Marketing Digital & Estratégia Comercial).

## Estrutura do Projeto
- `app/`: Layout global, configurações de fontes (Poppins, DM Serif Display) e página inicial.
- `components/`: Componentes do site (Header, HeroSection, ServicesSection, TeamSection, ContactSection, Footer, ParticleTunnel, ScrambleButton, etc.).
- `public/`: Assets estáticos.
- `package.json`: Configurado com React 19, Next.js 16, Tailwind CSS 4 e Framer Motion.

## Últimas Alterações Registradas
- **[15/06/2026]** Renomeação de Marca, Correção de Contraste e Inputs
  - Alteradas todas as referências de "Nexus" para a nova marca oficial "Moragon" em metadados, títulos, seções e links do site.
  - Corrigido o design das caixas de inserir texto no formulário de contato, aplicando fundo branco sólido (`bg-white`) e borda nítida com excelente contraste (`border-foreground/35`), tornando os campos perfeitamente visíveis.
  - Implementado o novo sistema restrito de 4 cores da marca (Azul Oficial `#1022AD`, Azul Escuro Profundo, Branco Não Puro/Off-White e Ciano Elétrico) em todas as seções e variáveis CSS globais.
  - Transformada a seção de Serviços de volta para fundo claro com o comportamento padrão e transição suave a partir da Hero.
  - Otimizados os cards e as tags de especialidades da equipe para eliminar poluição visual de cinzas.
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
- **[15/06/2026]** Instalação e Adaptação do MazyOS para Antigravity
  - Clonado e instalado o sistema operacional de negócios MazyOS no workspace da agência Moragon.
  - Adaptada toda a arquitetura de comandos e regras originais de "Claude" para a plataforma "Antigravity", criando o arquivo `ANTIGRAVITY.md` e a pasta `.antigravity/skills/`.
  - Configurados os arquivos de contexto `empresa.md`, `preferencias.md` e `estrategia.md` dentro de `_memoria/` com dados reais dos sócios Eduardo Morelato e Rodrigo Gonzales.
  - Estruturado o guia `identidade/design-guide.md` com a paleta restrita de 4 cores (Azul Oficial, Azul Escuro, Off-White e Ciano) e referências de logos SVGs da agência.
  - Criadas as pastas operacionais (`clientes/`, `briefings/`, `propostas/`, `marketing/`, `saidas/`, `dados/`, `scripts/` e `templates/`) e o arquivo de pipeline `tarefas.md`.

