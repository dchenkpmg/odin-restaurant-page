import { createElement } from "./utils.js";

export function renderPageAbout() {
  const body = document.querySelector("#content");
  const title = createElement("div", null, body, "title");
  const contact = createElement("div", null, body, "contact");

  title.appendChild(createElement("h1", "Contact Us", title, "title-text"));

  contact.appendChild(
    createElement("h1", "Boaty McBoatface", contact, "title-text")
  );

  const contactList = contact.appendChild(
    createElement("ul", null, contact, "list")
  );
  contactList.appendChild(
    createElement("li", "Chef", contactList, "list-item")
  );
  contactList.appendChild(
    createElement("li", "555-555-5554", contactList, "list-item")
  );
  contactList.appendChild(
    createElement(
      "li",
      "totallyRealEmail@notFake.com",
      contactList,
      "list-item"
    )
  );
}
