import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";

export default class ContactsForm extends JetView {
	config() {
		return {
			view: "form",
			width: "400",
			localId: "contacts_form",
			elements: [
				{view: "text", name: "Name", label: "User name", labelPosition: "top"},
				{view: "text", name: "Email", label: "Email", labelPosition: "top"},
				{
					view: "combo",
					label: "Country",
					localId: "countries",
					placeholder: "Options",
					options: [
						{id: 1, value: "USA"},
						{id: 2, value: "Canada"},
						{id: 3, value: "Italy"}
					]
				},
				{
					view: "combo",
					label: "Status",
					value: "#Name#",
					placeholder: "Options",
					options: [
						{id: 1, Name: "Busy", Icon: "cogs"},
						{id: 2, Name: "Open", Icon: "user"}
					]
				},
				{}
			]
		};
	}

	init() {
		this.on(this.app, "onAfterSelect", (id) => {
			let item = contacts.getItem(id);
			this.$$("contacts_form").setValues(item);
		});
	}

	urlChange() {
		// this.$$("contacts_form").getParam("id");
	}
}
