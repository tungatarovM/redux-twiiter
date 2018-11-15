export default (store) => (next) => (action) => {
  console.group(action.type)
  console.log('The action:', action)
  const returnValue = next(action);
  console.log('The new states:', store.getState())
  console.groupEnd()
  return returnValue;
}