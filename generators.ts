Blockly.Python['import_telegram'] = function (block) {
	return 'import requests\n\n' +
		'class TelegramBot:\n' +
		'    def __init__(self, token):\n' +
		'        self.token = token\n' +
		'        self.api_url = f"https://api.telegram.org/bot{self.token}/"\n\n' +
		'    def send_message(self, chat_id, text):\n' +
		'        params = {\'chat_id\': chat_id, \'text\': text}\n' +
		'        response = requests.get(self.api_url + "sendMessage", params=params)\n' +
		'        return response.json()\n\n' +
		'bot_instance = None\n\n';
};

Blockly.Python['telegram_bot_init'] = function (block) {
	const botVar = Blockly.Python.nameDB_.getName(block.getFieldValue('bot'), Blockly.VARIABLE_CATEGORY_NAME);
	const token = Blockly.Python.valueToCode(block, 'token', Blockly.Python.ORDER_ATOMIC);
	return `global bot_instance\n${botVar} = TelegramBot(${token})\nbot_instance = ${botVar}\n`;
};

Blockly.Python['telegram_send_message'] = function (block) {
	const chatId = Blockly.Python.valueToCode(block, 'chat_id', Blockly.Python.ORDER_ATOMIC);
	const text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	return `bot_instance.send_message(${chatId}, ${text})\n`;
};