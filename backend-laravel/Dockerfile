FROM php:8.1-cli

# Instalar extensiones necesarias
RUN apt-get update && apt-get install -y \
    git unzip curl libzip-dev libonig-dev libxml2-dev \
    zip \
    && docker-php-ext-install pdo mbstring zip

# Instalar Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY . .

RUN composer install

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]

