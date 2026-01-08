# Introdução

A modelagem de dados tem como objetivo organizar a informação de forma lógica, consistente e sustentável ao longo do tempo. Um bom modelo não apenas armazena dados, mas representa corretamente a realidade do negócio, evitando redundâncias, inconsistências e perdas de informação. Problemas como dados duplicados, informações contraditórias, necessidade de atualizações manuais em vários locais e perda de dados após exclusões são sintomas clássicos de uma modelagem deficiente.

Para combater esses problemas, a teoria de bancos de dados relacionais introduz o conceito de Dependências Funcionais, que constitui a base formal para a definição de chaves e para o processo de normalização.

### Conceito de Dependência Funcional

Uma Dependência Funcional (DF) expressa um relacionamento semântico entre atributos de uma relação, indicando que o valor de um atributo (ou conjunto de atributos) é suficiente para determinar, de forma única, o valor de outro atributo (ou conjunto de atributos).

Formalmente, diz-se que existe uma dependência funcional A → B quando, para cada valor de A, existe exatamente um valor correspondente de B. Em outras palavras, conhecendo o valor de A, é possível determinar o valor de B com certeza. Essa relação é direcional: o fato de A determinar B não implica que B determine A.

A pergunta fundamental que orienta a identificação de uma dependência funcional é:
“Se eu souber o valor de X, consigo saber o valor de Y sem ambiguidade?”
Se a resposta for afirmativa, então existe uma dependência funcional de X para Y.

### Exemplo Ilustrativo

Considere uma relação FUNCIONÁRIO composta pelos atributos BI, NOME e DEPARTAMENTO. O BI (Bilhete de Identidade) identifica unicamente um funcionário. Assim, para cada valor de BI, existe um único nome e um único departamento associados. Nesse contexto, diz-se que BI determina funcionalmente NOME e DEPARTAMENTO, ou seja, BI → NOME e BI → DEPARTAMENTO.

Por outro lado, o nome de um funcionário não é, necessariamente, único. Dois funcionários distintos podem partilhar o mesmo nome, o que torna impossível identificar de forma inequívoca o BI ou o departamento apenas com base nesse atributo. Portanto, NOME não determina BI nem DEPARTAMENTO, evidenciando que dependências funcionais não são simétricas.

### Importância das Dependências Funcionais na Modelagem

As dependências funcionais desempenham um papel central na modelagem de dados, pois explicitam quem é o “dono” de cada informação dentro do esquema relacional. Ao indicar qual atributo determina outro, a DF define onde um dado deve existir e de onde ele deve ser derivado, evitando redundância e inconsistência.

Além disso, as dependências funcionais são o principal instrumento para a identificação de chaves primárias e chaves candidatas. Um conjunto de atributos capaz de determinar todos os demais atributos da relação, por meio de dependências funcionais, constitui uma chave. Dessa forma, as DFs fornecem a base teórica necessária para decidir quais atributos identificam unicamente uma tupla.

Outro aspecto essencial é que as DFs permitem diagnosticar falhas de modelagem. A presença de determinadas dependências pode indicar que uma tabela concentra informações demais ou mistura conceitos distintos, sinalizando a necessidade de decomposição. Por fim, todas as formas normais — da Primeira Forma Normal (1FN) até a Forma Normal de Boyce-Codd (BCNF) — são definidas exclusivamente em função das dependências funcionais. Assim, pode-se afirmar que a normalização é, na essência, a reorganização das tabelas com base nas DFs.

## Tipos de Dependências Funcionais

As dependências funcionais podem assumir diferentes formas, conforme a estrutura dos atributos envolvidos e o tipo de relação que estabelecem.

Uma dependência funcional simples ocorre quando um único atributo determina outro. Esse é o caso clássico de identificadores únicos, como BI → NOME. Já uma dependência funcional composta ocorre quando é necessário um conjunto de atributos para determinar outro. Por exemplo, em um contexto acadêmico, a nota de um aluno em uma disciplina pode depender simultaneamente do identificador do aluno e do identificador da disciplina, caracterizando a dependência (ID_ALUNO, ID_DISCIPLINA) → NOTA.

No contexto de chaves compostas, é fundamental distinguir entre dependência funcional total e parcial. Diz-se que uma dependência é total quando o atributo dependente necessita de toda a chave composta para ser determinado. Caso contrário, quando o atributo depende apenas de parte da chave, ocorre uma dependência funcional parcial, o que caracteriza uma violação da Segunda Forma Normal. Esse tipo de dependência indica que determinados atributos não pertencem logicamente à relação e devem ser separados em outra tabela.

Outro tipo relevante é a dependência funcional transitiva, que ocorre quando um atributo não-chave depende de outro atributo não-chave, o qual, por sua vez, depende da chave primária. Nessa situação, a chave determina o atributo final apenas indiretamente. Dependências transitivas violam a Terceira Forma Normal e são responsáveis por redundâncias e inconsistências, especialmente quando informações descritivas são armazenadas em tabelas que não lhes pertencem conceitualmente.

# Conclusão

As dependências funcionais constituem o alicerce conceitual do modelo relacional. Elas não são meros detalhes técnicos, mas sim a representação formal do significado dos dados. Compreender e identificar corretamente as DFs é essencial para construir modelos consistentes, normalizados e alinhados à realidade do negócio.

Em síntese, modelar dados sem dependências funcionais bem definidas é organizar tabelas sem compreender a informação que elas carregam. Um bom projetista de bancos de dados começa pelas dependências funcionais e, a partir delas, constrói todo o restante do modelo.
