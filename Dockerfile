# myproject/Dockerfile
FROM httpd:2.4

# Copiar arquivo de configuração do Apache
COPY apache/000-default.conf /usr/local/apache2/conf/000-default.conf

# Copiar arquivos HTML para o diretório raiz do Apache
COPY ./dist /usr/local/apache2/htdocs/

# Habilitar módulos do Apache
RUN sed -i 's/^#\(LoadModule rewrite_module modules\/mod_rewrite.so\)/\1/' /usr/local/apache2/conf/httpd.conf
RUN echo 'Include /usr/local/apache2/conf/000-default.conf' >> /usr/local/apache2/conf/httpd.conf
