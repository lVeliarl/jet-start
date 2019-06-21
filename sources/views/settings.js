import {JetView} from "webix-jet";

export default class SettingsView extends JetView {
	config() {
		return {
			rows: [
				{type: "header", template: "Settings", css: "webix_header section_header"},
				{cols: [
					{
						view: "select",
						label: "Language:",
						options: [
							{id: "1", value: "RU"},
							{id: "2", value: "EN"}
						]}
				],
				type: "section"},
				{template: " ", borderless: true}
			]
		};
	}
}

