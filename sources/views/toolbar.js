import {JetView} from "webix-jet";

export default class Toolbar extends JetView {
	constructor(app, name, data) {
		super(app, name);
		console.log(data);
	}

	config() {
		return {
			view: "label",
			label: "My App",
			align: "center",
			height: 50
		};
	}

	init() {
		console.log(this.getRoot().data.label);
	}
}
