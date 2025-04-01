const telegramColor = "#0088cc";

// definitions
Blockly.Blocks['test_block'] = {
	init: function () {
		this.appendDummyInput().appendField("Test");
		this.setColour("#ff0000");
	}
};

Blockly.Blocks['import_telegram'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("import requests");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(telegramColor);
	}
};

Blockly.Blocks['telegram_bot_init'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("bot"), "bot")
			.appendField(" = telegram.Bot(");
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
			.appendField(new Blockly.FieldVariable("bot"), "bot")
			.appendField(".send_message(");
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