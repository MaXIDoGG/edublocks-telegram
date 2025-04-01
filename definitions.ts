const telegramColor = "#0088cc";

Blockly.Blocks['import_telegram'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Initialize Telegram Bot");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(telegramColor);
		this.setTooltip("Добавляет необходимый код для работы с Telegram API");
	}
};

Blockly.Blocks['telegram_bot_init'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("bot"), "bot")
			.appendField(" = create_bot(");
		this.appendValueInput("token")
			.setCheck("String");
		this.appendDummyInput()
			.appendField(")");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(telegramColor);
	}
};

Blockly.Blocks['telegram_send_message'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("send_message(");
		this.appendValueInput("chat_id")
			.setCheck("Number");
		this.appendValueInput("text")
			.setCheck("String");
		this.appendDummyInput()
			.appendField(")");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(telegramColor);
	}
};