import requests

class Bot:
    def __init__(self, token):
        self.token = token
        self.base_url = f"https://api.telegram.org/bot{self.token}/"

    def send_message(self, chat_id, text):
        url = f"{self.base_url}sendMessage"
        params = {
            "chat_id": chat_id,
            "text": text,
            "parse_mode": "HTML"  # Можно добавить поддержку Markdown/HTML
        }
        try:
            response = requests.get(url, params=params)
            response.raise_for_status()  # Проверка на ошибки
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Ошибка при отправке сообщения: {e}")
            return None