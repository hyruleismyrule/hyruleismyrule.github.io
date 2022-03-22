
export const saveComments = (comments) => {
  let storageItem = JSON.stringify(comments);
  window.localStorage.setItem(comments.type, storageItem);
}

export const loadComments = (type) => {
  let storageItem = window.localStorage.getItem(type);
  if (!storageItem)
    return [];
  return JSON.parse(storageItem);
}