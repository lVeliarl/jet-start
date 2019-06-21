import {JetView} from "webix-jet";

export default class SettingsView extends JetView {
	config() {
		return {
			rows: [
				{type: "header", template: "Settings", css: "webix_header section_header"},
				{cols: [
					{
						view: "segmented",
						label: "Language:",
						name: "lang",
						options: [
							{id: "en", value: "EN"},
							{id: "ru", value: "RU"}
						],
						click: () => {
							this.toggleLanguage();
						}
					}
				],
				type: "section"},
				{template: " ", borderless: true}
			]
		};
	}

	toggleLanguage() {
		const langs = this.app.getService("locale");
		const value = this.getRoot().queryView({name: "lang"}).getValue();
		langs.setLang(value);
	}
}

