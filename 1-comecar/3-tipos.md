# Tipos de Wireds

O sistema Wired é dividido em categorias distintas, cada uma identificada por uma cor e formato para facilitar a assimiliação de sua função lógica dentro da pilha. Compreender essas divisões é o primeiro passo para criar automações eficientes.

## 1. Ativadores: O "Quando"
Os Ativadores são representados pelas caixas **marrons**. Eles monitoram o quarto e "disparam" a execução para o resto da pilha quando um evento específico ocorre.

| Ativador | Descrição |
| :--- | :--- |
| **Habbo anda no Mobi** | Ativado quando um usuário, bot ou pet pisa no mobi selecionado. |
| **Habbo diz algo** | Disparado quando um usuário digita uma palavra ou frase específica no chat. |
| **Habbo faz ação** | Ativa quando um usuário realiza ações como acenar, sentar, dançar ou ficar em modo "afk". |
| **Batida** | Detecta quando um mobi em movimento colide com um usuário. |
| **Repetir Efeito** | Executa a pilha em intervalos regulares (de 0,5 segundos a 60 segundos). |
| **Estado do Mobi é modificado** | Ativado quando o estado de um mobi é alterado (ex: girar uma alavanca ou abrir uma porta). |
| **Habbo entra no Quarto** | Dispara assim que um usuário entra ou sai do quarto. |
| **Variável Mudou** | Ativa quando uma variável específica é atribuída, excluída ou tem seu valor alterado. |

## 2. Efeitos: O "O Que"
Os Efeitos são as caixas **cinzas ou prateadas**. Algumas possuem a cor **preta** para representar que sua função é <u>negativa</u> ("oposta"). Eles executam a ação física ou lógica resultante da ativação.

| Efeito | Descrição |
| :--- | :--- |
| **Teleportar para Mobi** | Teleporta um Habbo para um mobi selecionado. |
| **Mover e Rotacionar Mobi** | Altera a posição e/ou a direção em que um mobi está posicionado. |
| **Configurar a Altura do Mobi** | Incrementa, decrementa ou define a posição vertical do mobi selecionado. |
| **Mostrar mensagem** | Cria uma mensagem de texto no chat do quarto de forma privada ao usuário ou de forma geral para todos os usuários. |
| **Entrar na Equipe** | Faz com que o Habbo entre em uma das equipes selecionadas. |
| **Faz pilhas de wireds** | Aciona a execução de outra pilha, ignorando quaisquer condições presentes nela. |

### Efeitos Negativos
Alguns Efeitos possuem a cor **preta** para representar que sua execução é **invertida**. Em outras palavras, esses Efeitos são executados caso as Condições não permitam a execução natural da pilha. Em linguagens de programação gerais, essa lógica é encontrada nos blocos lógicos "SENÃO": `SE <condições> ENTÃO <efeitos> SENÃO <efeitos negativos> FIM`.

| Efeito Negativo | Descrição |
| :--- | :--- |
| **Escrever nos logs** | Cria uma mensagem de registro para o criador do quarto fazer auditoria. |
| **Faz pilhas** | Aciona a execução de outra pilha, ignorando quaisquer condições presentes nela. |
| **Envia sinal** | Emite um sinal através de uma antena, para que outra pilha possa captar esse sinal e iniciar uma nova execução, além de ser capaz de transmitir itens selecionados. |

## 3. Condições: O "Se"
As Condições são as caixas **brancas**. Elas servem como filtros de segurança para garantir que o efeito só ocorra sob circunstâncias específicas.

| Condição | Descrição |
| :--- | :--- |
| **Membro da Equipe** | Valida se o Habbo é membro da equipe pré-definida. |
| **Estado e Posição do Mobi combinam** | Valida se o mobi selecionado está no estado e/ou posição que foi memorizada. |
| **Habbo Ativador está no Mobi** | Valida se o usuário que acionou o ativador está em cima do mobi selecionado. |

### Condições Negativas
Algumas Condições possuem a cor **preta** para representar que sua função é **oposta** da sua versão original. Em linguagens de programação gerais, esse comportamento pode ser compreendido como a **negação** da condição em sua versão original.

| Condição Negativa | Descrição |
| :--- | :--- |
| **Ativador NÃO está no Mobi** | Valida se o usuário que acionou o ativador **NÃO** está em cima do mobi selecionado. |
| **NÃO é membro de grupo** | Valida se o usuário acionador **NÃO** está no grupo. |
| **NÃO há Mobis em cima** | Valida se o mobi selecionado **NÃO** possui mobis em cima |

## 4. Seletores: O "Quem ou Qual"
Os seletores usam a cor **azul-escuro** e são considerávelmente mais altos do que as demais caixas Wired. Eles permitem definir alvos dinâmicos em massa, superando o limite tradicional de 20 mobis por caixa. Veja a demonstração feita pela equipe durante o lançamento desse tipo de Wired: https://www.youtube.com/watch?v=yAP6NjiT_XU.

| Seletor | Função |
| :--- | :--- |
| **Habbos na Área** | Seleciona todos os Habbos dentro de uma área retangular desenhada no quarto. |
| **Mobi por Tipo** | Seleciona todos os mobis de um mesmo tipo (ID) presentes no quarto. |
| **Habbos no Grupo** | Seleciona todos os Habbos que forem membros do grupo. |
| **Mobis na Vizinhança** | Seleciona todos os mobis que estiverem na vizinhança de um determinado ponto de referência. |

Utilizar múltiplos seletores na mesma pilha fará com que a seleção deles sejam mescladas, e em cada um você conseguirá configurar se quer inverter a seleção (selecionar tudo exceto o que foi configurado) ou então se quer filtrar (intersecção) as demais seleções que estiverem na mesma pilha.

## 5. Extras: O "Como"
Estes componentes modificam o comportamento padrão da pilha ou adicionam funcionalidades avançadas.

| Extra | Função |
| :--- | :--- |
| **Efeito Aleatório** | A cada execução da pilha, escolhe aleatoriamente um dos efeitos da pilha para executar. |
| **Efeito Inédito** | A cada execução da pilha, escolhe um efeito da pilha que ainda não foi executado até que todos sejam. |
| **Física do Movimento** | Altera como os mobis se comportam ao colidir ou atravessar outros objetos. |
| **Pelo menos uma condição é verdadeira** | Capaz de alterar como as Condições são avaliadas e até mesmo fazer com que Condições de outras pilhas também sejam avaliadas. |
| **Campo Nome de Usuário** | Cria um campo dinâmico para ser adicionado aos Efeitos que criam mensagens para ser substituído pelo nome de um usuário. |

---

### Utilitários Adicionais
Existem mobis auxiliares que não são "caixas" de programação, mas são fundamentais:
- **Antenas:** Usadas para enviar e receber sinais sem fios entre pilhas distantes.
- **Conector de Quarto:** Teleporte capaz de teletransportar um usuário de um quarto para outro sem que o usuário precise interagir com o mobi.
- **Cronômetros:** Cronômetros especializados para serem utilizados com Wired, elevando as capacidades dos cronômetros originais feitos para Battle Banzai e Freeze.
- **Tabela de classificação:** Embora possuem a mesma aparência das demais caixas Wired, não possuem nenhum tipo de configuração pois possuem um comportamento próprio, registrando o resultado de partidas Battle Banzai e Freeze automaticamente.
