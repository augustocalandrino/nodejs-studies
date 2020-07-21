## Node.js Studies

#### O que é Node.js:
Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos.
Criado por Ryan Dahl em 2009, busca migrar a programação do Javascript do cliente (frontend) para os servidores, criando assim, aplicações de alta escalabilidade (como um servidor web), manipulando milhares de conexões e eventos simultâneos em tempo real numa única máquina física.

Foi implementado baseado no interpretador V8 JavaScript Engine (interpretador de JavaScript em C++ com código aberto do Google, utilizado no Chrome), com desenvolvimento mantido pela fundação Node.js em parceria com a [Linux Foundation](http://https://pt.wikipedia.org/wiki/Linux_Foundation "Linux Foundation").

#### Vantagens:
- **Flexibilidade**
	O Node.js possui o gerenciador de pacotes reusáveis NPM (Node Package Manager), o maior repositório de softwares, dando ao interpretador um potencial a ser utilizada em qualquer situação. O pacote mais conhecido é o Express.js, um framework completo para desenvolvimento de aplicações Web.
- **Leveza**
	Um ambiente Node.js não exige muitos recursos computacionais tradicionais. Se utilizado em conjunto com a ferramentas Docker, o ganho na velocidade de deploy e replicação de máquinas pode ser muito significativo e, em ambientes escaláveis, de micro-serviços e serverless, representa menos custo e mais eficiência. Um exemplo de uso é uma aplicação de conversa/bate papo (webchat).
- **Suporte**
	Conta com suporte das principais empresas de serviços de armazenamento na nuvem, como a AWS, Google Cloud e, Microsoft Azure, com suporte nativo ao Node.JS.

------------

### Comandos utilizados nas aplicações:
- **Inicializando o projeto e criando arquivo package.json**
	npm init -y

- **Istalando dependências e Bibliotecas**
- Instalando Express
	npm install express

- Instalando nodemo (recarregar a página automaticamente, após alguma alteração)
	npm install -D nodemo
	npm run dev (subir)

- Instalando Mongoose - ORM de DB não relacional
	npm install mongoose
	npm install mongoose-paginate

- Instalando Require
	npm instal require-dir


- **Utilizando Containers**
	- Docker
https://www.docker.com/

	- MongoDB VM
	docker pull mongo (instalando o MongoDB)
	docker run --name mongodb -p 27017:27017 -d mongo (Subindo o servidor e direcionando porta local para a porta virtual do MongoDB)
	docker ps (Mostrar as imagens que estão sendo rodadas)
	docker ps -a (Mostrar as imagens que estão pausadas)
	docker start mongodb (Levantar DB pausada <mongodb é o nome da minha base)