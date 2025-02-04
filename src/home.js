import { createElement } from "./utils.js";

export function renderPageHome() {
  const body = document.querySelector("#content");
  const title = createElement("div", null, body, "title");
  const intro = createElement("div", null, body, "intro");
  const hours = createElement("div", null, body, "hours");
  const location = createElement("div", null, body, "location");

  title.appendChild(
    createElement("h1", "Boaty's Restaurant", title, "title-text")
  );

  intro.appendChild(
    createElement(
      "p",
      "Boaty's has the best dishes! The atmosphere and customer service make you feel like you are in the middle of the ocean on a boat! This is exactly the kind of place that I like to return to again and again.",
      intro,
      "intro-text"
    )
  );
  hours.appendChild(createElement("h1", "Hours", hours, "title-text"));
  const hoursList = hours.appendChild(createElement("ul", null, hours, "list"));
  hoursList.appendChild(
    createElement("li", "Sunday: 8am - 8pm", hoursList, "list-item")
  );
  hoursList.appendChild(
    createElement("li", "Monday: 6am - 6pm", hoursList, "list-item")
  );
  hoursList.appendChild(
    createElement("li", "Tuesday: 6am - 6pm", hoursList, "list-item")
  );
  hoursList.appendChild(
    createElement("li", "Wednesday: 6am - 6pm", hoursList, "list-item")
  );
  hoursList.appendChild(
    createElement("li", "Thursday: 6am - 10pm", hoursList, "list-item")
  );
  hoursList.appendChild(
    createElement("li", "Friday: 6am - 10pm", hoursList, "list-item")
  );
  hoursList.appendChild(
    createElement("li", "Saturday: 8am - 10pm", hoursList, "list-item")
  );
  location.appendChild(createElement("h1", "Location", location, "title-text"));
  location.appendChild(
    createElement(
      "p",
      "123 Lake Drive, Boat City, Lagoon Angeles",
      location,
      "text"
    )
  );
}
