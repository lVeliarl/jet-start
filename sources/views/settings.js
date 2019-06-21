import {JetView} from "webix-jet";

export default class SettingsView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		return {
			rows: [
				{type: "header", template: _("Settings"), css: "webix_header section_header"},
				{cols: [
					{
						view: "segmented",
						label: _("Language"),
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

