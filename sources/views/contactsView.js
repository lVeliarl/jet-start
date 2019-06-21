import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";
import ContactsForm from "./contactsForm";

export default class ContactsView extends JetView {
	config() {
		return {
			cols: [
				{rows: [
					{type: "header", template: "Contacts", css: "webix_header section_header"},
					{
						view: "list",
						localId: "contacts_list",
						template: "#Name# <br> #Email#",
						select: true,
						type: {height: 62},
						scroll: "auto",
						on: {
							onAfterSelect: (id) => {
								this.show(`../contactsView?id=${id}`);
								this.app.callEvent("onAfterSelect", [id]);
							}
						}
					}
				]},
				ContactsForm
			]
		};
	}

	init(view) {
		view.queryView("list").sync(contacts);
		// ContactsForm.bind(this.$$("contacts_list"));
		// console.log(ContactsForm);

		let list = this.$$("contacts_list");
		list.select(list.getFirstId());
	}

	urlChange() {
		let list = this.$$("contacts_list");
		let id = this.getParam("id");

		if (id && list.exists(id)) {
			list.select(id);
		}
	}
}
