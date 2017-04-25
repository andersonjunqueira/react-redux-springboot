insert into estado (codigo_ibge,sigla,nome) Values(12,'AC','Acre');  
insert into estado (codigo_ibge,sigla,nome) Values(27,'AL','Alagoas');  
insert into estado (codigo_ibge,sigla,nome) Values(13,'AM','Amazonas');
insert into estado (codigo_ibge,sigla,nome) Values(16,'AP','Amapá');
insert into estado (codigo_ibge,sigla,nome) Values(29,'BA','Bahia');
insert into estado (codigo_ibge,sigla,nome) Values(23,'CE','Ceará');
insert into estado (codigo_ibge,sigla,nome) Values(53,'DF','Distrito Federal');
insert into estado (codigo_ibge,sigla,nome) Values(32,'ES','Espírito Santo');
insert into estado (codigo_ibge,sigla,nome) Values(52,'GO','Goiás');
insert into estado (codigo_ibge,sigla,nome) Values(21,'MA','Maranhão');
insert into estado (codigo_ibge,sigla,nome) Values(31,'MG','Minas Gerais');
insert into estado (codigo_ibge,sigla,nome) Values(50,'MS','Mato Grosso do Sul');
insert into estado (codigo_ibge,sigla,nome) Values(51,'MT','Mato Grosso');
insert into estado (codigo_ibge,sigla,nome) Values(15,'PA','Pará');
insert into estado (codigo_ibge,sigla,nome) Values(25,'PB','Paraíba');
insert into estado (codigo_ibge,sigla,nome) Values(26,'PE','Pernambuco');
insert into estado (codigo_ibge,sigla,nome) Values(22,'PI','Piauí');
insert into estado (codigo_ibge,sigla,nome) Values(41,'PR','Paraná');
insert into estado (codigo_ibge,sigla,nome) Values(33,'RJ','Rio de Janeiro');
insert into estado (codigo_ibge,sigla,nome) Values(24,'RN','Rio Grande do Norte');
insert into estado (codigo_ibge,sigla,nome) Values(11,'RO','Rondônia');
insert into estado (codigo_ibge,sigla,nome) Values(14,'RR','Roraima');
insert into estado (codigo_ibge,sigla,nome) Values(43,'RS','Rio Grande do Sul');
insert into estado (codigo_ibge,sigla,nome) Values(42,'SC','Santa Catarina');
insert into estado (codigo_ibge,sigla,nome) Values(28,'SE','Sergipe');
insert into estado (codigo_ibge,sigla,nome) Values(35,'SP','São Paulo');
insert into estado (codigo_ibge,sigla,nome) Values(17,'TO','Tocantins');

insert into usuario (id, nome, logradouro, complemento, numero, cep, bairro, cidade, uf, pais, login, language) 
values (1, 'NOME DO USUÁRIO', 'UM ENDEREÇO QUALQUER', 'CASA', '10', '70735110', 'ASA NORTE', 'BRASÍLIA', 'DF', 'BRASIL', 'anderson.junqueira@gmail.com', 'br');

insert into telefone(id, id_usuario, numero, tipo)
values (1, 1, '61955551010', 'cel');

insert into telefone(id, id_usuario, numero, tipo)
values (2, 1, '6155551012', 'res');

insert into email(id, id_usuario, email, principal)
values (1, 1, 'anderson.junqueira@gmail.com', 1);
