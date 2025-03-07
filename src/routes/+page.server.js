export const load = (event) => {
  return {
    x: event.locals.user?.name
  }
}