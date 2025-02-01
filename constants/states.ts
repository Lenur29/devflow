import ROUTES from "./routes";

export const DEFAULT_EMPTY = {
  title: "No Records Available",
  message:
    "It looks like the database is still waking up. Add some new entries to bring it to life.",
  button: {
    text: "Add Entry",
    href: ROUTES.HOME,
  },
};

export const DEFAULT_ERROR = {
  title: "Oops! Something Went Wrong",
  message:
    "Even the best systems have off days. Try again and see if luck is on your side.",
  button: {
    text: "Retry",
    href: ROUTES.HOME,
  },
};

export const EMPTY_QUESTION = {
  title: "No Questions Yet!",
  message:
    "The discussion board is waiting. Why not be the first to ask something interesting?",
  button: {
    text: "Post a Question",
    href: ROUTES.ASK_QUESTION,
  },
};

export const EMPTY_TAGS = {
  title: "No Tags Added",
  message:
    "There's a blank slate here. Start adding keywords to bring some structure.",
  button: {
    text: "Add Tag",
    href: ROUTES.TAGS,
  },
};

export const EMPTY_COLLECTIONS = {
  title: "Your Collections Are Empty",
  message:
    "You haven't saved anything yet. Start building a collection of your favorite content.",
  button: {
    text: "Create Collection",
    href: ROUTES.COLLECTION,
  },
};
