# Chef Pedro Fortes - Landing Page

Landing page premium para o Chef Pedro Fortes, especialista em churrasco. Desenvolvida com HTML, CSS (Vanilla) e JS, containerizada com Docker.

## 🚀 Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/pedbender123/chefortes.git
   cd chefortes
   ```

2. **Suba o container:**
   ```bash
   docker-compose up -d
   ```

3. **Acesse:**
   Abra `http://localhost:2100` no seu navegador.

## ☁️ Como Rodar na VPS (Primeira Vez)

1. **Acesse sua VPS via SSH.**

2. **Clone o projeto:**
   ```bash
   git clone https://github.com/pedbender123/chefortes.git
   ```

3. **Entre na pasta:**
   ```bash
   cd chefortes
   ```

4. **Inicie a aplicação:**
   ```bash
   docker-compose up -d --build
   ```
   *O `--build` garante que a imagem seja construída do zero.*

## 🔄 Como Atualizar na VPS (Deploy Contínuo)

Sempre que fizer alterações e subir para o GitHub, rode estes comandos na VPS para atualizar:

```bash
cd chefortes
git pull origin main
docker-compose down
docker-compose up -d --build
```

## 🛠️ Tecnologias
- HTML5
- CSS3 (Variáveis, Flexbox, Grid)
- JavaScript (Intersection Observer)
- Docker & Docker Compose
- Nginx
