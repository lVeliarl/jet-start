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
						template: "#Name# <br> #Email# <span class='webix_icon wxi-close remove_contact'></span>",
						select: true,
						type: {height: 62},
						scroll: "auto",
						on: {
							onAfterSelect: (id) => {
								this.show(`../contactsView?id=${id}`);
							}
						},
						onClick: {
							remove_contact: (e, id) => {
								this.webix.confirm({
									title: "Remove this item",
									text: "Are you sure you want to remive this item?"
								}).then(() => {
									this.$$("contacts_list").remove(id);
									this.$$("contacts_list").clearSelection();
								});
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
