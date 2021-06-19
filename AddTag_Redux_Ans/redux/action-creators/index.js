let nextId = 0;

export const addTag = (text) => ({
  type: "ADD_TAG",
  text,
  id: nextId++,
});

export const deleteTag = (id) => ({
  type: "DELETE_TAG",
  id,
});