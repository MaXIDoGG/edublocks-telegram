Blockly.Python['import_telegram'] = function (block) {
	return 'import requests\n\n';
};

Blockly.Python['telegram_bot_init'] = function (block) {
	const botVar = Blockly.Python.nameDB_.getName(block.getFieldValue('bot'), Blockly.VARIABLE_CATEGORY_NAME);
	const token = Blockly.Python.valueToCode(block, 'token', Blockly.Python.ORDER_ATOMIC);
	return `${botVar} = Bot(${token})\n`;
};

Blockly.Python['telegram_send_message'] = function (block) {
	const botVar = Blockly.Python.nameDB_.getName(block.getFieldValue('bot'), Blockly.VARIABLE_CATEGORY_NAME);
	const chatId = Blockly.Python.valueToCode(block, 'chat_id', Blockly.Python.ORDER_ATOMIC);
	const text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	return `${botVar}.send_message(${chatId}, ${text})\n`;
};