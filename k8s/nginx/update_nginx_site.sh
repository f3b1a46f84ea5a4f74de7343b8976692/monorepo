#!/bin/bash

# Определяем путь к текущему конфигурационному файлу сайта Nginx
NGINX_SITE_CONF="/etc/nginx/sites-available/default"

# Определяем путь к новому конфигурационному файлу (он должен быть рядом с этим скриптом)
SCRIPT_DIR=$(dirname "$0")
NEW_SITE_CONF="$SCRIPT_DIR/nginx-site.conf.new"

# Проверяем, существует ли новый конфигурационный файл
if [ -f "$NEW_SITE_CONF" ]; then
    echo "Новый конфигурационный файл найден: $NEW_SITE_CONF"

    # Проверяем, существует ли текущий конфигурационный файл
    if [ -f "$NGINX_SITE_CONF" ]; then
        # Создаем резервную копию текущего конфигурационного файла
        cp "$NGINX_SITE_CONF" "$NGINX_SITE_CONF.bak"
        echo "Резервная копия текущей конфигурации сохранена: $NGINX_SITE_CONF.bak"
    fi

    # Перезаписываем текущий конфигурационный файл новым
    cp "$NEW_SITE_CONF" "$NGINX_SITE_CONF"
    echo "Конфигурация Nginx обновлена в sites-available/default."

    # Проверяем синтаксис конфигурации Nginx
    nginx -t

    if [ $? -eq 0 ]; then
        echo "Конфигурация Nginx прошла проверку. Перезапускаем Nginx..."

        # Перезапускаем Nginx для применения новых настроек
        systemctl restart nginx
        echo "Nginx перезапущен."
    else
        echo "Ошибка в конфигурации Nginx. Восстанавливаем старую конфигурацию..."

        # Восстанавливаем старую конфигурацию из резервной копии, если проверка не прошла
        mv "$NGINX_SITE_CONF.bak" "$NGINX_SITE_CONF"
        echo "Конфигурация Nginx восстановлена из резервной копии."
    fi
else
    echo "Ошибка: новый конфигурационный файл $NEW_SITE_CONF не найден."
fi
