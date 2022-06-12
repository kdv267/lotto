# lotto


 ## Тестовое задание:
 Разработать небольшую лотерею, где игрок должен выбрать на первом поле 8 из 19 чисел, во втором 1 из 2 чисел. После отправки результата происходит сравнение выбранных чисел со случайно сгенерированным полем. При условии, что сумарно отгадано 4 и более чисел игрок побеждает.


## Используемые технологии:
React, Redux-toolkit, axios, axios-retry

## Основной функционал приложения

### Главная страница (на iPhone XR)

<img src='https://github.com/kdv267/lotto/blob/main/screenshots/XR%20uncheked.png' width='300' height='600'/>



### Выбраны все необходимые числа. 

Кнопка 'Посмотреть результат' стала активной

<img src='https://github.com/kdv267/lotto/blob/main/screenshots/XR%20cheked.png' width='300' height='600'/>

### Выбрано бОльшее количество чисел. 

 Кнопка 'Посмотреть результат' стала неактивной

<img src='https://github.com/kdv267/lotto/blob/main/screenshots/XR%20more%20than%20need.png' width='300' height='600'/>

### Страница с результатами. 
При открытии страницы происходит отправка данных по указанному адресу.

<img src='https://github.com/kdv267/lotto/blob/main/screenshots/XR%20win.png' width='300' height='600'/>


### Отправка данных не удалась
Приложение пытается отправить данные на сервер 3 раза с интервалом в 2 секунды. После неудачных попыток выводит ошибку. 

<img src='https://github.com/kdv267/lotto/blob/main/screenshots/XR%20failed.png' width='300' height='600'/>


