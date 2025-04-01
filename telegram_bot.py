import requests

class TelegramBot:
    def __init__(self, token):
        self.token = token
        self.api_url = f"https://api.telegram.org/bot{self.token}/"
    
    def send_message(self, chat_id, text):
        method = "sendMessage"
        params = {
            'chat_id': chat_id,
            'text': text
        }
        response = requests.get(self.api_url + method, params=params)
        return response.json()

# Глобальный объект для упрощения использования в блоках
bot_instance = None

def create_bot(token):
    global bot_instance
    bot_instance = TelegramBot(token)
    return bot_instance

def send_message(chat_id, text):
    if bot_instance:
        return bot_instance.send_message(chat_id, text)
    return {"ok": False, "error": "Bot not initialized"}