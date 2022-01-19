# CheckLastEventStatus UseCase
> Verifique o status do último evento

## Dados
* Id do Grupo

## Fluxo primario
1. Obter os dados do ultimo evento do grupo (data de termino e duracao do mercado de notas)
2. Retornar status "ativo" se o evento ainda não foi encerrado

> ## Fluxo Alternativo: Evento esta no limite do encerramento
2. Retornar status "ativo"

> ## Fluxo alternativo: Evento encerrado, mas está dentro do periodo do mercado das notas
1. Retornar status "em revisao"

> ## Fluxo alternativo: Evento e mercado das notas encerrados
1. Retornar status "encerrado"

> ## Fluxo alternativo: Grupo não tem nenhum evento marcado
1. Retornar status "encerrado".

