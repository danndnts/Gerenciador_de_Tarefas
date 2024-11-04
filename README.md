# Gerenciador de Tarefas

Este é um sistema de gerenciamento de tarefas simples que permite adicionar, editar e visualizar tarefas com diferentes prioridades. As tarefas são armazenadas no navegador usando `localStorage`, garantindo que permaneçam salvas mesmo após o fechamento da página.

## Funcionalidades

- **Adicionar Tarefas**: Adicione tarefas com nome, data de conclusão e prioridade.
- **Persistência de Dados**: As tarefas são armazenadas no `localStorage`.
- **Filtro por Status**: Exibe todas as tarefas ou apenas as pendentes.
- **Filtro por Prioridade**: Organiza as tarefas por prioridade (alta, média, baixa).
- **Notificações de Prazo**: Destaca visualmente tarefas que estão próximas do prazo.
- **Edição de Tarefas**: Permite editar uma tarefa existente.

## Estrutura de Arquivos

- `index.html` - Estrutura HTML do sistema.
- `style.css` - Estilos para layout básico.
- `script.js` - Lógica de manipulação do DOM e localStorage.

## Instruções para Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/gerenciador-tarefas.git
