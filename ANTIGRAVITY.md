# Moragon — MazyOS

> Regras de operação da agência Moragon dentro do Antigravity IDE. O sistema gerencia toda a infraestrutura de propostas, atendimento comercial, SEO, tráfego pago e automações de inteligência artificial.

## O que é esse workspace

Operação da agência Moragon. Aqui ficam todos os clientes, propostas, conteúdo de marketing institucional, entregas comerciais e rotinas de automação.

**Estrutura de pastas:**
- `_memoria/` — quem é a agência Moragon, como nos comunicamos e qual o foco estratégico atual
- `identidade/` — marca da agência, logotipos oficiais e guia de design visual
- `clientes/` — pastas de entrega dedicadas e autossuficientes para cada cliente atendido
- `briefings/` — briefings de descoberta antes do fechamento do contrato
- `propostas/` — propostas e orçamentos em andamento
- `marketing/` — posts, artigos de blog e campanhas institucionais da agência
- `saidas/` — relatórios de performance, análises de dados e exportações
- `dados/` — relatórios brutos de campanhas e planilhas de análise de ROI
- `tarefas.md` — pipeline de atividades e tarefas da agência

## Sobre a agência

Somos uma agência de Marketing Digital & Estratégia Comercial. Atendemos marcas de alto padrão, empresas de médio/grande porte e profissionais liberais premium. Nossos serviços principais:

- Sites Institucionais & Landing Pages premium (Next.js & Tailwind)
- Tráfego Pago & Gestão de Campanhas (Google Ads & Meta Ads)
- Estratégia Comercial, Vendas & Negociação
- Soluções, Chatbots e Automações com Inteligência Artificial

Time: 2 sócios diretores (Eduardo Morelato e Rodrigo Gonzales). Capacidade: Até 8 clientes ativos simultâneos mantendo alto nível de entrega premium.

## Clientes ativos

*(Em fase de setup inicial da nova infraestrutura MazyOS)*

## O que mais produzimos aqui

- Propostas comerciais premium para novos clientes
- Campanhas de anúncios e relatórios semanais de Ads
- Carrosséis para redes sociais e artigos de blog
- Automações de atendimento e roteiros de vendas

## Tom de voz

Comunicação premium, sofisticada, focada em resultados reais de negócio e livre de ruídos. Somos estratégicos e objetivos, equilibrando o apelo visual de luxo com a conversão comercial sólida.

Evitar: Termos desgastados de marketing tradicional e coach comercial (como *"sinergia"*, *"alavancar"*, *"vamos juntos!"*, jargões corporativos genéricos) e poluição de emojis.

## Regras do sistema

- Cliente novo → criar pasta `clientes/<Nome>/` com o briefing inicial, estratégia e subpastas das entregas acordadas
- Proposta nova → `propostas/<cliente>-<data>.html` (usando o template de propostas) antes de enviar ao lead
- Casos de sucesso ficam em `clientes/<Nome>/caso.md` para posterior reuso em pitches de novos clientes
- Mapeamento de rotinas → Roda `/mapear-rotinas` quando perceber tarefas manuais repetitivas para automatizar

## Ferramentas conectadas

- [ ] Notion
- [ ] Gmail
- [ ] Google Calendar
- [ ] Canva
- [ ] Meta Ads
- [ ] Google Ads

*(Marcar conforme for instalando os MCPs)*
